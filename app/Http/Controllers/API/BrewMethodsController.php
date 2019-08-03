<?php

namespace App\Http\Controllers\API;

use App\Models\BrewMethod;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BrewMethodsController extends Controller
{
    //
    public function getBrewMethods(){
        //获取所有包含咖啡店数目的冲泡方法
        $brewMethods = BrewMethod::withCount('cafes')->get();
        //以json格式返回数据
        return response()->json($brewMethods);
    }
}
