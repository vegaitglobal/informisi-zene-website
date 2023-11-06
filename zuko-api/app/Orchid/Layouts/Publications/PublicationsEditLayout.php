<?php

declare(strict_types=1);

namespace App\Orchid\Layouts\Publications;

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

class PublicationsEditLayout extends Rows
{
    /**
     * The screen's layout elements.
     *
     * @return Field[]
     */
    public function fields(): array
    {
        return [
            Select::make('publication.type')
            ->options([
                'izvestaji'   => 'Izvestaj',
                'saopstenja'   => 'Saopstenje',
                'analize' => 'Analiza'])
                ->title('Izaberite tip publikacije'),
            Input::make('publication.title')
                ->title('Naslov'),
            Picture::make('publication.cover_image_url')
                ->title("Naslovna fotografija publikacije"),
            Upload::make('publication.attachment')
                ->title("Publikacija"),
        ];
    }
}
