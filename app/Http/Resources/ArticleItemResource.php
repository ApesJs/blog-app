<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ArticleItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'title' => $this->title, 
            'slug' => $this->slug, 
            'picture' => $this->picture,
            'user' => [
                'id' => $this->user->id,
                'name' => $this->user->name,
                'email' => $this->user->email,
            ], 
            'tags' => $this->tags->map(fn ($tag) => [
                'name' => $tag->name,
                'slug' => $tag->slug,
            ]),
            'teaser' => $this->teaser, 
            'created_at' => $this->created_at,
        ];
    }
}
