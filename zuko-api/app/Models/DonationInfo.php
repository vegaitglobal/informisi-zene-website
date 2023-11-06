<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Orchid\Filters\Filterable;
use Orchid\Screen\AsSource;
use Orchid\Filters\Types\Like;

class DonationInfo extends Model
{
    use HasFactory, AsSource, Filterable;
    protected $fillable = [
        "account_number",
        "recipient_name",
        "default_amount",
        "payment_code"
    ];

            /**
     * The attributes for which you can use filters in url.
     *
     * @var array
     */
    protected $allowedFilters = [
        'account_number'       => Like::class,
        'recipient_name' => Like::class,
        'payment_code' => Like::class,
        'default_amount' => Like::class,
    ];

    /**
    * The attributes for which can use sort in url.
    *
    * @var array
    */
    protected $allowedSorts = [
        'account_number',
        'recipient_name',
        'payment_code',
        'default_amount',
        'created_at',
    ];
}
