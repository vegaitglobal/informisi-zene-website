<?php

namespace App\Orchid\Layouts;

use App\Models\Category;
use Orchid\Screen\Actions\DropDown;
use Orchid\Screen\Actions\Link;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Layouts\Table;
use Orchid\Screen\TD;
use Orchid\Screen\Actions\Button;

class CategoryListLayout extends Table
{
    /**
     * Data source.
     *
     * The name of the key to fetch it from the query.
     * The results of which will be elements of the table.
     *
     * @var string
     */
    protected $target = 'categories';

    /**
     * Get the table cells to be displayed.
     *
     * @return TD[]
     */
    protected function columns(): iterable
    {
        return [
            TD::make('name', __("Name"))
                ->sort()
                ->cantHide()
                ->filter(Input::make())
                ->render(fn (Category $category) => $category->name),
            TD::make("created_at", __("Created"))
                ->sort()
                ->render(fn (Category $category) => $category->created_at->toDateTimeString()),
            TD::make(__("Actions"))
                ->align(TD::ALIGN_CENTER)
                ->width("100px")
                ->render(
                    fn (Category $category) => DropDown::make()
                        ->icon('bs.three-dots-vertical')
                        ->list([
                            Link::make(__("Edit"))
                                ->route("platform.categories.edit", $category->id)
                                ->icon('pencil'),

                            Button::make(__("Delete"))
                                ->icon('bs.trash3')
                                ->confirm(__("Are you sure that you want to delete this category"))
                                ->method("remove", [
                                    'id' => $category->id
                                ])
                        ])
                )
        ];
    }
}
