<?php

namespace App\Orchid\Screens\Block;

use Orchid\Screen\Screen;
use App\Models\Block;
use App\Models\Post;
use App\Orchid\Layouts\Block\BlockListLayout;
use Orchid\Screen\Actions\Link;
use Orchid\Support\Facades\Toast;

class BlockListScreen extends Screen
{ /**
    * @var Post
    */
   public $post;
    /**
     * Fetch data to be displayed on the screen.
     *
     * @return array
     */
    public function query(Post $post): iterable
    {
        return [
            'blocks' =>  $post->blocks,
        ];
    }

    /**
     * The name of the screen displayed in the header.
     *
     * @return string|null
     */
    public function name(): ?string
    {
        return 'BlockListScreen';
    }

    /**
     * The screen's action buttons.
     *
     * @return \Orchid\Screen\Action[]
     */
    public function commandBar(): iterable
    { 
        return [
            Link::make(__('bb'))
                ->icon("plus")
                ->href(route('platform.categories'))
        ];
    }

    public function remove(Request $request): void
    {
        Block::findOrFail($request->get('id'))->delete();

        Toast::info(__('Block was removed'));
    }
    /**
     * The screen's layout elements.
     *
     * @return \Orchid\Screen\Layout[]|string[]
     */
    public function layout(): iterable
    {
        return [
            BlockListLayout::class
        ];
    }
}
