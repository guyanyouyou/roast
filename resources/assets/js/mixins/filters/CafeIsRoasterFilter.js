export const CafeIsRoasterFilter = {
    methods:{
        processCafeIsRoasterFilter(cafe){
            //检查咖啡店是否是烘培店
            if (cafe.roaster === 1){
                return true;
            }else{
                return false;
            }

        }
    }
}
