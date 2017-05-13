<template>
    <div class="m-section">
     <header>
        <Header1 />
     </header>
     <div class="m-board">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in dataSource " :key="index">
                <img :src="'http://img.westwinglife.cn'+item.advertisementImg" alt=""/>
            </mt-swipe-item>
        </mt-swipe>
        <board-list></board-list>
    </div>  
    </div>
  
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import utilAxios from '../utils/axios'


import BoardList from './BoardList.vue'
Vue.component('board-list', BoardList)

import axios  from 'axios'
export default {
    data(){
        return{
            dataSource:[]
        }
    },
    
    mounted:function(){
        var that = this;
        axios({
            method:'get',
            url:'/cross/Index/getNewIndexData.htm?operationPositionShowGoodsNumber=10',
        })
            .then(function(res) {
                //console.log(res.data.data);
               that.dataSource =  that.dataSource.concat(res.data.data.advertisementList);
        });
    }

}
</script>