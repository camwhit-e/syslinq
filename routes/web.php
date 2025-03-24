<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NodeController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard/home');
    })->name('dashboard');

    Route::get('dashboard/analytics', function () {
        return Inertia::render('dashboard/analytics');
    })->name('dashboard.analytics');

    Route::prefix('/nodes')->group(function () {
        Route::get('/', [NodeController::class, 'index']);
        Route::post('/', [NodeCOntroller::class, 'store'])->name('nodes.store');

        Route::get('/{node:id}', [NodeController::class, 'view']);

    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
