<?php

declare(strict_types=1);

namespace App\Orchid\Layouts\Publications;

use App\Models\Publications;
use Orchid\Screen\Actions\Button;
use Orchid\Screen\Actions\DropDown;
use Orchid\Screen\Actions\Link;
use Orchid\Screen\Actions\ModalToggle;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Layouts\Persona;
use Orchid\Screen\Layouts\Table;
use Orchid\Screen\Fields\Picture;
use Orchid\Screen\TD;

class PublicationsListLayout extends Table
{
    /**
     * @var string
     */
    public $target = 'publications';

    /**
     * @return TD[]
     */
    public function columns(): array
    {
        return [
            TD::make('type', __('Type'))
                ->sort()
                ->cantHide()
                ->filter(Input::make())
                ->render(fn (Publications $publication) => $publication->type),
                
            TD::make('title', __('Title'))
            ->sort()
            ->cantHide()
            ->filter(Input::make())
            ->render(fn (Publications $publication) => $publication->title),
            TD::make(__('Actions'))
                ->align(TD::ALIGN_CENTER)
                ->width('100px')
                ->render(fn (Publications $publication) => DropDown::make()
                    ->icon('bs.three-dots-vertical')
                    ->list([

                        Link::make(__('Edit'))
                            ->route('platform.publications.edit', $publication->id)
                            ->icon('bs.pencil'),

                        Button::make(__('Delete'))
                            ->icon('bs.trash3')
                            ->confirm(__('Are you sure that you want to delete this donor?'))
                            ->method('remove', [
                                'id' => $publication->id,
                            ]),
                    ])),
        ];
    }
}
