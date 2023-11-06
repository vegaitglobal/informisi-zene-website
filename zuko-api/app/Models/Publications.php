<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Orchid\Filters\Filterable;
use Orchid\Screen\AsSource;
use Orchid\Attachment\Attachable;
use Orchid\Filters\Types\Like;

class Publications extends Model
{
    use HasFactory, AsSource, Filterable,Attachable;

    protected $fillable = [
        "type",
        "title",
        "cover_image_url"
    ];

        /**
     * The attributes for which you can use filters in url.
     *
     * @var array
     */
    protected $allowedFilters = [
        'title'       => Like::class,
        'type' => Like::class
    ];

    /**
    * The attributes for which can use sort in url.
    *
    * @var array
    */
    protected $allowedSorts = [
     'title',
     'type'
    ];

}
