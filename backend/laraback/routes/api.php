<?php

use App\Http\Controllers\MusicController;
use App\Http\Controllers\SliderController;
use App\Http\Controllers\StoreController;
use App\Http\Controllers\TourController;
use App\Http\Controllers\VideoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\View\ViewFinderInterface;

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

Route::get('/tours', [TourController::class, "getAllTour"]);
Route::post('/tours/add', [TourController::class, "addTour"]);



Route::get('/musics', [MusicController::class, "getAllMusicList"]);
Route::post("/music/add", [MusicController::class, "addMusic"]);


Route::any("/videos", [VideoController::class, "getAllVideos"]);
Route::post("/video/add", [VideoController::class, "addVideoToList"]);


Route::get("/store/items", [StoreController::class, "getAllStoreItems"]);
Route::post("/store/add-item", [StoreController::class, "addItemToStore"]);


Route::get('/sliders' , [SliderController::class, "getAllSliderImages"]);
Route::post('/slider/upload', [SliderController::class, "uploadSliderImage"]);
