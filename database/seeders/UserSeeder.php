<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            [
                'name' => 'Asep Jaenudin Sutarji',
                'email' => 'asepjaenudinsutarji@gmail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('apesjs123'),
            ],
        ])->each(fn ($q) => User::create($q));
    }
}
