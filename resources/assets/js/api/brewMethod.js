import {ROAST_CONFIG} from "../config.JS";

export default {
    getBrewMethods:function(){
        return axios.get(ROAST_CONFIG.API_URL+'/brew-methods');
    }
}