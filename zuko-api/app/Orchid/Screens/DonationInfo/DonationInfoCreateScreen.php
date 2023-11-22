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
        return 'Kreiranje informacija od donacijama';
    }

    /**
     * The screen's action buttons.
     *
     * @return \Orchid\Screen\Action[]
     */
    public function commandBar(): iterable
    {
        return [
            Button::make(__('Sačuvaj'))
            ->icon('check')
            ->method('save')
        ];
    }

    public function save(Request $request, DonationInfo $donation)
    {
        $request->validate([
            'donation_infos.account_number' => ['required','regex:/^[a-zA-Z0-9\-\.]+$/','max:191'],
            'donation_infos.recipient_name' => ['required','regex:/^[a-zA-Z0-9\-\.]+$/','max:191'],
            'donation_infos.default_amount' => ['required','max:11'],
            'donation_infos.payment_code' => ['required','max:11'],
        ]);

        $donation->fill($request->get('donation_infos'));
        $donation->save();

        Toast::info(__('Informacije o donaciji su sačuvane'));
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
