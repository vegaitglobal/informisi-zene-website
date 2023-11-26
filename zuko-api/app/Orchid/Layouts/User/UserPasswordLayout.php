<?php

declare(strict_types=1);

namespace App\Orchid\Layouts\User;
use App\Models\User;
use Orchid\Screen\Field;
use Orchid\Screen\Fields\Password;
use Orchid\Screen\Layouts\Rows;

class UserPasswordLayout extends Rows
{
    /**
     * The screen's layout elements.
     *
     * @return Field[]
     */
    public function fields(): array
    {
        /** @var User $user */
        $user = $this->query->get('user');

        $placeholder = $user->exists
            ? __('Ostavite prazno da biste zadržali trenutnu lozinku.')
            : __('Unesite lozinku koju želite postaviti.');

        return [
            Password::make('user.password')
                ->placeholder($placeholder)
                ->title(__('Lozinka')),
        ];
    }
}
