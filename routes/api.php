<?php

use App\Http\Controllers\BeritaController;
use App\Http\Controllers\PenggunaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/login', [PenggunaController::class, 'loginFlutter']);
Route::post('/register', [PenggunaController::class, 'register']);
Route::get('/berita', [BeritaController::class, 'index']);

