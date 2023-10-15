<?php

namespace App\Orchid\Screens\Post;

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
    /*
     * Fetch data to be displayed on the screen.
     * 
     *
     *
     *
     * @return array
     */
    public function query(Block $block): iterable
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

    public function save(Request $request, Block $block)
    {
        $block->fill($request->get('block'));
        $block->save();

        Toast::info(__("Block was saved"));
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
            BlockEditLayout::class
        ];
    }
}
