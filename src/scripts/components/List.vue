<template>
    <div class="list">
   
        <ul class="Listsearch">
            <router-link tag="li" :to="`/detail/goodsId=${item.goodsId}`" v-for="(item,index) in list" class="list-search">
                <img :src='"http://cross.bentudou.com"+item.goodsImg'  alt="" class="list-img">
                <p v-html="item.goodsEnName"></p>
                <b v-html="'￥'+item.shopPriceCny"></b><br>
                
                <img :src='"http://cross.bentudou.com"+item.depotIcon'  alt="" class="list-imgico">
                <i v-html="item.depotName+'直邮'"></i>
            </router-link>
        </ul>
    </div>
</template>
<script>
import Vue from 'vue'

import Header3 from './Header3.vue'
Vue.component('Header3', Header3)


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

     props: ['onchange'],

    mounted: function () {

      let that = this;
      let type = that.$route.params.type;
     // console.log(type)
      utilAxios.get({
        url: 'Search/Search/searchGoodsPage.htm?keyWords='+type,
        method: 'get',
        callback: function (res) {
            console.log(res.data.data.goodsList.keyWords);
            that.list = that.list.concat(res.data.data.goodsList);
             that.onchange(res.data.data.keyWords)
        }
      })
    }
}
</script>