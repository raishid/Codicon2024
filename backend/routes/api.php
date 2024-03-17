<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Auth\GenericUser;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Broadcast;
use App\Http\Controllers\StreamController;
use App\Http\Controllers\ChatHistoryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::post('/socket/auth', function () {
  $user = new GenericUser(['id' => microtime()]);

  request()->setUserResolver(function () use ($user) {
    return $user;
  });

  return Broadcast::auth(request());
});


Route::post('/login', [AuthController::class, 'login'])->name('auth.login');
Route::post('/register', [AuthController::class, 'register'])->name('auth.register');


Route::get('/streams', [StreamController::class, 'index'])->name('stream.index');
Route::post('/streams', [StreamController::class, 'store'])->name('stream.store')->middleware('auth:sanctum');
Route::patch('/streams/{stream}', [StreamController::class, 'update'])->name('stream.update')->middleware('auth:sanctum');
Route::delete('/streams/{stream}', [StreamController::class, 'destroy'])->name('stream.destroy')->middleware('auth:sanctum');

Route::get('/stream/{stream}', [StreamController::class, 'show'])->name('stream.show');
Route::post('/stream/{stream}/chat', [ChatHistoryController::class, 'store'])->name('stream.chat.store');
