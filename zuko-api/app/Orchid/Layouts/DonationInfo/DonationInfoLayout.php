<?php

declare(strict_types=1);

namespace App\Orchid\Layouts\DonationInfo;

use App\Models\DonationInfo;
use Orchid\Screen\Actions\Button;
use Orchid\Screen\Actions\DropDown;
use Orchid\Screen\Actions\Link;
use Orchid\Screen\Actions\ModalToggle;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Layouts\Persona;
use Orchid\Screen\Layouts\Table;
use Orchid\Screen\TD;

class DonationInfoLayout extends Table
{
    /**
     * @var string
     */
    public $target = 'donation_infos';

    /**
     * @return TD[]
     */
    public function columns(): array
    {
        return [
            TD::make('account_number', __('Broj računa'))
                ->sort()
                ->cantHide()
                ->filter(Input::make())
                ->render(fn (DonationInfo $donation) => $donation->account_number),

            TD::make('recipient_name', __('Naziv primaoca'))
            ->sort()
            ->cantHide()
            ->filter(Input::make())
            ->render(fn (DonationInfo $donation) => $donation->recipient_name),

            TD::make('default_amount', __('Predefinisana vrednost'))
            ->sort()
            ->cantHide()
            ->filter(Input::make())
            ->render(fn (DonationInfo $donation) => $donation->default_amount),

            TD::make('payment_code', __('Šifra plaćanja'))
            ->sort()
            ->cantHide()
            ->filter(Input::make())
            ->render(fn (DonationInfo $donation) => $donation->payment_code),

            TD::make('created_at', __('Kreirano'))
                ->sort()
                ->render(fn (DonationInfo $donation) => $donation->created_at->toDateTimeString()),
            TD::make(__('Akcije'))
                ->align(TD::ALIGN_CENTER)
                ->width('100px')
                ->render(fn (DonationInfo $donation) => DropDown::make()
                    ->icon('bs.three-dots-vertical')
                    ->list([

                        Link::make(__('Modifikuj'))
                            ->route('platform.donation_info.edit', $donation->id)
                            ->icon('bs.pencil'),

                        Button::make(__('Izbriši'))
                            ->icon('bs.trash3')
                            ->confirm(__('Da li ste sigurni da želite da izbrišete informacije o donaciji?'))
                            ->method('remove', [
                                'id' => $donation->id,
                            ]),
                    ])),
        ];
    }
}
