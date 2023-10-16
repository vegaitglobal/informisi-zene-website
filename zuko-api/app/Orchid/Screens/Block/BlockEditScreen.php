<?php

namespace App\Orchid\Screens\Block;

use App\Models\Post;
use App\Models\Block;
use App\Orchid\Layouts\Post\PostEditLayout;
use App\Orchid\Layouts\Block\BlockEditLayout;
use Illuminate\Http\Request;
use Orchid\Screen\Actions\Button;
use Orchid\Screen\Screen;
use Orchid\Support\Facades\Toast;

class BlockEditScreen extends Screen
{
    /**
     * @var Block
     */
    public $block;
    
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
    public function query(Block $block, Post $post): iterable
    {
        return [
            "block" => $block
        ];
    }

    /**
     * The name of the screen displayed in the header.
     *
     * @return string|null
     */
    public function name(): ?string
    {
        return 'BlockEditScreen';
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

    public function save(Request $request, Block $block, Post $post)
    {
        $block->fill($request->get('block'));
        $block->post_id = $post->id;
        $block->save();
        Toast::info(__("Block was saved"));
        return redirect()->route('platform.posts.edit',$post);
    }

    /**
     * The screen's layout elements.
     *
     * @return \Orchid\Screen\Layout[]|string[]
     */
    public function layout(): iterable
    {
        return [
            BlockEditLayout::class
        ];
    }
}
