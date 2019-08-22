<?php

use Illuminate\Http\Request;

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
//共有路由，无需登录即可访问
Route::group(['prefix'=>'v1'],function(){
    Route::get('/cafes', 'API\CafesController@getCafes');
    Route::get('/cafes/{id}', 'API\CafesController@getCafe');
    Route::get('/brew-methods','API\BrewMethodsController@getBrewMethods');
    //标签自动完成路由
    Route::get('tags','API\TagsController@getTags');
    //获取用户信息
    Route::get('/user', 'API\UsersController@getUser');
    Route::put('/user','API\UsersController@putUpdateUser');
});

Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function(){

    Route::post('/cafes', 'API\CafesController@postNewCafe');
    //喜欢咖啡店
    Route::post('/cafes/{id}/like','API\CafesController@postLikeCafe');
    //取消喜欢咖啡店
    Route::delete('/cades/{id}/like','API\CafesController@deleteLikeCafe');
    //添加标签到指定咖啡店
    Route::post('/cafes/{id}/tags','API\CafesController@postAddTags');
    //删除指定咖啡店上的指定标签
    Route::delete('/cafes/{id}/tags/{tagID}','API\CafesController@deleteCafeTag');

});
/*Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function(){
    Route::get('/user', function( Request $request ){
        return $request->user();
    });
});*/


