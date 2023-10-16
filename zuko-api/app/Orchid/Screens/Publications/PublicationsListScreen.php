<?php

namespace App\Orchid\Screens\Publications;

use Orchid\Screen\Screen;
use App\Models\Publications;
use App\Orchid\Layouts\Publications\PublicationsListLayout;
use Orchid\Screen\Actions\Link;
use Illuminate\Http\Request;
use Orchid\Support\Facades\Toast;

class PublicationsListScreen extends Screen
{
    /**
     * Fetch data to be displayed on the screen.
     *
     * @return array
     */
    public function query(): iterable
    {
        return [
            'publications' => Publications::filters()
                ->defaultSort('created_at', 'desc')
                ->paginate(),
        ];
    }

    /**
     * The name of the screen displayed in the header.
     *
     * @return string|null
     */
    public function name(): ?string
    {
        return 'PublicationsListScreen';
    }

    /**
     * The screen's action buttons.
     *
     * @return \Orchid\Screen\Action[]
     */
    public function commandBar(): iterable
    {
        return [
            Link::make(__('Add'))
                ->icon('plus')
                ->href(route('platform.publications.create')),];
    }

    public function remove(Request $request): void
    {
        Publications::findOrFail($request->get('id'))->delete();

        Toast::info(__('Publication was removed'));
    }

    /**
     * The screen's layout elements.
     *
     * @return \Orchid\Screen\Layout[]|string[]
     */
    public function layout(): iterable
    {
        return [
            PublicationsListLayout::class
        ];
    }
}
