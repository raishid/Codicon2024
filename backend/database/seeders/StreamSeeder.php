<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Stream;
use App\Models\ChatHistory;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class StreamSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = json_decode(file_get_contents('dataseeder.json'));

        foreach ($data as $stream) {
            Stream::create([
                'name' => $stream->name,
                'description' => $stream->description,
                'poster_url' => 'https://picsum.photos/600/600',
                'video_stream_url' => $stream->video_stream_url,
                'status' => $stream->status,
                'start_date' => $stream->start_date,
                'end_date' => $stream->end_date,
                'user_id' => User::inRandomOrder()->first()->id,
            ]);
        }

        ChatHistory::factory()->count(100)->create();
    }
}
