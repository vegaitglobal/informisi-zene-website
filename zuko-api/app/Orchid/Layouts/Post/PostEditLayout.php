<?php

namespace App\Orchid\Layouts\Post;

use App\Models\Category;
use App\Models\User;
use Orchid\Screen\Field;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Fields\Picture;
use Orchid\Screen\Fields\Select;
use Orchid\Screen\Layouts\Rows;

class PostEditLayout extends Rows
{
    /**
     * Used to create the title of a group of form elements.
     *
     * @var string|null
     */
    protected $title;
    protected $cover_image_url;
    protected $description;
    protected $user_id;
    protected $categories;


    /**
     * Get the fields elements to be displayed.
     *
     * @return Field[]
     */
    protected function fields(): iterable
    {
        return [
            Input::make('post.title')
                ->title("Post Title")
                ->placeholder("Enter post title"),
            Picture::make('post.cover_image_url')
                ->acceptableFiles(".jpg, .jpeg, .png")
                ->targetRelativeUrl()
                ->title("Post Cover image"),
            Input::make("post.description")
                ->title("Post Description")
                ->placeholder("Enter Your Text"),
            Select::make("categories")
                ->title("Post Categories")
                ->fromModel(Category::class, "name", "id")
                ->multiple(true)
                ->empty("No select"),
            Select::make('post.user_id')
                ->fromModel(User::class, 'name')
                ->empty('No select'),
        ];
    }
}
