<?php

namespace App\Models;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Orchid\Attachment\Attachable;
use Orchid\Filters\Filterable;
use Orchid\Screen\AsSource;

class Block extends Model
{
    use HasFactory, AsSource, Filterable, Attachable;

    protected $fillable = [
        'post_id',
        'value',
        'type'
    ];

    public function post()
    {
        return $this->belongsTo(Post::class ,'post_id');
    }
}
