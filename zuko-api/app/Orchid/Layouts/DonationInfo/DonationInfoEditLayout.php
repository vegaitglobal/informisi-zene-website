<?php

declare(strict_types=1);

namespace App\Orchid\Layouts\DonationInfo;

use Orchid\Screen\Field;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Layouts\Rows;

class DonationInfoEditLayout extends Rows
{
    /**
     * The screen's layout elements.
     *
     * @return Field[]
     */
    public function fields(): array
    {
        return [
            Input::make('donation_infos.account_number')
                ->title('Broj računa'),
            Input::make('donation_infos.recipient_name')
                ->title('Naziv primaoca'),
            Input::make('donation_infos.default_amount')
            ->title('Predefinisana vrednost'),
            Input::make('donation_infos.payment_code')
            ->title('Šifra plaćanja'),
        ];
    }
}