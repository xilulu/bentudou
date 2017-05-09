<template>
    <div class="list">
        <router-link tag="div" :to="`/categorylist/${item.categoryId}`" v-for="(item,index) in Category">
         <p v-html='item.categoryName'></p>
             <div v-for="(item,index) in Category[index].categoryList">
                <img :src='"http://cross.bentudou.com"+item.categoryImg' alt="">
                <p v-html="item.categoryCnName"></p>
             </div>           
        </router-link>
    </div>
</template>
<script>
import Vue from 'vue'

import utilAxios from '../utils/axios'

export default {
    data(){
        return{
            Category:[]
        }
    },
    mounted: function () {
      let that = this;
      let type = that.$route.params.type;
      console.log(type)
      utilAxios.get({
        url: 'Search/Category/%20findCategoryListByFirstCategoryId.htm?categoryId='+type,
        method: 'get',
        callback: function (res) {
            console.log(res);
            that.Category = that.Category.concat(res.data.data);
        }
      })
    }
}
</script>
