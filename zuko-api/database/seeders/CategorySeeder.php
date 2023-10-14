<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Category;
use App\Models\Post;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Post::factory()
            ->times(10)
            ->create();

        Category::factory()
            ->times(20)
            ->create();
            
        $posts = Post::all();

        Category::all()->each(function ($category) use ($posts) {
            $category->posts()->attach(
                $posts->random(rand(1, 3))->pluck('id')->toArray()
            );
        });
    }
}
