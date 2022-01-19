<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HomeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('homes')->insert([
            'name' => '',
            'street' => 'Boulevard Philippe',
            'postal_code' => '10001',
            'city' => 'cocorico',
            'user_id' => '1',
        ]);
    }
}
