<?php

namespace App\Orchid\Screens\DonationInfo;

use App\Models\DonationInfo;
use App\Orchid\Layouts\DonationInfo\DonationInfoLayout;
use Orchid\Screen\Actions\Link;
use Orchid\Screen\Screen;
use Orchid\Support\Facades\Toast;
use Illuminate\Http\Request;


class DonationInfoScreen extends Screen
{
    /**
     * Fetch data to be displayed on the screen.
     *
     * @return array
     */
    public function query(): iterable
    {
        return [
            'donation_infos' => DonationInfo::filters()
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
        return 'Donation Info';
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
            ->href(route('platform.donation_info.create')),];
    }

    
    public function remove(Request $request): void
    {
        DonationInfo::findOrFail($request->get('id'))->delete();

        Toast::info(__('DonationInfo was removed'));
    }

    /**
     * The screen's layout elements.
     *
     * @return \Orchid\Screen\Layout[]|string[]
     */
    public function layout(): iterable
    {
        return [
            DonationInfoLayout::class  
        ];
    }
}
