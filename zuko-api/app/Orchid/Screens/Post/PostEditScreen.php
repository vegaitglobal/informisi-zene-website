<?php

namespace App\Orchid\Screens\Post;

use App\Models\Post;
use App\Orchid\Layouts\Post\PostEditLayout;
use Illuminate\Http\Request;
use Orchid\Screen\Actions\Button;
use Orchid\Screen\Screen;
use Orchid\Support\Facades\Toast;

class PostEditScreen extends Screen
{
    /**
     * @var Role
     */
    public $role;
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
        return 'PostEditScreen';
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
                ->method("save")
        ];
    }

    public function save(Request $request, Post $post)
    {
        $post = new Post;
        $post->fill($request->get('post'));
        $post->save();

        $post->categories()->sync($request->input('categories', []));

        Toast::info(__("Post was saved"));
        return redirect()->route('platform.posts');
    }

    /**
     * The screen's layout elements.
     *
     * @return \Orchid\Screen\Layout[]|string[]
     */
    public function layout(): iterable
    {
        return [
            PostEditLayout::class
        ];
    }
}
