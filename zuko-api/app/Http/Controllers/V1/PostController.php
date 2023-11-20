<?php

namespace App\Http\Controllers\V1;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\V1\PostResource;
use App\Http\Resources\V1\PostCollection;
use App\Http\Resources\V1\SinglePostResource;
use App\Http\Resources\V1\SinglePostCollection;
use App\Filters\V1\PostsFilter;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new PostsFilter();
        $queryItems = $filter->transform($request);

        $categoryId = $request->input('category');

        $postsQuery = Post::when(!is_null($categoryId), function ($query) use ($categoryId) {
            $query->whereHas('categories', function ($subQuery) use ($categoryId) {
                $subQuery->where('category_id', $categoryId);
            });
        })->when(isset($queryItems['is_opportunity']), function ($query) use ($queryItems) {
            $query->where($queryItems['is_opportunity']);
        });

        $result = $postsQuery->where($queryItems)->paginate($request->query('size', 3));

        return new PostCollection($result);
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return new SinglePostResource($post);
    }
}
