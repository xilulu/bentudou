<template lang="html">
  <div class="detail">   
    <header class="yo-header yo-header-b">
      <h2 class="title">商品详情</h2>
      <a class="regret yo-ico" @click="back"></a>
      <span class="affirm">分享</span>
    </header>
    <section>
      <div class="m-boardtail">
        <mt-swipe :auto="6000">
            <mt-swipe-item v-for="(item,index) in list ">
                <img :src="'http://img.westwinglife.cn'+item.goodsImgPath" alt=""/>
            </mt-swipe-item>
        </mt-swipe>
    </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'

import utilAxios from '../utils/axios'
export default {
  data(){
    return {
     list: []
    }
  },

  methods: {
    back: function () {
      this.$router.go(-1)
    }
  },

    mounted: function () {
      let that = this
      let type = that.$route.params.type
      utilAxios.get({
        url: '/cross/Goods/getGoodsInfo.htm?BtdToken=&'+type,
        method: 'get',
        callback: function (res) {
          //console.log(res.data.data.goods);
           console.log(res.data.data.goodsImgList);
          //that.title = res.data.title
         that.list = that.list.concat(res.data.data.goodsImgList)
        }
      })
    }
  }


</script>

<style lang="css">
</style>
