import { ROAST_CONFIG } from "../config.js";

export default {
    getCafes:function () {
        return axios.get(ROAST_CONFIG.API_URL+'/cafes');
    },
    getCafe:function(cafeID){
        return axios.get(ROAST_CONFIG.API_URL+'/cafes/'+cafeID)
    },
    postAddNewCafe:function(name,locations,website,description,roaster){
        return axios.post(ROAST_CONFIG.API_URL + '/cafes/',{
            name:name,
            locations:locations,
            website:website,
            description:description,
            roaster:roaster,
        })
    },
    postLikeCafe:function(cafeID){
        return axios.post(ROAST_CONFIG.API_URL+'/cafes/'+cafeID+'/like');
    },
    deleteLikeCafe:function (cafeID) {
        return axios.delete(ROAST_CONFIG.API_URL+/cafes/+cafeID+'/like');
    }
}