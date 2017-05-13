<template>
    <div class="list">
    <header class="yo-header yo-header-b">
      <Header3 />
    </header>
        
        <ul class="Categorylist">
        <router-link tag="li" :to="`/detail/goodsId=${item.goodsId}`" v-for="(item,index) in Categorylist">
             <img :src='"http://cross.bentudou.com"+item.goodsImg' alt="">
             <p v-html="item.goodsCnName"></p> 
             <b v-html="'￥'+item.shopPriceCny"></b>   
        </router-link>
        </ul>
    </div>
</template>
<script>
import Vue from 'vue'

import utilAxios from '../utils/axios'

export default {
    data(){
        return{
            Categorylist:[]
        }
    },
    

    mounted: function () {
      let that = this;
      let type = that.$route.params.type;
      console.log(type)
      utilAxios.get({
        url: 'Search/Category/findGoodsListByCategoryId.htm?categoryId='+type,
        method: 'get',
        callback: function (res) {
          console.log(res)
            that.Categorylist = that.Categorylist.concat(res.data.data.goodsList);
        }
      })
    }
}
</script>
