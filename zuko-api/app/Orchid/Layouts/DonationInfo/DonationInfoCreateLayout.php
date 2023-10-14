<?php

declare(strict_types=1);

namespace App\Orchid\Layouts\DonationInfo;

use Orchid\Screen\Actions\Button;
use Orchid\Screen\Actions\DropDown;
use Orchid\Screen\Actions\ModalToggle;
use Orchid\Screen\Field;
use Orchid\Screen\Fields\Group;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Layouts\Rows;
use Orchid\Screen\TD;

class DonationInfoCreateLayout extends Rows
{
    /**
     * The screen's layout elements.
     *
     * @return Field[]
     */
    public function fields(): array
    {
        return [
            Group::make([
                Input::make('donation_infos.account_number')
                    ->title('Account Number')
                    ->required(),
    
                Input::make('donation_infos.recipient_name')
                    ->title('Recipient Name')
                    ->required(),
    
                Input::make('donation_infos.default_amount')
                    ->title('Default Amount')
                    ->type('number')
                    ->required(),
    
                Input::make('donation_infos.payment_code')
                    ->title('Payment Code')
                    ->required(),
            ]),
        ];
    }
}