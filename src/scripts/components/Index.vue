<template>
    <div class="m-index">
<<<<<<< d1ba3314486fda249b288ada43bd94ffe80a5303
    <header>
        <Header1 />
     </header>   
=======

       <Header title='' :isShowinput="true"/>
>>>>>>> 第一次合并
        <section>
             <router-view></router-view>
        </section>
        <nav>
             <ul>
                <router-link tag="li" to="/board" class="yo-ico" active-class="active">
                     <span>&#xe632;<b>首页</b></span>
                </router-link>
                <router-link tag="li" to="/liststart" class="yo-ico" active-class="active">
                     <span>&#xe610;<b>分类</b></span>
                </router-link>
<<<<<<< d1ba3314486fda249b288ada43bd94ffe80a5303
                 <router-link tag="li" to="/car" class="yo-ico" active-class="active">
                     <span>&#xe62a;<b>购物车</b></span>
=======
                 <router-link tag="li" to="/car" class="yo-ico" active-class="active" >
                     <span>&#xe78b;<b>购物车</b></span>
>>>>>>> 第一次合并
                </router-link>
                 <router-link tag="li" to="/mine" class="yo-ico" active-class="active">
                     <span>&#xe78b;<b>我的</b></span>
                </router-link>
            </ul>
        </nav>
    </div>
</template>
<script>
  import Vue from 'vue'
  import Header1 from './Header1.vue'
  Vue.component('Header1', Header1)

  import Header2 from './Header2.vue'
  Vue.component('Header2', Header2)

  export default {

  }
</script>
