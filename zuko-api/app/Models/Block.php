<?php

namespace App\Models;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Block extends Model
{
    use HasFactory;

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
