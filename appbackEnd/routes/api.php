<?php

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

Route::group([ 'middleware' =>'auth:api'], function(){
    Route::post('/logout', 'App\Http\Controllers\LoginLogoutController@logout');
   
    // Route::PUT('/modifier/{id}', 'App\Http\Controllers\users\projetController@modifier');
    Route::post('/invi/{id}', 'App\Http\Controllers\users\invitiController@store');
    Route::delete('/invi/{id}', 'App\Http\Controllers\users\invitiController@destroy');
    Route::get('/invi_projet/{id}', 'App\Http\Controllers\users\invitiController@show');//t9RA INVI 3la hsab projet
    Route::get('/monProjet', 'App\Http\Controllers\users\projetController@monProjets');
    Route::post('like/{idProjet}','App\Http\Controllers\users\likeController@store');
    

    Route::get('show_like/{idProjet}','App\Http\Controllers\users\likeController@show');
    Route::get('show_nombre/{idProjet}','App\Http\Controllers\users\likeController@show_nombre');
    Route::post('ajouter_comm/{idProjet}','App\Http\Controllers\users\commentController@store');
   
    Route::get('show_commant/{idProjet}','App\Http\Controllers\users\commentController@show_commant');
    Route::put('update_comm/{id}','App\Http\Controllers\users\commentController@update_comm');
    Route::delete('supprimer_comm/{id}','App\Http\Controllers\users\commentController@destroy');
    Route::post('LancerQuestion','App\Http\Controllers\QuestionsController@store');
    Route::post('/getUser_Connected','App\Http\Controllers\LoginLogoutController@getUser_Connected');
    Route::post('/QuestionPoser','App\Http\Controllers\QuestionsController@store');
    Route::post('/AddCadeax','App\Http\Controllers\CadeauxController@store');
    Route::post('/cadeaux/{projet_id}','App\Http\Controllers\CadeauxController@show');
    Route::post('/projet', 'App\Http\Controllers\users\projetController@store');
    Route::delete('/projet/{id}', 'App\Http\Controllers\users\projetController@destroy');
    Route::get('/NombreProjet/{id}','App\Http\Controllers\users\projetController@NombreProjet');
    Route::post('/updatephoto/{id}', 'App\Http\Controllers\LoginLogoutController@updatephotousers');
    Route::get('/acceptprojet/{id}', 'App\Http\Controllers\users\projetController@accepetationdeProjets');
});
Route::post('/register', 'App\Http\Controllers\LoginLogoutController@register');
Route::post('/Login', 'App\Http\Controllers\LoginLogoutController@login');
Route::get('/getQestion','App\Http\Controllers\QuestionsController@getQestion');
Route::get('/projet/{nom_projet}','App\Http\Controllers\users\projetController@show');
Route::post('/checkTitre','App\Http\Controllers\users\projetController@checkTitre');
Route::post('/ProjetAccepte','App\Http\Controllers\users\projetController@AffichierProjetCatetpays');
Route::post('/ForgetPassemail', 'App\Http\Controllers\LoginLogoutController@ForgetPassemail');
Route::post('ForgetPass/{email}', 'App\Http\Controllers\LoginLogoutController@ForgetPass1');
Route::post('ActiverCompte/{email}', 'App\Http\Controllers\LoginLogoutController@ActiverCompte');
Route::get('/counthomme','App\Http\Controllers\users\projetController@CountTousproduits');

