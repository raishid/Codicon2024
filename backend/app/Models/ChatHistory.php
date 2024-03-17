<?php

namespace App\Models;

use Database\Factories\HistoryMessageFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChatHistory extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'stream_id',
        'message',
        'user_id',
        'username',
    ];

    protected $cats = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    protected static function newFactory()
    {
        return HistoryMessageFactory::new();
    }
}
