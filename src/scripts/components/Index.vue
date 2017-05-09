<template>
    <div class="m-index">

       <Header title='' :isShowinput="true"/>
        <section>
             <router-view></router-view>
        </section>
        <nav>
             <ul>
                <router-link tag="li" to="/board" class="yo-ico" active-class="active">
                     <span>&#xe6b8;<b>首页</b></span>
                </router-link>
                <router-link tag="li" to="/list" class="yo-ico" active-class="active">
                     <span>&#xe7da;<b>分类</b></span>
                </router-link>
                 <router-link tag="li" to="/car" class="yo-ico" active-class="active" >
                     <span>&#xe78b;<b>购物车</b></span>
                </router-link>
                 <router-link tag="li" to="/mine" class="yo-ico" active-class="active">
                     <span>&#xe78b;<b>我的</b></span>
                </router-link>
            </ul>
        </nav>
    </div>
</template>
