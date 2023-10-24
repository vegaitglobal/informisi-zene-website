<?php

namespace App\Orchid\Screens\Post;

use App\Models\Post;
use App\Models\Block;
use App\Orchid\Layouts\Post\PostEditLayout;
use App\Orchid\Layouts\Block\BlockListLayout;
use Illuminate\Http\Request;
use Orchid\Screen\Actions\Button;
use Orchid\Screen\Screen;
use Orchid\Support\Facades\Toast;
use Orchid\Support\Facades\Layout;
use App\Notifications\NewPost;
use App\Models\Guest;
use Notification;

class PostEditScreen extends Screen
{
    /**
     * @var Post
     */
    public $post;
    /*
     * Fetch data to be displayed on the screen.
     * 
     *
     *
     *
     * @return array
     */
    public function query(Post $post): iterable
    {
        return [
            "post" => $post,
            "blocks" => $post->blocks,
            'categories' => $post->categories
        ];
    }

    /**
     * The name of the screen displayed in the header.
     *
     * @return string|null
     */
    public function name(): ?string
    {
        return 'Modifikacija vesti';
    }

    /**
     * The screen's action buttons.
     *
     * @return \Orchid\Screen\Action[]
     */
    public function commandBar(): iterable
    {
        return [
            Button::make(__("Save"))
                ->icon("check")
                ->method("save"),
                
            Button::make(__('Izbriši'))
                ->icon('bs.trash3')
                ->confirm(__('Da li ste sigurni da želite da izbrišete vest?'))
                ->method('remove')
                ->canSee($this->post->exists),
                
            Button::make(__('Obavesti korisnike'))
                ->icon('bs.people')
                ->confirm(__('Da li ste sigurni da želite da pošaljete obaveštenja korisnicima?'))
                ->method('sendPushNotifications')
                ->canSee($this->post->exists)
        ];
    }

    public function sendPushNotifications(Post $post)
    {
        Notification::send(Guest::all(),new NewPost($post));
        
        Toast::info(__("Obaveštenja su poslata."));
    }

    public function save(Request $request, Post $post)
    {
        $post->fill($request->get('post'));
        $post->save();

        $post->categories()->sync($request->input('categories', []));

        Toast::info(__("Vest je kreirana."));
        return redirect()->route('platform.posts');
    }

    public function addBlockToPost(Request $request, Post $post)
    {
        return redirect()->route('platform.blocks.create',$post->id);
    }

    /**
     * The screen's layout elements.
     *
     * @return \Orchid\Screen\Layout[]|string[]
     */
    public function layout(): iterable
    {
        return [
            PostEditLayout::class,
            Layout::block(BlockListLayout::class)
            ->title(__('Blokovi'))
            ->description('Ovde su prikazani svi blokovi koji sačinjavaju ovu vest raspoređeni u redosledu kao što su i prikazani na sajtu')
            ->commands(
                Button::make(__('Dodaj'))
                    ->method('addBlockToPost')
            )
        ];
    }
        /**
     * @throws \Exception
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function remove(Post $post)
    {
        $post->delete();

        Toast::info(__('Vest je izbrisana!'));

        return redirect()->route('platform.posts');
    }
}
