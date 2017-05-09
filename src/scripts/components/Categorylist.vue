<template>
    <div class="list">
        <p>搜索结果</p>
        <div v-for="(item,index) in Categorylist">
             <img :src='"http://cross.bentudou.com"+item.goodsImg' alt="">
             <p v-html="item.goodsCnName"></p>  
        </div>
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
            that.Categorylist = that.Categorylist.concat(res.data.data.goodsList);
        }
      })
    }
}
</script>
