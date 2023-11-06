<?php

namespace App\Orchid\Screens\DonationInfo;

use App\Models\DonationInfo;
use App\Orchid\Layouts\DonationInfo\DonationInfoEditLayout;
use Orchid\Screen\Actions\Button;
use Orchid\Screen\Screen;
use Illuminate\Http\Request;
use Orchid\Support\Facades\Toast;

class DonationInfoEditScreen extends Screen
{
    /**
     * Fetch data to be displayed on the screen.
     *
     * @return array
     * 
     */
    public $donation;

    public function query(DonationInfo $donation): iterable
    {
        return [
            'donation_infos'       => $donation
        ];
    }

    /**
     * The name of the screen displayed in the header.
     *
     * @return string|null
     */
    public function name(): ?string
    {
        return 'Modifikacija informacija za donacije';
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

    public function rules(): array
    {
        return [
            'donation_infos.account_number' => 'required|regex:/^[a-zA-Z0-9\-\.]+$/',
            'donation_infos.default_amount' => 'required|regex:/^[a-zA-Z0-9\-\.]+$/',
        ];
    }

    public function save(Request $request, DonationInfo $donation)
    {

        $data = $request->get('donation_infos');
        $donation->fill($data);
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
            DonationInfoEditLayout::class
        ];
    }
}
