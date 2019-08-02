<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\StoreCafeRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Cafe;

class CafesController extends Controller
{
    public function getCafes(){
        $cafes = Cafe::all();
        return response()->json($cafes);
    }

    public function postNewCafe(StoreCafeRequest $request){
        $cafe = new Cafe();
        $cafe->name = $request->input('name');
        $cafe->address = $request->input('address');
        $cafe->city = $request->input('city');
        $cafe->state = $request->input('state');
        $cafe->zip = $request->input('zip');
        $cafe->save();
        return response()->json($cafe,201);
    }

    public function getCafe($id){
        $cafe = Cafe::where('id','=',$id)->first();
        return response()->json($cafe);
    }
}
