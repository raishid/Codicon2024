<?php

namespace Database\Factories;

use App\Models\Stream;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Stream>
 */
class StreamFactory extends Factory
{

    protected $model = Stream::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id'    => Str::uuid(),
            'name'  => fake()->sentence(2),
            'description' => fake()->paragraph(4),
            'status'    => true,
            'video_stream_url'  => 'https://www.youtube.com/watch?v=123456',
            'start_date'    => fake()->dateTimeBetween('0 hours', '3 hours'),
            'end_date'  => fake()->dateTimeBetween('6 hours', '24 hours'),
            'user_id'   => 1,
            'poster_url'    => 'https://picsum.photos/600/600'
        ];
    }
}
