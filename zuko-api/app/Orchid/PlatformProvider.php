<?php

declare(strict_types=1);

namespace App\Orchid;

use Orchid\Platform\Dashboard;
use Orchid\Platform\ItemPermission;
use Orchid\Platform\OrchidServiceProvider;
use Orchid\Screen\Actions\Menu;
use Orchid\Support\Color;

class PlatformProvider extends OrchidServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @param Dashboard $dashboard
     *
     * @return void
     */
    public function boot(Dashboard $dashboard): void
    {
        parent::boot($dashboard);

        // ...
    }

    /**
     * Register the application menu.
     *
     * @return Menu[]
     */
    public function menu(): array
    {
        return [
            Menu::make(__('Users'))
                ->icon('people')
                ->route('platform.systems.users')
                ->permission('platform.systems.users')
                ->title(__('Access rights')),

            Menu::make(__('Roles'))
                ->icon('controller')
                ->route('platform.systems.roles')
                ->permission('platform.systems.roles'),
            Menu::make(__("Categories"))
                ->icon("folder")
                ->route("platform.categories")
                ->permission('platform.categories'),
            Menu::make(__('Donors'))
              ->icon('folder')
              ->route('platform.donors')
              ->permission('platform.donors'),
            Menu::make(__('Publications'))
              ->icon('folder')
              ->route('platform.publications')
              ->permission('platform.publications'),
            Menu::make(__('Donation Info'))
              ->icon('box')
              ->route('platform.donation_info')
              ->permission('platform.donation_info'),
             Menu::make(__('Posts'))
                ->icon('folder')
                ->route('platform.posts')
                ->permission('platform.posts'),
        ];
    }

    /**
     * Register permissions for the application.
     *
     * @return ItemPermission[]
     */
    public function permissions(): array
    {
        return [
            ItemPermission::group(__('System'))
                ->addPermission('platform.systems.roles', __('Roles'))
                ->addPermission('platform.systems.users', __('Users')),

            ItemPermission::group(__('Blog'))
              ->addPermission('platform.posts', __('Posts'))
              ->addPermission('platform.categories', __('Categories'))
              ->addPermission('platform.donors', __('Donors'))
              ->addPermission('platform.publications', __('publications'))
              ->addPermission('platform.donation_info', __('donation_info'))
        ];
    }
}
