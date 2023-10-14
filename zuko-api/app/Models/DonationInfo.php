<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Orchid\Filters\Filterable;
use Orchid\Screen\AsSource;

class DonationInfo extends Model
{
    use HasFactory, AsSource, Filterable;
    protected $fillable = [
        "account_number",
        "recipient_name",
        "default_amount",
        "payment_code"
    ];
}
