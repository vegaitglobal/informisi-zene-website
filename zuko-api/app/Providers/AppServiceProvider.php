<?php

namespace App\Providers;

use App\Http\Resources\V1\CategoryResource;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        \Schema::defaultStringLength(191);
        CategoryResource::withoutWrapping();
        \URL::forceScheme('https');

    }
}
