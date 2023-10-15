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
            'description' => $this->faker->text($maxNbChars = 50),
            'title' => $this->faker->text($maxNbChars = 10),
            'cover_image_url' => 'https://zuko.rs/wp-content/uploads/2023/06/viber_image_2023-06-06_11-40-20-190-768x575.jpg',
            'user_id' => User::factory()
        ];
    }
}
