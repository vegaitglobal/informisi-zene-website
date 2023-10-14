<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            PublicationsSeeder::class,
            CategorySeeder::class,
            DonationInfoSeeder::class,
            DonorSeeder::class,
            BlockSeeder::class,
            PostSeeder::class,
            SubscriberSeeder::class
        ]);
    }
}
