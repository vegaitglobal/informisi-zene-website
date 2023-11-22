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
            "block" => $block,
            $block->type => $block->value
        ];
    }

    /**
     * The name of the screen displayed in the header.
     *
     * @return string|null
     */
    public function name(): ?string
    {
        return 'Modifikacija bloka';
    }

    /**
     * The screen's action buttons.
     *
     * @return \Orchid\Screen\Action[]
     */
    public function commandBar(): iterable
    {
        return [
            Button::make(__("Sačuvaj"))
                ->icon("check")
                ->method("save"),

            Button::make(__('Remove'))
            ->icon('bs.trash3')
            ->confirm(__('Da li ste sigurni da želite da izbrišete vest?'))
            ->method('remove')
            ->canSee($this->block->exists)
        ];
    }

    public function save(Request $request, Block $block, Post $post)
    {
        $block->fill($request->get('block'));

        $request->validate([
            $block->type => ['required','max:10']
        ]);

        if($block->post_id == null)
        {
            $block->post_id = $post->id;
        }
        $block->value = $request->get($block->type);
        $block->save();
        Toast::info(__("Block was saved"));
        return redirect()->route('platform.posts.edit',$block->post);
    }

            /**
     * @throws \Exception
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function remove(Block $block)
    {
        $post = $block->post;
        $block->delete();

        Toast::info(__('Block je izbrisan!'));

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
