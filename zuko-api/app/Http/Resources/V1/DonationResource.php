<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DonationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "account_number" => $this->account_number,
            "recipient_name" => $this->recipient_name,
            "default_amount" => $this->default_amount,
            "payment_code" => $this->payment_code
        ];
    }
}
