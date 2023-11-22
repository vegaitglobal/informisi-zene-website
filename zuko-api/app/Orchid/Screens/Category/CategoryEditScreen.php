<?php

namespace App\Orchid\Screens\Category;

use App\Models\Category;
use App\Orchid\Layouts\Category\CategoryEditLayout;
use Illuminate\Http\Request;
use Orchid\Screen\Actions\Button;
use Orchid\Screen\Screen;
use Orchid\Support\Facades\Toast;

class CategoryEditScreen extends Screen
{
    /**
     * Fetch data to be displayed on the screen.
     *
     * @return array
     */
    public function query(Category $category): iterable
    {
        return [
            'category' => $category,
        ];
    }

    /**
     * The name of the screen displayed in the header.
     *
     * @return string|null
     */
    public function name(): ?string
    {
        return 'Modifikacija kategorije';
    }

    /**
     * The screen's action buttons.
     *
     * @return \Orchid\Screen\Action[]
     */
    public function commandBar(): iterable
    {
        return [
            Button::make(__('Sačuvaj'))
                ->icon('check')
                ->method('save')
        ];
    }

    public function save(Request $request, Category $category)
    {
        $request->validate([
            'category.name' => ['required','max:191'],
        ]);

        $category->fill($request->get('category'));
        $category->save();

        Toast::info(__("Kategorija je sačuvana"));
        return redirect()->route('platform.categories');
    }

    /**
     * The screen's layout elements.
     *
     * @return \Orchid\Screen\Layout[]|string[]
     */
    public function layout(): iterable
    {
        return [
            CategoryEditLayout::class
        ];
    }
}
