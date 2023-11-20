<?php

namespace App\Filters\V1;

use App\Filters\ApiFilter;

class CategoriesFilter extends ApiFilter {
    protected $safeParams = [
        'isOpportunity' => ['eq'],
    ];

    protected $columnMap = [
        'isOpportunity' => 'is_opportunity',
    ];

    protected $operatorMap = [
        'eq' => '=',
    ];
}
