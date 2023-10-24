<?php

declare(strict_types=1);

namespace App\Orchid\Layouts\Block;

use App\Models\Block;
use Orchid\Screen\Actions\Button;
use Orchid\Screen\Actions\DropDown;
use Orchid\Screen\Actions\Link;
use Orchid\Screen\Actions\ModalToggle;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Layouts\Persona;
use Orchid\Screen\Layouts\Table;
use Orchid\Screen\TD;

class BlockListLayout extends Table
{
    /**
     * @var string
     */
    public $target = 'blocks';

    /**
     * @return TD[]
     */
    public function columns(): array
    {
        return [
            TD::make('type', __('Tip bloka'))
                ->cantHide()
                ->render(fn (Block $block) => $block->type),

            TD::make('updated_at', __('Kreirano'))
                ->render(fn (Block $block) => $block->updated_at->toDateTimeString()),
            TD::make(__("Akcije"))
                ->align(TD::ALIGN_CENTER)
                ->width("100ox")
                ->render(
                    function (Block $block){
                        return DropDown::make()
                        ->icon('bs.three-dots-vertical')
                        ->list([
                            Link::make(__("Modifikuj"))
                                ->route("platform.blocks.edit", $block)
                                ->icon("pencil")
                                ]);
                    } 
                )
        ];
    }
}
