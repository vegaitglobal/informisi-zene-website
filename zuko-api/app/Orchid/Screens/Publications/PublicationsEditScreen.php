<?php

namespace App\Orchid\Screens\Publications;
use App\Models\Publications;
use Orchid\Screen\Screen;
use App\Orchid\Layouts\Publications\PublicationsEditLayout;
use Illuminate\Http\Request;
use Orchid\Screen\Action;
use Orchid\Screen\Actions\Button;
use Orchid\Screen\Actions\Link;
use Orchid\Support\Facades\Layout;
use Orchid\Support\Facades\Toast;

class PublicationsEditScreen extends Screen
{
    /**
     * @var Publications
     */
    public $publication;

    /**
     * Fetch data to be displayed on the screen.
     *
     * @param Publications $publication
     *
     * @return array
     */
    public function query(Publications $publication): iterable
    {
        $publication->load('attachment');
        return [
            'publication'       => $publication
        ];
    }

    /**
     * The name of the screen displayed in the header.
     *
     * @return string|null
     */
    public function name(): ?string
    {
        return 'Modifikacija publikacije';
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



    /**
     * @param Request $request
     * @param Publications    $publication
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function save(Request $request, Publications $publication)
    {
        $request->validate([
            'publication.type' => ['required','in:analize,izvestaji,saopstenja'],
            'publication.title' => ['required','max:191'],
            'publication.cover_image_url' => ['required','max:191'],
        ]);

        $publication->fill($request->get('publication'))->save();
        $publication->attachment()->syncWithoutDetaching(
            $request->input('publication.attachment', [])
        );
        Toast::info(__('Publikacija je sačuvana'));
        return redirect()->route('platform.publications');
    }

    /**
     * The screen's layout elements.
     *
     * @return \Orchid\Screen\Layout[]|string[]
     */
    public function layout(): iterable
    {
        return [PublicationsEditLayout::class];
    }
}
