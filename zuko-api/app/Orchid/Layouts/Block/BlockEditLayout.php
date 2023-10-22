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
            Select::make('block.type')
                ->options([
                     'image'   => 'Slika',
                     'video' => 'Video',
                     'text' => 'Tekst'
                     ])
                ->title('Izaberite tip bloka:'),
                
            Quill::make('text')
            ->title('Tekst (Ostaviti prazno ako nije izabran tekst tip bloka):'),
            
            Picture::make('image')
            ->title('Slika (Ostaviti prazno ako nije izabran slika tip bloka):'),
            
            Input::make('video')
            ->title('Link ka videu (Ostaviti prazno ako nije izabran video tip bloka):')
        ];
    }
}
