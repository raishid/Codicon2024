<?php

namespace Database\Factories;

use App\Models\Stream;
use App\Models\ChatHistory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class HistoryMessageFactory extends Factory
{
    protected $model = ChatHistory::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $time = fake()->dateTimeBetween('-2 hours', 'now');
        return [
            'stream_id' => Stream::all()->random()->id,
            'message' => fake()->sentence(4),
            'username'  => 'anon' . fake()->unique()->numberBetween(1, 1000),
            'created_at'    => $time,
            'updated_at'    => $time
        ];
    }
}
