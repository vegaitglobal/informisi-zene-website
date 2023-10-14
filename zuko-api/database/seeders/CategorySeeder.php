<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = ["Category 1", "Category 2", "Category 3"];

        foreach ($categories as $category) {
            DB::table('categories')->insert([
                "name" => $category
            ]);
        }
    }
}
