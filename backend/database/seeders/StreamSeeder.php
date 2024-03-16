<?php

namespace Database\Seeders;

use App\Models\ChatHistory;
use App\Models\Stream;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class StreamSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Stream::factory()->count(10)->create();

        ChatHistory::factory()->count(100)->create();
    }
}
