<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Donationinfo>
 */
class DonationinfoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "account_number" => $this->faker->randomDigit(),
            "recipient_name" => $this->faker->firstNameMale(),
            "default_amount" => $this->faker->randomDigit(),
            "payment_code" => $this->faker->randomDigit(),
        ];
    }
}
