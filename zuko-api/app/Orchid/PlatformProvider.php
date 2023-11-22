<?php

declare(strict_types=1);

namespace App\Orchid;

use Orchid\Platform\Dashboard;
use Orchid\Platform\ItemPermission;
use Orchid\Platform\OrchidServiceProvider;
use Orchid\Screen\Actions\Menu;

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
            Menu::make(__('Zaposleni'))
                ->icon('people')
                ->route('platform.systems.users')
                ->permission('platform.systems.users'),
            Menu::make(__('Uloge'))
                ->icon('folder')
                ->route('platform.systems.roles')
                ->permission('platform.systems.roles'),
            Menu::make(__("Kategorije"))
                ->icon("folder")
                ->route("platform.categories")
                ->permission('platform.categories'),
            Menu::make(__('Donatori'))
              ->icon('folder')
              ->route('platform.donors')
              ->permission('platform.donors'),
            Menu::make(__('Publikacije'))
              ->icon('folder')
              ->route('platform.publications')
              ->permission('platform.publications'),
            Menu::make(__('Donacije'))
              ->icon('folder')
              ->route('platform.donation_info')
              ->permission('platform.donation_info'),
             Menu::make(__('Vesti'))
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
                ->addPermission('platform.systems.roles', __('Uloge'))
                ->addPermission('platform.systems.users', __('Zaposleni')),

            ItemPermission::group(__('Blog'))
              ->addPermission('platform.posts', __('Vesti'))
              ->addPermission('platform.categories', __('Kategorije'))
              ->addPermission('platform.donors', __('Donatori'))
              ->addPermission('platform.publications', __('Publikacije'))
              ->addPermission('platform.donation_info', __('Donacije'))
        ];
    }
}
