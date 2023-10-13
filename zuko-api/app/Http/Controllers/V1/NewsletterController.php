<?php

namespace App\Http\Controllers\V1;

use Illuminate\Http\Request;
use Newsletter;
use App\Http\Controllers\Controller;

class NewsletterController extends Controller
{

    public function store(Request $request)
    {
        Newsletter::subscribe($request->email);
        return response()->json(['email' => $request->email],200);
    }
}