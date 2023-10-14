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
            TD::make('account_number', __('Accaunt Number'))
                ->sort()
                ->cantHide()
                ->filter(Input::make())
                ->render(fn (DonationInfo $donation) => $donation->account_number),

            TD::make('recipient_name', __('Recipient Name'))
            ->sort()
            ->cantHide()
            ->filter(Input::make())
            ->render(fn (DonationInfo $donation) => $donation->recipient_name),

            TD::make('default_amount', __('Amount'))
            ->sort()
            ->cantHide()
            ->filter(Input::make())
            ->render(fn (DonationInfo $donation) => $donation->default_amount),

            TD::make('payment_code', __('Payment Code'))
            ->sort()
            ->cantHide()
            ->filter(Input::make())
            ->render(fn (DonationInfo $donation) => $donation->payment_code),

            TD::make('created_at', __('Created'))
                ->sort()
                ->render(fn (DonationInfo $donation) => $donation->created_at->toDateTimeString()),
            TD::make(__('Actions'))
                ->align(TD::ALIGN_CENTER)
                ->width('100px')
                ->render(fn (DonationInfo $donation) => DropDown::make()
                    ->icon('bs.three-dots-vertical')
                    ->list([

                        Link::make(__('Edit'))
                            ->route('platform.donation_info.edit', $donation->id)
                            ->icon('bs.pencil'),

                        Button::make(__('Delete'))
                            ->icon('bs.trash3')
                            ->confirm(__('Are you sure that you want to delete this donor?'))
                            ->method('delete', [
                                'donation_info' => $donation->id,
                            ]),
                    ])),
        ];
    }
}
