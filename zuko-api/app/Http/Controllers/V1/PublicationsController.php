<?php

namespace App\Http\Controllers\V1;

use App\Models\Publications;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\V1\PublicationsResource;
use App\Http\Resources\V1\PublicationsCollection;
use App\Services\V1\PublicationQuery;

class PublicationsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new PublicationQuery();
        $queryItems = $filter->transform($request);
        return new PublicationsCollection(Publications::where($queryItems)->paginate(3));
    }

}
