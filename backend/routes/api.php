<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::resource('/books', BookController::class)->only('index', 'show');
Route::resource('/booksStore', BookController::class)->only('store', 'update', 'destroy');


Route::group(['middleware' => ['auth:sanctum']], function () {
   // Route::resource('/books', BookController::class)->only('index');
   // Route::resource('/books', BookController::class)->only('store', 'update'); //radi! //dodati ovde SHOW!
   // Route::get('/show/{id}', [BookController::class, 'show']);

    Route::post('/logout', [AuthController::class, 'logout']);
});
