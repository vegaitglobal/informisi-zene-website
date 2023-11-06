<?php

namespace App\Orchid\Screens\Donor;
use App\Models\Donor;
use Orchid\Screen\Screen;
use App\Orchid\Layouts\Donor\DonorEditLayout;
use Illuminate\Http\Request;
use Orchid\Screen\Action;
use Orchid\Screen\Actions\Button;
use Orchid\Screen\Actions\Link;
use Orchid\Support\Facades\Layout;
use Orchid\Support\Facades\Toast;

class DonorEditScreen extends Screen
{
    /**
     * @var Donor
     */
    public $donor;

    /**
     * Fetch data to be displayed on the screen.
     *
     * @param Donor $post
     *
     * @return array
     */
    public function query(Donor $donor): iterable
    {
        return [
            'donor'       => $donor
        ];
    }

    /**
     * The name of the screen displayed in the header.
     *
     * @return string|null
     */
    public function name(): ?string
    {
        return 'Modifikacija donatora';
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
     * @param Donor    $post
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function save(Request $request, Donor $post)
    {

        $post->fill($request->get('donor'));
        $post->save();

        Toast::info(__('Donator je sačuvan'));
        return redirect()->route('platform.donors');
    }

    /**
     * The screen's layout elements.
     *
     * @return \Orchid\Screen\Layout[]|string[]
     */
    public function layout(): iterable
    {
        return [DonorEditLayout::class];
    }
}
