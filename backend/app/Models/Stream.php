<?php

namespace App\Models;

use Database\Factories\StreamFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Stream extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'name',
        'description',
        'status',
        'video_stream_url',
        'start_date',
        'end_date',
    ];

    protected $cats = [
        'start_date' => 'datetime',
        'end_date' => 'datetime',
    ];

    protected static function newFactory(): Factory
    {
        return StreamFactory::new();
    }


    public function message()
    {
        return $this->hasMany(ChatHistory::class, 'stream_id', 'id');
    }

    protected function lastMessage(): Attribute
    {
        return Attribute::make(function () {
            return $this->message()->take(10)->orderBy('created_at', 'desc')->get();
        });
    }
}
