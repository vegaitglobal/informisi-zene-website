<?php

namespace App\Filters\V1;

use Illuminate\Http\Request;
use App\Filters\ApiFilter;

class PostsFilter extends ApiFilter {
    protected $safeParams = [
        'title' => ['like'],
    ];

    protected $columnMap = [
        'title' => 'title',
    ];

    protected $operatorMap = [
        'like' => 'LIKE',
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

                if (isset($query[$operator])){
                    $eloQuery[] = [$column, $this->operatorMap[$operator], '%' . $query[$operator] . '%'];
                }
            }
        }

        return $eloQuery;
    }
}
