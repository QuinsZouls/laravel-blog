<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Post;
use App\Http\Controllers\PostController;

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

Route::get('/', function () {
    $posts = Post::all();
    return Inertia::render('Blog', [
        'posts' => $posts
    ]);
});
Route::get('/post', function () {
    return Inertia::render('PostEdition', [
        'auth' => csrf_token(),
    ]);
});
Route::post('/post',  [PostController::class, 'store']) -> name('post.storage');

require __DIR__.'/auth.php';
