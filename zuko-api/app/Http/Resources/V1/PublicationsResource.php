<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PublicationsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $this->load('attachment');
        return [
            'id' => $this->id,
            'type' => strtoupper($this->type),
            'title' => $this->title,
            'cover_image_url' => $this->cover_image_url
        ];
    }
}
