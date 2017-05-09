import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/scripts/components/Index'
import Liststart from '@/scripts/components/Liststart'
import Listtouch from '@/scripts/components/Listtouch'
import List from '@/scripts/components/List'
import Category from '@/scripts/components/Category'
import Categorylist from '@/scripts/components/Categorylist'

import Board from '@/scripts/components/Board'
import Car from '@/scripts/components/Car'
import Mine from '@/scripts/components/Mine'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      redirect:'board',
      children:[
        {
          path:'board', 
          component:Board
        },
         {
          path:'liststart',
          component:Liststart
        },
         {
          path:'car',
          component:Car
        },
         {
          path:'mine',
          component:Mine
        }
      ]
    },{
      path:'/listtouch',
      component:Listtouch
    },{
      path: '/list/:type',
      component:List
    },{
      path: '/category/:type',
      component:Category
    },{
      path: '/categorylist/:type',
      component:Categorylist
    }
  ]
})
