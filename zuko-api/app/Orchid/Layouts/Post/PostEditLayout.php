<?php

namespace App\Orchid\Layouts\Post;

use App\Models\Category;
use App\Models\User;
use Orchid\Screen\Field;
use Orchid\Screen\Fields\CheckBox;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Fields\Picture;
use Orchid\Screen\Fields\Select;
use Orchid\Screen\Layouts\Rows;

class PostEditLayout extends Rows
{
    /**
     * Get the fields elements to be displayed.
     *
     * @return Field[]
     */
    protected function fields(): iterable
    {
        return [
            Input::make('post.title')
                ->title("Naslov")
                ->placeholder("Unesite naslov svoje vesti maksimum 50 karaktera."),
            Picture::make('post.cover_image_url')
                ->acceptableFiles(".jpg, .jpeg, .png")
                ->title("Naslovna fotografija vesti"),
            Input::make("post.description")
                ->title("Detaljniji opis vesti")
                ->placeholder("Maksimum 250 karaktera"),
            Select::make("categories")
                ->title("Kategorije vesti")
                ->fromModel(Category::class, "name", "id")
                ->multiple(true)
                ->empty(""),
            Select::make('post.user_id')
                ->title("Autor vesti")
                ->fromModel(User::class, 'name')
                ->empty(''),
            CheckBox::make('post.is_opportunity')
                ->title("Prilika?")
                ->placeholder('Treba da bude čekirano ukoliko ova vest treba da bude u prilikama.')
                ->sendTrueOrFalse(),
        ];
    }
}
