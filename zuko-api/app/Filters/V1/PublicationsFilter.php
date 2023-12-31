<?php

namespace App\Filters\V1;

use App\Filters\ApiFilter;

class PublicationsFilter extends ApiFilter {
    protected $safeParams = [
        'type' => ['eq'],
    ];

    protected $columnMap = [
        'type' => 'type',
    ];

    protected $operatorMap = [
        'eq' => '=',
    ];
}
