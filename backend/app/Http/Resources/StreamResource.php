<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StreamResource extends JsonResource
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
            'name' => $this->name,
            'description' => $this->description,
            'thumbnail' => $this->poster_url,
            'video_stream_url' => $this->video_stream_url,
            'status'    => boolval($this->status),
            'messages'  => $this->last_message,
            'start_date' => $this->start_date,
            'end_date' => $this->end_date,
            'user'  => $this->user->name,
        ];
    }
}
