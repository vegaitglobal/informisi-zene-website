<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\V1\CategoryResource;
use App\Models\Category;
use App\Filters\V1\CategoriesFilter;


class CategoriesController extends Controller
{
    public function index(Request $request)
    {
        $filter = new CategoriesFilter();
        $queryItems = $filter->transform($request);

        $categoriesQuery = Category::when(isset($queryItems[0]), function ($query) use ($queryItems) {
            $query->whereHas('posts', function ($postQuery) use ($queryItems) {
                foreach ($queryItems as $condition) {
                    $postQuery->where($condition[0], $condition[1], $condition[2]);
                }
            });
        });

        $categories = $categoriesQuery->get();

        return CategoryResource::collection($categories);
    }

}
