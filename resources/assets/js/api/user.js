import {ROAST_CONFIG} from "../config";

export default {
    getUser:function () {
        return axios.get(ROAST_CONFIG.API_URL+'/user');
    },
    putUpdateUser:function(profile_visibility,favorite_coffee,flavor_notes,city,state){
        console.log(profile_visibility);
        console.log(favorite_coffee);
        return axios.put(ROAST_CONFIG.API_URL + '/user',{
            profile_visibility:profile_visibility,
            favorite_coffee:favorite_coffee,
            flavor_notes:flavor_notes,
            city:city,
            state:state,
        })
    }
}
