<?php

declare(strict_types=1);

namespace App\Orchid\Screens\User;

use App\Orchid\Layouts\Role\RolePermissionLayout;
use App\Orchid\Layouts\User\UserEditLayout;
use App\Orchid\Layouts\User\UserPasswordLayout;
use App\Orchid\Layouts\User\UserRoleLayout;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Orchid\Access\Impersonation;
use App\Models\User;
use Orchid\Screen\Action;
use Orchid\Screen\Actions\Button;
use Orchid\Screen\Screen;
use Orchid\Support\Color;
use Orchid\Support\Facades\Layout;
use Orchid\Support\Facades\Toast;

class UserEditScreen extends Screen
{
    /**
     * @var User
     */
    public $user;

    /**
     * Fetch data to be displayed on the screen.
     *
     * @return array
     */
    public function query(User $user): iterable
    {
        $user->load(['roles']);

        return [
            'user'       => $user,
            'permission' => $user->getStatusPermission(),
        ];
    }

    /**
     * The name of the screen displayed in the header.
     */
    public function name(): ?string
    {
        return $this->user->exists ? 'Modifikuj informacije zaposlenog' : 'Novi zaposleni';
    }

    /**
     * Display header description.
     */
    public function description(): ?string
    {
        return 'Korisnički profil i privilegije, uključujući njihovu povezanu ulogu.';
    }

    public function permission(): ?iterable
    {
        return [
            'platform.systems.users',
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
            Button::make(__('Izbriši'))
                ->icon('bs.trash3')
                ->confirm(__('Nakon što se nalog obriše, svi resursi i podaci će biti trajno izbrisani. Pre nego što obrišete svoj nalog, molimo vas da preuzmete sve podatke ili informacije koje želite zadržati.'))
                ->method('remove')
                ->canSee($this->user->exists),

            Button::make(__('Sačuvaj'))
                ->icon('bs.check-circle')
                ->method('save'),
        ];
    }

    /**
     * @return \Orchid\Screen\Layout[]
     */
    public function layout(): iterable
    {
        return [

            Layout::block(UserEditLayout::class)
                ->title(__('Informacije naloga'))
                ->description(__('Ažurirajte informacije o nalogu i e-mail adresu vašeg naloga.'))
                ->commands(
                    Button::make(__('Sačuvaj'))
                        ->type(Color::BASIC)
                        ->icon('bs.check-circle')
                        ->canSee($this->user->exists)
                        ->method('save')
                ),

            Layout::block(UserPasswordLayout::class)
                ->title(__('Lozinka'))
                ->description(__('Osigurajte da vaš nalog koristi dugu i nasumičnu generisanu lozinku za očuvanje bezbednosti.'))
                ->commands(
                    Button::make(__('Sačuvaj'))
                        ->type(Color::BASIC)
                        ->icon('bs.check-circle')
                        ->canSee($this->user->exists)
                        ->method('save')
                ),

            Layout::block(UserRoleLayout::class)
                ->title(__('Uloge'))
                ->description(__('Uloga definiše skup zadataka koje korisniku dodeljenom toj ulozi dozvoljava izvršavanje.'))
                ->commands(
                    Button::make(__('Sačuvaj'))
                        ->type(Color::BASIC)
                        ->icon('bs.check-circle')
                        ->canSee($this->user->exists)
                        ->method('save')
                ),

            Layout::block(RolePermissionLayout::class)
                ->title(__('Dozvole/Ovlašćenja'))
                ->description(__('Dozvoliti zaposlenom da izvršava neke radnje koje nisu predviđene njegovim ulogama.'))
                ->commands(
                    Button::make(__('Sačuvaj'))
                        ->type(Color::BASIC)
                        ->icon('bs.check-circle')
                        ->canSee($this->user->exists)
                        ->method('save')
                ),

        ];
    }

    /**
     * @return \Illuminate\Http\RedirectResponse
     */
    public function save(User $user, Request $request)
    {
        $request->validate([
            'user.email' => [
                'required',
                Rule::unique(User::class, 'email')->ignore($user),
            ],
        ]);

        $permissions = collect($request->get('permissions'))
            ->map(fn ($value, $key) => [base64_decode($key) => $value])
            ->collapse()
            ->toArray();

        $user->when($request->filled('user.password'), function (Builder $builder) use ($request) {
            $builder->getModel()->password = Hash::make($request->input('user.password'));
        });

        $user
            ->fill($request->collect('user')->except(['password', 'permissions', 'roles'])->toArray())
            ->fill(['permissions' => $permissions])
            ->save();

        $user->replaceRoles($request->input('user.roles'));

        Toast::info(__('Sačuvane su izmene za zaposlenog.'));

        return redirect()->route('platform.systems.users');
    }

    /**
     * @throws \Exception
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function remove(User $user)
    {
        $user->delete();

        Toast::info(__('Zaposleni je izbrisan.'));

        return redirect()->route('platform.systems.users');
    }

    /**
     * @return \Illuminate\Http\RedirectResponse
     */
    public function loginAs(User $user)
    {
        Impersonation::loginAs($user);

        Toast::info(__('Sada se predstavljate kao ovaj zaposleni.'));

        return redirect()->route(config('platform.index'));
    }
}
