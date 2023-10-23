<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect('/admin/main');
});

Route::get('/migrate', function () {
    \Artisan::call('migrate');
    return \Artisan::output();
});