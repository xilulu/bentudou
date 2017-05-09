<template>
    <div class="list">
        <p>搜索结果</p>
        <div v-for="(item,index) in list">
            <img :src='"http://cross.bentudou.com"+item.goodsImg'  alt="">
            <p v-html="item.goodsEnName"></p>
            <p v-html="item.shopPriceCny"></p>
            <p v-html="item.depotName+'直邮'"></p>
            <img :src='"http://cross.bentudou.com"+item.depotIcon'  alt="">
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import utilAxios from '../utils/axios'

export default {
    data(){
        return{
            list:[]
        }
    },
    mounted: function () {
      let that = this;
      let type = that.$route.params.type;
      console.log(type)
      utilAxios.get({
        url: 'Search/Search/searchGoodsPage.htm?keyWords='+type,
        method: 'get',
        callback: function (res) {
            console.log(res.data.data.goodsList);
            that.list = that.list.concat(res.data.data.goodsList);
        }
      })
    }
}
</script>