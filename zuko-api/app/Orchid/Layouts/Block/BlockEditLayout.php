<?php

declare(strict_types=1);

namespace App\Orchid\Layouts\Block;

use Orchid\Screen\Field;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Fields\Cropper;
use Orchid\Screen\Fields\Relation;
use Orchid\Screen\Fields\TextArea;
use Orchid\Screen\Layouts\Rows;
use Orchid\Screen\Fields\Quill;
use Orchid\Screen\Fields\Select;
use Orchid\Screen\Fields\Picture;
use Orchid\Screen\Fields\Upload;

class BlockEditLayout extends Rows
{
    /**
     * The screen's layout elements.
     *
     * @return Field[]
     */
    public function fields(): array
    {
        return [
            Input::make('block.type')
                ->title('Type'),
                
            Quill::make('text')
            ->title('Value'),
            
            Picture::make('image')
            ->title('Value'),
            
            Input::make('video')
            ->title('Value')
        ];
    }
}
