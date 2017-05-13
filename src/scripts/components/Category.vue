<template>
    <div class="list">
    <header class="yo-header yo-header-b">
      <Header3 />
    </header>
   <div class="Gatlist">
        <router-link tag="div" :to="`/categorylist/${item.categoryId}`" v-for="(item,index) in Category" class="Glist">
         <p v-html='item.categoryName' class="Gtitle"></p>
         <div class="Category">
             <div v-for="(item,index) in Category[index].categoryList" class="category">
                <img :src='"http://cross.bentudou.com"+item.categoryImg' alt="">
                <p v-html="item.categoryCnName"></p>
             </div> 
        </div>             
        </router-link>
     </div> 
    </div>
</template>
<script>
import Vue from 'vue'

import utilAxios from '../utils/axios'

export default {
    data(){
        return{
            Category:[],
           // title: this.$store.state.title
        }
    },
    /*methods: {
      changeHandler: function (title) {
        this.$store.commit({
          type: 'change',
          title: title
        })
        this.title = this.$store.state.title
      }
    },*/
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
