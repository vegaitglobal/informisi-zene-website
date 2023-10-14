<?php

namespace Database\Seeders;

use App\Models\DonationInfo;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DonationInfoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DonationInfo::factory()->times(10)->create();
    }
}
