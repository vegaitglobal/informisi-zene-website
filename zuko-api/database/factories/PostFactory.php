<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'description' => $this->faker->randomElement(['I', 'B']),
            'title' => $this->faker->randomElement(['I', 'B']),
            'cover_image_url' => $this->faker->image(storage_path('app/files'),640,480, null, true),
            'user_id' => User::factory()
        ];
    }
}
