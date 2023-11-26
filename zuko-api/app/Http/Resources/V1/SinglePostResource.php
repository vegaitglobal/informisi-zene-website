<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\V1\CategoryResource;
use App\Http\Resources\V1\BlockResource;

class SinglePostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'user' => $this->user ? $this->user->name : "",
            'created' => $this->created_at,
            'description' => $this->description,
            'cover_image' => $this->cover_image_url,
            'categories' => CategoryResource::collection($this->categories),
            'blocks' => BlockResource::collection($this->blocks)
        ];
    }
}
