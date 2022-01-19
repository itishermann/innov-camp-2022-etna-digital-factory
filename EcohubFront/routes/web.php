<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SpaceController;
use App\Http\Controllers\ItemController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::middleware(['auth'])->group(function(){
    Route::get('/', function(){return redirect('/space');});
    Route::resource('home', HomeController::class);
    Route::resource('space', SpaceController::class);
    Route::resource('item', ItemController::class);
});

require __DIR__.'/auth.php';
