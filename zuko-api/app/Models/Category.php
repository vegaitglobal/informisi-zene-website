<?php

namespace App\Models;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Orchid\Filters\Filterable;
use Orchid\Screen\AsSource;
use Orchid\Filters\Types\Like;

class Category extends Model
{
    use HasFactory, AsSource, Filterable;

    protected $fillable = [
        "name"
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

    public function posts()
    {
        return $this->belongsToMany(Post::class, 'posts_categories', 'category_id', 'post_id');
    }
}
