<?php

namespace App\Http\Controllers\V1;

use App\Models\Publications;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\V1\PublicationsResource;
use App\Http\Resources\V1\PublicationsCollection;
use App\Filters\V1\PublicationsFilter;

class PublicationsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new PublicationsFilter();
        $queryItems = $filter->transform($request);
        return new PublicationsCollection(Publications::where($queryItems)->paginate($request->query('size',3)));
    }

}
