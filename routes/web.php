<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login', fn () => redirect('/admin'));

// Fallback untuk semua route frontend React
Route::get('/{any}', function () {
    return view('welcome'); // Pastikan view ini memuat root React Anda
})->where('any', '.*');
