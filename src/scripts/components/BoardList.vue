<template lang="html">
  <div class="m-boardlist">
   
  <div v-for="(item,index) in boardList" class="list" :key="index">
      <img :src="'http://img.westwinglife.cn'+ item.operatingPositionImg" alt=""
      class="boardimg" />
    	<ul>
     
      	<router-link tag="li" :to="`/detail/goodsId=${item.goodsId}`" v-for="(item,index) in boardList[index].goodsList"  :key="index">
           <img :src="'http://img.westwinglife.cn'+ item.goodsImg" alt="" class="boardlist" />
 		       <b v-text="item.goodsCnName"></b>
           <p v-text="'￥'+item.shopPriceCny"></p>
 		   </router-link>
      
    </ul>
   </div>
   

 <div v-for="(item,index) in info" class="list" :key="index">
      <img :src="'http://img.westwinglife.cn'+ item.goodsImg" alt=""
       />
  </div>
  <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
  <h2>笨土豆精选</h2>
    <div class="Supreme">
       <div v-for="(item,index) in allList" :key="index" class="supreme">
       <router-link :to="`/detail/goodsId=${item.goodsId}`" >
          <img  :src="'http://img.westwinglife.cn'+ item.goodsImg" alt=""
           class="supremeimg"/>
           <b v-text="item.goodsCnName"></b>
           <p v-text="'￥'+item.shopPriceCny"></p>
        </router-link>
      </div>
  </div>
   </mt-loadmore>   
  </div>
</template>

<script>
import Vue from 'vue'
import utilAxios from '../utils/axios';

import { Loadmore } from 'mint-ui';

Vue.component(Loadmore.name, Loadmore);

export default {
  data(){
    return {
      boardList: [],
      boardimg: [],
      info:[],
      allList:[],
      allLoaded: false,
      title: '',
      page:0
    }
  },
   methods: {
          loadBottom:function() {
            console.log(1);
            this.page++;
            let that = this;
           
          utilAxios.get({
            url: '/cross/OperatingPosition/getGoodsOperationsList.htm?operationsType=05&page='+this.page+'&rows=10',
            method: 'get',
            callback: function (res) {
              console.log(res.data.data.goodsOperationsList);
             that.allList=that.allList.concat(res.data.data.goodsOperationsList);
              that.$refs.loadmore.onBottomLoaded();
            }
          })
         


       }
      },
  

  mounted: function () {
    let that = this
    utilAxios.get({
      url: '/cross/Index/getNewIndexData.htm?operationPositionShowGoodsNumber=10',
      method: 'get',
      callback: function (res) {
      	
        // that.boardimg = that.boardimg.concat((JSON.parse(res.request.response).data.operatingPositionList));

        that.boardList = that.boardList.concat(res.data.data.operatingPositionList);
      }
    })
  }
}
</script>

<style lang="css">
</style>
