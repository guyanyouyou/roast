<?php
namespace App\Utilities;


use GuzzleHttp\Client;

class GaodeMaps{

    public static function geocodeAddress($address,$city,$state){
        //省、市、区详细地址
        $address = urlencode($state.$city.$address);
        //web 服务apikey
        $apiKey = config('services.gaode.ws_api_key');
        //构建地理位置api请求url，默认返回json格式响应
        $url = 'https://restapi.amap.com/v3/geocode/geo?address=' . $address . '&key=' . $apiKey;

        //创建Guzzle HTTP客户端发起请求
        $client = new Client();

        //发送请求并获取响应数据
        $geocodeResponse = $client->get($url)->getBody();
        $geocodeData = json_decode($geocodeResponse);

        //初始化地理编码位置
        $coordinates['lat'] = null;
        $coordinates['lng'] = null;

        //如果响应数据不为空则解析出经纬度
        if (!empty($geocodeData)
            && $geocodeData->status
            && isset($geocodeData->geocodes)
            && isset($geocodeData->geocodes[0])){

            list($latitude,$longitude) = explode(',',$geocodeData->geocodes[0]->location);
            $coordinates['lat'] = $latitude;
            $coordinates['lng'] = $longitude;

        }
        //返回地理编码位置数据
        return $coordinates;
    }
}
