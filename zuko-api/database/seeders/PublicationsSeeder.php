<?php

namespace Database\Seeders;

use App\Models\Publications;
use Illuminate\Database\Seeder;

class PublicationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Publications::factory()
            ->count(25)
            ->create();
    }
}
