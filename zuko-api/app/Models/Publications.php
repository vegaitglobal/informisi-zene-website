<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Orchid\Filters\Filterable;
use Orchid\Screen\AsSource;
use Orchid\Attachment\Attachable;

class Publications extends Model
{
    use HasFactory, AsSource, Filterable,Attachable;

    protected $fillable = [
        "type",
        "title",
        "cover_image_url",
        "url"
    ];
}
