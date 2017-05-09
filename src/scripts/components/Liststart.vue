<template>
    <div class="liststart">
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :autoFill="false" ref="loadmore">
        <p class="listp">全部分类 </p>
         <router-link :key="index" :to="`/category/${item.categoryId}`" tag="div" v-for="(item,index) in listdata">
            <img :src='"http://cross.bentudou.com"+item.categoryImg'  alt="">
            <p v-html="item.categoryName"></p>  
        </router-link>   
     </mt-loadmore>   
    </div>
</template>
<script>
import Vue from 'vue'
import { Indicator } from 'mint-ui';

import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);

import utilAxios from '../utils/axios'

export default {
    data(){
        return{
           listdata:[],
           topPullText:'',
           topDropText:'',
           topLoadingText:'',
           bottomPullText:'',
           bottomDropText:'',
           allLoaded:false
        }
    },
    methods:{
        loadTop() {
         this.$refs.loadmore.onTopLoaded();
        },
        loadBottom() {
         //   this.allLoaded = true;// 若数据已全部获取完毕
            this.$refs.loadmore.onBottomLoaded();
        }
    },
    mounted: function () {
      let that = this;
       Indicator.open({
        spinnerType: 'fading-circle'
     });
      utilAxios.get({
        url: 'Search/Category/%20getFirstCategoryList.htm',
        method: 'get',
        callback: function (res) {
           that.listdata = that.listdata.concat(res.data.data);
             Indicator.close()
        }
      })
    }
}
</script>