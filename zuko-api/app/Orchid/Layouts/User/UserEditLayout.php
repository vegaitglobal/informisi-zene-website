<?php

declare(strict_types=1);

namespace App\Orchid\Layouts\User;

use Orchid\Screen\Field;
use Orchid\Screen\Fields\CheckBox;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Layouts\Rows;
use Orchid\Screen\Fields\Cropper;

class UserEditLayout extends Rows
{
    /**
     * The screen's layout elements.
     *
     * @return Field[]
     */
    public function fields(): array
    {
        return [
            CheckBox::make('user.show')
                ->title(__('Prikaži na sajtu?'))
                ->placeholder('Opcija ukoliko želite da ovaj zaposleni bude vidljiv na sajtu.')
                ->sendTrueOrFalse(),
            Input::make('user.name')
                ->type('text')
                ->max(255)
                ->required()
                ->title(__('Ime'))
                ->placeholder(__('Ime')),

            Input::make('user.email')
                ->type('email')
                ->required()
                ->title(__('Email'))
                ->placeholder(__('Email')),
            Cropper::make('user.profile_image_url'),
        ];
    }
}
