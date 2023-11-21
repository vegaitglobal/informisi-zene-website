<?php

namespace App\Http\Controllers\V1;

use App\Models\Publications;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
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

        $publications = Publications::where($queryItems)
            ->orderBy('created_at', 'desc')
            ->paginate($request->query('size', 3));

        return new PublicationsCollection($publications);
    }
}
