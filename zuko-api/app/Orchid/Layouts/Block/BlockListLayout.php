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
            TD::make('type', __('type'))
                ->sort()
                ->cantHide()
                ->filter(Input::make())
                ->render(fn (Block $block) => $block->type),

            TD::make('updated_at', __('Created'))
                ->sort()
                ->render(fn (Block $block) => $block->updated_at->toDateTimeString())
        ];
    }
}
