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
        return 'PublicationEditScreen';
    }

    /**
     * The screen's action buttons.
     *
     * @return \Orchid\Screen\Action[]
     */
    public function commandBar(): iterable
    {
        return [
            Button::make(__('Save'))
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

        $publication->fill($request->get('publication'));
        $publication->save();

        Toast::info(__('Publication was saved'));
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
