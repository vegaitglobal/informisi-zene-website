<?php

namespace App\Orchid\Screens\Donor;

use Orchid\Screen\Screen;
use App\Models\Donor;
use App\Orchid\Layouts\Donor\DonorListLayout;
use Orchid\Screen\Actions\Link;
use Illuminate\Http\Request;
use Orchid\Support\Facades\Toast;

class DonorListScreen extends Screen
{
    /**
     * Fetch data to be displayed on the screen.
     *
     * @return array
     */
    public function query(): iterable
    {
        return [
            'donors' => Donor::filters()
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
        return 'Donatori';
    }

    /**
     * The screen's action buttons.
     *
     * @return \Orchid\Screen\Action[]
     */
    public function commandBar(): iterable
    {
        return [
            Link::make(__('Dodaj'))
                ->icon('plus')
                ->href(route('platform.donors.create')),];
    }

    public function remove(Request $request): void
    {
        Donor::findOrFail($request->get('id'))->delete();

        Toast::info(__('Donator je izbrisan'));
    }
    /**
     * The screen's layout elements.
     *
     * @return \Orchid\Screen\Layout[]|string[]
     */
    public function layout(): iterable
    {
        return [
            DonorListLayout::class
        ];
    }
}
