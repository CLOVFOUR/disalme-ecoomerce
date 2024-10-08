<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Ecommerce\IndexController;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
 */
Route::get('', [IndexController::class, 'index'])->name('index');
Route::get('/faq', [IndexController::class, 'faq'])->name('index');

require __DIR__ . '/auth.php';

Route::get('/clear', function () {
    Artisan::call('cache:clear');
    Artisan::call('route:cache');
    Artisan::call('view:clear');
    Artisan::call('config:cache');
    return "all cleared ...";
});

Route::group(['middleware' => 'auth'], function () {
    Route::get('/dashboards/index', [DashboardController::class, 'index'])->name('dashboards.index');
    //Route::get('', [RoutingController::class, 'index'])->name('root');
    /*
Route::get('{first}/{second}/{third}', [RoutingController::class, 'thirdLevel'])->name('third');
Route::get('{first}/{second}', [RoutingController::class, 'secondLevel'])->name('second');
Route::get('{any}', [RoutingController::class, 'root'])->name('any');
 */
});
