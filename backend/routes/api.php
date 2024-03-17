<?php

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



Route::get('/streams', [StreamController::class, 'index'])->name('stream.index');
Route::get('/stream/{stream}', [StreamController::class, 'show'])->name('stream.show');
Route::post('/stream/{stream}/chat', [ChatHistoryController::class, 'store'])->name('stream.chat.store');
