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
    protected $target = '';

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
                        ->icon("options-vertical")
                        ->list([
                            Link::make(__("Edit"))
                                ->route("platform.categories.edit", $category->id)
                                ->icon('pencil'),

                            Button::make(__("Delete"))
                                ->icon("trash")
                                ->confirm(__("Once the account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain"))
                                ->method("remove", [
                                    'id' => $category->id
                                ])
                        ])
                )
        ];
    }
}
