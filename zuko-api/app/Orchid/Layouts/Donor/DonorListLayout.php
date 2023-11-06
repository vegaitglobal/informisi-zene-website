<?php

declare(strict_types=1);

namespace App\Orchid\Layouts\Donor;

use App\Models\Donor;
use Orchid\Screen\Actions\Button;
use Orchid\Screen\Actions\DropDown;
use Orchid\Screen\Actions\Link;
use Orchid\Screen\Actions\ModalToggle;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Layouts\Persona;
use Orchid\Screen\Layouts\Table;
use Orchid\Screen\TD;

class DonorListLayout extends Table
{
    /**
     * @var string
     */
    public $target = 'donors';

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
                ->render(fn (Donor $donor) => $donor->name),

            TD::make('created_at', __('Kreirano'))
                ->sort()
                ->render(fn (Donor $donor) => $donor->created_at->toDateTimeString()),
            TD::make(__('Akcije'))
                ->align(TD::ALIGN_CENTER)
                ->width('100px')
                ->render(fn (Donor $donor) => DropDown::make()
                    ->icon('bs.three-dots-vertical')
                    ->list([

                        Link::make(__('Modifikuj'))
                            ->route('platform.donors.edit', $donor->id)
                            ->icon('bs.pencil'),

                        Button::make(__('Izbriši'))
                            ->icon('bs.trash3')
                            ->confirm(__('Da li ste sigurni da želite da izbrišete donatora?'))
                            ->method('remove', [
                                'id' => $donor->id,
                            ]),
                    ])),
        ];
    }
}
