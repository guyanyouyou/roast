<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Cafe extends Model
{
    //定义与BrewMrthod模型类之间的多对多关联
    public function brewMethods(){
        return $this->belongsToMany(BrewMethod::class,'cafes_brew_methods','cafe_id','brew_method_id');
    }

    //关联分店
    public function children(){
        return $this->hasMany(Cafe::class,'parent','id');
    }

    //归属总店
    public function parent(){
        return $this->hasOne(Cafe::class,'id','parent');
    }

    //与User间的多对多关系
    public function likes(){
        return $this->belongsToMany(User::class,'users_cafes_likes','cafe_id','user_id');
    }

    public function userLike(){
        return $this->belongsToMany(User::class,'users_cafes_likes','cafe_id','user_id')->where('user_id',auth()->id());
    }

    public function tags(){
        return $this->belongsToMany(Tag::class,'cafes_users_tags','cafe_id','tag_id');
    }
}
