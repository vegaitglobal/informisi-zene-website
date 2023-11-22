<?php

namespace App\Http\Controllers\V1;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\V1\EmployeResource;

class EmployeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $employees = User::where('show', true)->get();

        return EmployeResource::collection($employees);
    }
}
