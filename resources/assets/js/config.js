var api_url = '';
var gaode_maps_js_api_key = 'e38f642a00e4039882ffdbc51d25df7d';

switch (process.env.NODE_ENV) {
    case 'development':
        api_url = 'http://roast.test/api/v1';
        break;
    case 'production':
        api_url = 'http://roast.demo.waiting8.com/api/v1'
        break;
}

export const ROAST_CONFIG ={
    API_URL:api_url,
    GAODE_MAPS_JS_API_KEY:gaode_maps_js_api_key
}