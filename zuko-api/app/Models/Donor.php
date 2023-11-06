<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Orchid\Filters\Filterable;
use Orchid\Screen\AsSource;
use Orchid\Filters\Types\Like;

class Donor extends Model
{
    use HasFactory, AsSource, Filterable;

    protected $fillable = [
        "name",
        "website_url"
    ];

            /**
     * The attributes for which you can use filters in url.
     *
     * @var array
     */
    protected $allowedFilters = [
        'name'       => Like::class
    ];

    /**
    * The attributes for which can use sort in url.
    *
    * @var array
    */
    protected $allowedSorts = [
     'name',
     'created_at'
    ];
}
