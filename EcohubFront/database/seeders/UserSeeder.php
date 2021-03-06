<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'JeanLuser',
            'email' => 'JeanLuser@gmail.com',
            'password' => Hash::make('11111111'),
            'main_home_id'=>'1',
        ]);
    }
}