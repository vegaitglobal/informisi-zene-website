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
                    ->title('Broj računa')
                    ->required(),
    
                Input::make('donation_infos.recipient_name')
                    ->title('Naziv primaoca')
                    ->required(),
    
                Input::make('donation_infos.default_amount')
                    ->title('Predefinisana vrednost')
                    ->type('number')
                    ->required(),
    
                Input::make('donation_infos.payment_code')
                    ->title('Šifra plaćanja')
                    ->required(),
            ]),
        ];
    }
}