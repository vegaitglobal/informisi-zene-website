<?php

namespace App\Filters\V1;

use Illuminate\Http\Request;
use App\Filters\ApiFilter;

class PostsFilter extends ApiFilter {
    protected $safeParams = [
        'title' => ['like'],
        'isOpportunity' => ['eq'],
    ];

    protected $columnMap = [
        'title' => 'title',
        'isOpportunity' => 'is_opportunity',
    ];

    protected $operatorMap = [
        'like' => 'LIKE',
        'eq' => '=',
    ];

    public function transform(Request $request) {
        $eloQuery = [];

        foreach ($this->safeParams as $param => $operators) {
            $query = $request->query($param);

            if (!isset($query)) {
                continue;
            }

            $column = $this->columnMap[$param] ?? $param;

            foreach ($operators as $operator) {

                if (isset($query[$operator])) {
                    $value = $query[$operator];
                    if ($operator === 'like') {
                        $value = '%' . $value . '%';
                    }
                    $eloQuery[] = [$column, $this->operatorMap[$operator], $value];
                }
            }
        }

        return $eloQuery;
    }
}
