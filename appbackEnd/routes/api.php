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
    Route::get('/inviParjours', 'App\Http\Controllers\users\invitiController@inviParjours');
    
    Route::post('like/{idProjet}','App\Http\Controllers\users\likeController@store');
    // projet Accepte + projet Refuser
    
    
    
    Route::post('/projet', 'App\Http\Controllers\users\projetController@store');
    Route::get('show_like/{idProjet}','App\Http\Controllers\users\likeController@show');
    Route::get('show_nombre/{idProjet}','App\Http\Controllers\users\likeController@show_nombre');
    Route::post('ajouter_comm/{idProjet}','App\Http\Controllers\users\commentController@store');
    Route::get('show_commant/{idProjet}','App\Http\Controllers\users\commentController@show_commant');
    Route::put('update_comm/{id}','App\Http\Controllers\users\commentController@update_comm');
    Route::delete('supprimer_comm/{id}','App\Http\Controllers\users\commentController@destroy');
    Route::post('LancerQuestion','App\Http\Controllers\QuestionsController@store');
    Route::post('/getUser_Connected','App\Http\Controllers\LoginLogoutController@getUser_Connected');
    Route::post('/QuestionPoser','App\Http\Controllers\QuestionsController@store');
    Route::delete('/suppquestion/{id}','App\Http\Controllers\QuestionsController@supprimerQestion');
    Route::get('/Questionpasreponser','App\Http\Controllers\QuestionsController@getQuestionPasaccepte');
    Route::post('/AddCadeax','App\Http\Controllers\CadeauxController@store');
    Route::get('/projetenattante', 'App\Http\Controllers\users\projetController@getallprojetenattnde');

    //Admin
    //getDataAllProjectAdmin
    Route::get('/getDataAdmin','App\Http\Controllers\admin\AdminController@getDataAllProjectAdmin');
    
    Route::post('/acceptprojet/{id}', 'App\Http\Controllers\users\projetController@accepetationdeProjets');
    Route::post('/reffuserProjet/{id}', 'App\Http\Controllers\users\projetController@refuseProjet');
    Route::get('/getALLglobalAdmin','App\Http\Controllers\admin\AdminController@getlesNombre');
    Route::get('/getseccusProjet','App\Http\Controllers\admin\AdminController@getseccusProjet');
    Route::get('/mieurprojet','App\Http\Controllers\admin\AdminController@mieurprojet');
    Route::get('/getAllUser', 'App\Http\Controllers\LoginLogoutController@getAllUser');
    Route::post('/ActiverCompteAdmin/{id}','App\Http\Controllers\admin\AdminController@ActiverComptreParAdmin');
    Route::post('/desActiverCompteAdmin/{id}','App\Http\Controllers\admin\AdminController@desActiverComptreParAdmin');
    Route::get('/getAllMessage','App\Http\Controllers\admin\AdminController@getAllMessage'); 
    Route::post('/reponder','App\Http\Controllers\QuestionsController@AccepteQuestion');
    Route::post('/projet', 'App\Http\Controllers\users\projetController@store');
    Route::delete('/projet/{id}', 'App\Http\Controllers\users\projetController@destroy');
    Route::delete('/supprimerprojet/{nom}', 'App\Http\Controllers\users\projetController@SupprimerParNome');
    
    
    Route::get('/NombreProjet/{id}','App\Http\Controllers\users\projetController@NombreProjet');
    Route::post('/updatephoto/{id}', 'App\Http\Controllers\LoginLogoutController@updatephotousers');
    Route::post('/modifierPasseProfil', 'App\Http\Controllers\LoginLogoutController@Modifierpassprofil');
    Route::post('/repondeMessage','App\Http\Controllers\admin\AdminController@repondeMessage');
    Route::delete('/supprimerMessage/{id}','App\Http\Controllers\admin\AdminController@supprimerMessage');
});
Route::post('/addinvi', 'App\Http\Controllers\users\invitiController@addinvi');
Route::get('/datetest', 'App\Http\Controllers\LoginLogoutController@testdateprojet');
Route::get('/cadeaux/{projet_id}','App\Http\Controllers\CadeauxController@show');
Route::post('/register', 'App\Http\Controllers\LoginLogoutController@register');
Route::post('/Login', 'App\Http\Controllers\LoginLogoutController@login');


Route::get('/getlikeforprojet/{id}', 'App\Http\Controllers\users\projetController@likeprojet');//get likes par user for all projects
//ADD MESSAGE USER SON AUTONTIFICATION
Route::post('/addMessage','App\Http\Controllers\admin\AdminController@addMessage');
Route::get('/getQestion','App\Http\Controllers\QuestionsController@getQestion');
Route::get('/projet/{nom_projet}','App\Http\Controllers\users\projetController@show');
Route::post('/checkTitre','App\Http\Controllers\users\projetController@checkTitre');
Route::post('/ProjetAccepte','App\Http\Controllers\users\projetController@AffichierProjetCatetpays');
Route::post('/ForgetPassemail', 'App\Http\Controllers\LoginLogoutController@ForgetPassemail');
Route::post('ForgetPass/{email}', 'App\Http\Controllers\LoginLogoutController@ForgetPass1');
Route::post('ActiverCompte/{email}', 'App\Http\Controllers\LoginLogoutController@ActiverCompte');
Route::get('/counthomme','App\Http\Controllers\users\projetController@CountTousproduits');
Route::get('/projetScusshomme','App\Http\Controllers\users\projetController@projetScusshomme');
Route::get('/projetgethomme','App\Http\Controllers\users\projetController@projetgethomme');

Route::post('payements', 'App\Http\Controllers\users\invitiController@payements');
