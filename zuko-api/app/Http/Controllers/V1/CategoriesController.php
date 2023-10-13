<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\V1\CategoryResource;
use App\Models\Category;

class CategoriesController extends Controller
{
    public function index(Category $category)
    {
        $category = Category::select("name", "id")->get();

        return response()->json(
            $category
        );
    }
}
