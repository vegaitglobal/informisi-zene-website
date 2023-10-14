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
            'title' => $this->faker->randomElement(['I', 'B']),
            'cover_image_url' => $this->faker->image(storage_path('app/files'),640,480, null, true),
            'url' => $this->faker->image(storage_path('app/files'),640,480, null, true),
        ];
    }
}
