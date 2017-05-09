<template>
    <div class="m-board">
<<<<<<< d1ba3314486fda249b288ada43bd94ffe80a5303
        board
=======
   
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in dataSource " :key="index">
                <img :src="'http://img.westwinglife.cn'+item.advertisementImg" alt=""/>
            </mt-swipe-item>
        </mt-swipe>
        <board-list></board-list>
       
>>>>>>> 第一次合并
    </div>
  
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

<<<<<<< d1ba3314486fda249b288ada43bd94ffe80a5303
import utilAxios from '../utils/axios'

export default {

=======

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
>>>>>>> 第一次合并
}
</script>