<?php

namespace Database\Factories;

use App\Models\Publications;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Publications>
 */
class PublicationsFactory extends Factory
{
    protected $model = Publications::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'type' => fake()->randomElement(['analize', 'izvestaji', 'saopstenja']),
            'title' => $this->faker->text($maxNbChars = 10),
            'cover_image_url' => 'https://zuko.rs/wp-content/uploads/2023/06/viber_image_2023-06-06_11-40-20-190-768x575.jpg',
        ];
    }
}
