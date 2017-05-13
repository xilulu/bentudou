<template>
    <div>  
        <div class="yo-search">
         <span class="regret left yo-ico" @click="back">&#xf07d;</span>
            <label class="action">
                <span class="yo-ico"></span>
                <input type="text" class="input" v-model="x" placeholder="输入搜索关键字..." v-on:keyup.enter="submit">
            </label>
        </div>
        <h3 :title='title' class="hot-search">热门搜索: <b>{{title}}</b></h3>
        <router-view :onchange="changeHandler"></router-view>
        <ul class="searchlist">
          <router-link tag="li" :to="`/list/${'Coach'}`">Coach</router-link>
          <router-link tag="li" :to="`list/${'Bad Air'}`">Bad Air</router-link>
          <router-link tag="li" :to="`/list/${'维骨力'}`">维骨力</router-link>
          <router-link tag="li" :to="`/list/${'Mk'}`">Mk</router-link>
        </ul>
         
        
    </div>
</template>
<script>
import Vue from 'vue'
import utilAxios from '../utils/axios'

export default {
  data(){
    return {
      boardList: [],
      title: '',
      x: '',
      title: this.$store.state.title
    }
  },
  methods: {
    changeHandler: function (title) {
        this.$store.commit({
          type: 'change',
          title: title
        })
        this.title = this.$store.state.title
      },
    back: function () {
      this.$router.go(-1)
    },
    submit:function(){
      console.log(this.x)
       this.$router.push({ path: 'list/'+this.x})
    }
  },
  props: ['uri'],

  mounted: function () {
    // let that = this
    // utilAxios.get({
    //   url:'/Search/Search/searchGoodsPage.htm?keyWords='+that.uri,
    //   method: 'get',
    //   callback: function (res) {
    //     that.title = res.data.title
    //     that.boardList = that.boardList.concat(res.data.subjects)
    //   }
    // })
  }
}
</script>