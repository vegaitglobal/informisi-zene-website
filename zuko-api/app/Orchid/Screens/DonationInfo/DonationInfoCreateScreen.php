<?php

namespace App\Orchid\Screens\DonationInfo;

use App\Models\DonationInfo;
use App\Orchid\Layouts\DonationInfo\DonationInfoCreateLayout;
use Illuminate\Http\Request;
use Orchid\Screen\Actions\Button;
use Orchid\Screen\Fields\Group;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Screen;
use Orchid\Support\Facades\Toast;

class DonationInfoCreateScreen extends Screen
{
    /**
     * Fetch data to be displayed on the screen.
     *
     * @return array
     */
    public function query(): iterable
    {
        return [];
    }

    /**
     * The name of the screen displayed in the header.
     *
     * @return string|null
     */
    public function name(): ?string
    {
        return 'Donation Info Create';
    }

    /**
     * The screen's action buttons.
     *
     * @return \Orchid\Screen\Action[]
     */
    public function commandBar(): iterable
    {
        return [
            Button::make(__('Save'))
            ->icon('check')
            ->method('save')
        ];
    }

    public function save(Request $request, DonationInfo $donation)
    {

        $donation->fill($request->get('donation_infos'));
        $donation->save();

        Toast::info(__('Donation was saved'));
        return redirect()->route('platform.donation_info');
    }

    /**
     * The screen's layout elements.
     *
     * @return \Orchid\Screen\Layout[]|string[]
     */
    public function layout(): iterable
    {
        return [
           DonationInfoCreateLayout::class
        ];
    }
}
