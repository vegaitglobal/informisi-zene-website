<?php

declare(strict_types=1);

namespace App\Orchid\Layouts\User;

use Orchid\Screen\Field;
use Orchid\Screen\Fields\Password;
use Orchid\Screen\Layouts\Rows;

class ProfilePasswordLayout extends Rows
{
    /**
     * The screen's layout elements.
     *
     * @return Field[]
     */
    public function fields(): array
    {
        return [
            Password::make('old_password')
                ->placeholder(__('Unesi trenutnu lozinku'))
                ->title(__('Trenutna lozinka'))
                ->help('Ovo je vaša trenutno postavljena lozinka.'),

            Password::make('password')
                ->placeholder(__('Unesite lozinku koju želite postaviti.'))
                ->title(__('Nova lozinka')),

            Password::make('password_confirmation')
                ->placeholder(__('Unesite lozinku koju želite postaviti.'))
                ->title(__('Potvrda nove lozinke'))
                ->help('Dobra lozinka treba da ima barem 15 karaktera ili najmanje 8 karaktera, uključujući jedan broj i malo slovo.'),
        ];
    }
}
