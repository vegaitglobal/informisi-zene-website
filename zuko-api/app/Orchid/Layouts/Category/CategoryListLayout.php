<?php

namespace App\Orchid\Layouts\Category;

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
            TD::make('name', __("Naziv"))
                ->sort()
                ->cantHide()
                ->filter(Input::make())
                ->render(fn (Category $category) => $category->name),
            TD::make("created_at", __("Kreirano"))
                ->sort()
                ->render(fn (Category $category) => $category->created_at->toDateTimeString()),
            TD::make(__("Akcije"))
                ->align(TD::ALIGN_CENTER)
                ->width("100px")
                ->render(
                    fn (Category $category) => DropDown::make()
                        ->icon('bs.three-dots-vertical')
                        ->list([
                            Link::make(__("Modifikuj"))
                                ->route("platform.categories.edit", $category->id)
                                ->icon('pencil'),

                            Button::make(__("Izbriši"))
                                ->icon('bs.trash3')
                                ->confirm(__("Da li ste sigurni da želite da izbrišete kategoriju?"))
                                ->method("remove", [
                                    'id' => $category->id
                                ])
                        ])
                )
        ];
    }
}
