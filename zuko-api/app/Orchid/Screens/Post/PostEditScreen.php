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
        $post->fill($request->get('post'));
        $post->save();

        $post->categories()->sync($request->input('categories', []));

        Toast::info(__("Post was saved"));
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
            ->title(__('Blocks'))
            ->description('Here are all of the blocks that will appear on the post')
            ->commands(
                Button::make(__('Add'))
                    ->method('addBlockToPost')
            )
        ];
    }
}
