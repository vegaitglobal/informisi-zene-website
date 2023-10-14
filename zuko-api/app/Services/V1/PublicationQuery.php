<?php

namespace App\Services\V1;

use Illuminate\Http\Request;

class PublicationQuery {
    protected $safeParams = [
        'type' => ['eq'],
    ];

    protected $columnMap = [
        'type' => 'type',
    ];

    protected $operatorMap = [
        'eq' => '=',
    ];

    public function transform(Request $request) {
        $eloQuery = [];

        foreach ($this->safeParams as $parm => $operators) {
            $query = $request->query($parm);

            if (!isset($query)) {
                continue;
            }

            $column = $this->columnMap[$parm] ?? $parm;

            foreach ($operators as $operator) {
                if (isset($query[$operator])){
                    $eloQuery[] = [$column, $this->operatorMap[$operator], $query[$operator]];
                }
            }
        }

        return $eloQuery;
    }
}
