<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\V1\DonationResource;
use App\Models\DonationInfo;
use Illuminate\Http\Request;

class DonationInfoController extends Controller
{
    public function index()
    {
        $donationInfo = DonationInfo::all();

        return DonationResource::collection($donationInfo);
    }
}
