<?php

declare(strict_types=1);

namespace App\Orchid\Screens\Role;

use App\Orchid\Layouts\Role\RoleEditLayout;
use App\Orchid\Layouts\Role\RolePermissionLayout;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Orchid\Platform\Models\Role;
use Orchid\Screen\Action;
use Orchid\Screen\Actions\Button;
use Orchid\Screen\Screen;
use Orchid\Support\Facades\Layout;
use Orchid\Support\Facades\Toast;

class RoleEditScreen extends Screen
{
    /**
     * @var Role
     */
    public $role;

    /**
     * Fetch data to be displayed on the screen.
     *
     *
     * @return array
     */
    public function query(Role $role): iterable
    {
        return [
            'role'       => $role,
            'permission' => $role->getStatusPermission(),
        ];
    }

    /**
     * The name of the screen displayed in the header.
     */
    public function name(): ?string
    {
        return 'Edit Role';
    }

    /**
     * Display header description.
     */
    public function description(): ?string
    {
        return 'Modify the privileges and permissions associated with a specific role.';
    }

    public function permission(): ?iterable
    {
        return [
            'platform.systems.roles',
        ];
    }

    /**
     * The screen's action buttons.
     *
     * @return Action[]
     */
    public function commandBar(): iterable
    {
        return [
            Button::make(__('Sačuvaj'))
                ->icon('bs.check-circle')
                ->method('save'),

            Button::make(__('Izbriši'))
                ->icon('bs.trash3')
                ->method('remove')
                ->canSee($this->role->exists),
        ];
    }

    /**
     * The screen's layout elements.
     *
     * @return string[]|\Orchid\Screen\Layout[]
     */
    public function layout(): iterable
    {
        return [
            Layout::block([
                RoleEditLayout::class,
            ])
                ->title('Uloga')
                ->description('Uloge su skup privilegija (moguće različitih usluga poput usluge Korisnika, Moderatora, i slično) koje korisnicima dodeljuju mogućnost izvršavanja određenih zadataka ili operacija.'),

            Layout::block([
                RolePermissionLayout::class,
            ])
                ->title('Dozvola/Privilegija')
                ->description('Privilegija je neophodna za izvođenje određenih zadataka i operacija u određenom području.'),
        ];
    }

    /**
     * @return \Illuminate\Http\RedirectResponse
     */
    public function save(Request $request, Role $role)
    {
        $request->validate([
            'role.slug' => ['required'],
            'role.name' => ['required','max:191'],
        ]);

        $role->fill($request->get('role'));

        $role->permissions = collect($request->get('permissions'))
            ->map(fn ($value, $key) => [base64_decode($key) => $value])
            ->collapse()
            ->toArray();

        $role->save();

        Toast::info(__('Uloga je sačuvana'));

        return redirect()->route('platform.systems.roles');
    }

    /**
     * @throws \Exception
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function remove(Role $role)
    {
        $role->delete();

        Toast::info(__('Uloga je izbrisana'));

        return redirect()->route('platform.systems.roles');
    }
}
