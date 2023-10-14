<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DonationInfo extends Model
{
    use HasFactory;
    protected $fillable = [
        "account_number",
        "recipient_name",
        "default_amount",
        "payment_code"
    ];
}
