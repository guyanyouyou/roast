export const CafeTagsFilter = {
    methods:{
        processCafeTagsFilter(cafe,tags){
            //如果标签不为空则进行处理
            if (tags.length > 0){
                var cafeTags = [];

                //将咖啡店所有标签推送到cafeTags数组中
                for (var i = 0;i < cafe.tags.length;i++){
                    cafeTags.push(cafe.tags[i].name);
                }

                //遍历所有待处理标签，如果标签在cafeTags数组中返回true
                for (var i = 0;i < tags.length;i++){
                    if (cafeTags.indexOf(tags[i]) > -1){
                        return true;
                    }
                }

                //如果所有的待处理标签都不在cafeTags数组中则返回false
                return false;
            }else{
                return true;
            }
        }
    }
}
