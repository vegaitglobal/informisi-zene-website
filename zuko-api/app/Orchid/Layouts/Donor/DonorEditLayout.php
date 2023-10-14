<?php

declare(strict_types=1);

namespace App\Orchid\Layouts\Donor;

use Orchid\Screen\Field;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Fields\Cropper;
use Orchid\Screen\Fields\Relation;
use Orchid\Screen\Fields\TextArea;
use Orchid\Screen\Layouts\Rows;
use Orchid\Screen\Fields\Quill;
use Orchid\Screen\Fields\Select;

class DonorEditLayout extends Rows
{
    /**
     * The screen's layout elements.
     *
     * @return Field[]
     */
    public function fields(): array
    {
        return [
            Input::make('donor.name')
                ->title('Name'),
            Input::make('donor.website_url')
                ->title('Website'),
        ];
    }
}
