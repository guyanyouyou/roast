import {ROAST_CONFIG} from "../config";

export default {
    getUser:function () {
        return axios.get(ROAST_CONFIG.API_URL+'/user');
    }
}