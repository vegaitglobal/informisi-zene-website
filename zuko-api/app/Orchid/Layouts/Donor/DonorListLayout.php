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
            TD::make('name', __('Name'))
                ->sort()
                ->cantHide()
                ->filter(Input::make())
                ->render(fn (Donor $donor) => $donor->name),

            TD::make('created_at', __('Created'))
                ->sort()
                ->render(fn (Donor $donor) => $donor->created_at->toDateTimeString()),
            TD::make(__('Actions'))
                ->align(TD::ALIGN_CENTER)
                ->width('100px')
                ->render(fn (Donor $donor) => DropDown::make()
                    ->icon('bs.three-dots-vertical')
                    ->list([

                        Link::make(__('Edit'))
                            ->route('platform.donors.edit', $donor->id)
                            ->icon('bs.pencil'),

                        Button::make(__('Delete'))
                            ->icon('bs.trash3')
                            ->confirm(__('Are you sure that you want to delete this donor?'))
                            ->method('remove', [
                                'id' => $donor->id,
                            ]),
                    ])),
        ];
    }
}
