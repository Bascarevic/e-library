<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Author;
use App\Models\Book;
use App\Models\Category;
use App\Models\User;
use App\Models\UserRole;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        UserRole::truncate();
        User::truncate();
        Author::truncate();
        Category::truncate();

        $admin= UserRole::factory()->create([
            'role_name' => 'admin'
        ]);

        User::factory()->create([
            'name_and_surname'=>"Admin Admin",
            'email'=>"admin@admin.com",
            'id_role'=>$admin,
        ]);
        
        UserRole::factory()->create([
            'role_name' => 'user'
        ]);
        
        Category::factory()->create([
            'type' => 'roman'
        ]);
        Category::factory()->create([
            'type' => 'poezija'
        ]);
        Category::factory()->create([
            'type' => 'pripovetka'
        ]);
        Category::factory()->create([
            'type' => 'drama'
        ]);
//Mogu i obrisati Author i Book factory
        //Author::factory()->count(10)->create();
       // Book::factory()->count(10)->create();
    }
}
