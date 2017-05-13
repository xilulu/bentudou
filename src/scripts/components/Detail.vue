<template lang="html">
  <div class="detail">   
    <header class="yo-header yo-header-b">
      <Header3/>
    </header>
    <section>
      <div class="m-boardtail">
        <mt-swipe :auto="6000">
            <mt-swipe-item v-for="(item,index) in list ">
                <img :src="'http://img.westwinglife.cn'+item.goodsImgPath" alt=""/>
            </mt-swipe-item>
        </mt-swipe>
        <b v-text="detaillist.goodsCnName"></b>
        <p v-text="'￥'+detaillist.shopPriceCny"></p>
        <span v-text="'产地：'+detaillist.depotName"></span><br/>
        <i v-text="'品牌：'+brand.brandEnName"></i><br/>
       {{test}} 品牌：<img :src="'http://img.westwinglife.cn'+brand.brandLogo"></img>
        <div >
         <img :src="item.img" alt="" v-for="(item,index) in detail" :key="index">
       </div>
    </div>
    
    </section>
     <nav>
             <ul>
                <router-link tag="li" to="/car" class="yo-ico" active-class="active">
                     <span>&#xe62a;</span>
                </router-link>
                <router-link tag="li" to="/car" class="yo-ico" active-class="active">
                     <span>&#xe610;</span>
                </router-link>

                 <router-link tag="li" to="/car" class="yo-ico" active-class="active">
                     <b>加入购物车</b>
                </router-link>
                 <router-link tag="li" to="/mine" class="yo-ico" active-class="active">
                     <b>立即购买</b>
                </router-link>
            </ul>
        </nav>
  </div>
</template>

<script>
import Vue from 'vue'

 import Header3 from './Header3.vue'
  Vue.component('Header3', Header3)

import utilAxios from '../utils/axios'
export default {
  data(){
    return {
     list: [],
     detaillist:[],
     detail:[],
     brand:[],
      test: this.$store.state.title
    }
  },
 props: ['onchange'],

    mounted: function () {
      let that = this
      let type = that.$route.params.type
      utilAxios.get({
        url: '/cross/Goods/getGoodsInfo.htm?BtdToken=&'+type,
        method: 'get',
        callback: function (res) {
          //console.log(res.data.data.goods);
           console.log(res.data);
          //that.title = res.data.title
         that.list = that.list.concat(res.data.data.goodsImgList)
         that.detaillist = res.data.data.goods
          that.brand = res.data.data.brand
        }
      })

      utilAxios.get({
      url: 'http://localhost:9000/detail',
      method: 'get',
      callback: function (res) {
        that.detail = that.detail.concat(res.data.detail)
      }
    })
    }
  }


</script>

<style lang="css">
</style>
