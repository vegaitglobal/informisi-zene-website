<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Publications extends Model
{
    use HasFactory;

    protected $fillable = [
        "type",
        "title",
        "cover_image_url",
        "url"
    ];
}
