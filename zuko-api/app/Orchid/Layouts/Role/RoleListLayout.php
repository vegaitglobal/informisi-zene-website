<?php

declare(strict_types=1);

namespace App\Orchid\Layouts\Role;

use Orchid\Platform\Models\Role;
use Orchid\Screen\Actions\Link;
use Orchid\Screen\Components\Cells\DateTimeSplit;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Layouts\Table;
use Orchid\Screen\TD;
use Orchid\Screen\Actions\DropDown;
use Orchid\Screen\Actions\Button;

class RoleListLayout extends Table
{
    /**
     * @var string
     */
    public $target = 'roles';

    /**
     * @return TD[]
     */
    public function columns(): array
    {
        return [
            TD::make('name', __('Naziv'))
                ->sort()
                ->cantHide()
                ->filter(Input::make())
                ->render(fn (Role $role) => Link::make($role->name)
                    ->route('platform.systems.roles.edit', $role->id)),

            TD::make('slug', __('Slug'))
                ->sort()
                ->cantHide()
                ->filter(Input::make()),

            TD::make('created_at', __('Kreirano'))
                ->usingComponent(DateTimeSplit::class)
                ->align(TD::ALIGN_RIGHT)
                ->defaultHidden()
                ->sort(),

            TD::make('updated_at', __('Poslednja promena'))
                ->usingComponent(DateTimeSplit::class)
                ->align(TD::ALIGN_RIGHT)
                ->sort(),

                TD::make(__('Akcije'))
                ->align(TD::ALIGN_CENTER)
                ->width('100px')
                ->render(fn (Role $role) => DropDown::make()
                    ->icon('bs.three-dots-vertical')
                    ->list([

                        Link::make(__('Modifikuj'))
                            ->route('platform.systems.roles.edit', $role->id)
                            ->icon('bs.pencil'),

                        Button::make(__('Izbriši'))
                            ->icon('bs.trash3')
                            ->confirm(__('Kada se uloga izbriše, sve povezane dozvole i privilegije će trajno biti uklonjene. Važno je napomenuti da će sve trenutne zadatke ili odgovornosti dodeljene ovoj ulozi prestati da važe. Pre nego što obrišete ulogu, molimo vas da se uverite da su sve ključne funkcije ili dozvole prenesene na druge uloge ako je potrebno. Ova radnja je nepovratna, i svi istorijski podaci vezani za ovu ulogu će trajno biti izbrisani. Molimo vas da pažljivo pregledate i potvrdite pre nego što nastavite.'))
                            ->method('remove', [
                                'id' => $role->id,
                            ]),
                    ])),
        ];
    }
}
