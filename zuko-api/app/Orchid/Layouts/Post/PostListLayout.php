<?php

namespace App\Orchid\Layouts\Post;

use App\Models\Post;
use Orchid\Screen\Actions\Button;
use Orchid\Screen\Actions\DropDown;
use Orchid\Screen\Actions\Link;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Layouts\Table;
use Orchid\Screen\TD;

class PostListLayout extends Table
{
    /**
     * Data source.
     *
     * The name of the key to fetch it from the query.
     * The results of which will be elements of the table.
     *
     * @var string
     */
    protected $target = 'posts';

    /**
     * Get the table cells to be displayed.
     *
     * @return TD[]
     */
    protected function columns(): iterable
    {
        return [
            TD::make("title", __("Naslov"))
                ->sort()
                ->cantHide()
                ->filter(Input::make())
                ->render(fn (Post $post) => $post->title),

            TD::make("created_at", __("Kreirano"))
                ->sort()
                ->render(fn (Post $post) => $post->updated_at->toDateTimeString()),
            TD::make(__("Akcije"))
                ->align(TD::ALIGN_CENTER)
                ->width("100ox")
                ->render(
                    fn (Post $post) => DropDown::make()
                        ->icon('bs.three-dots-vertical')
                        ->list([
                            Link::make(__("Modifikuj"))
                                ->route("platform.posts.edit", $post)
                                ->icon("pencil"),
                            Button::make(__("Izbriši"))
                                ->icon("trash")
                                ->confirm(__("Da li ste sigurni da želite da izbrišete vest?"))
                                ->method("remove", [
                                    'id' => $post->id
                                ])
                        ])
                )

        ];
    }
}
