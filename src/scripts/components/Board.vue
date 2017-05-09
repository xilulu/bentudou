<template>
    <div class="m-board">
        board
    </div>
  
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import utilAxios from '../utils/axios'

export default {

}
</script>