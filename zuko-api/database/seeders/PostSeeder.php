<?php

namespace Database\Seeders;

use App\Modals\Post;
use App\Modals\Block;
use App\Modals\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Post::factory()
            ->has(Block::post()->count(3))
            ->has(Category::categories()->count(3))
            ->times(10)
            ->create();
    }
}
