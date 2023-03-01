import Vue from 'vue'
import VueRouter  from 'vue-router'
import Home from '../views/MyHome.vue'
import User from '../views/MyUser.vue'
import Main from '../views/MyMain.vue'

import Mall from '../views/MyMall.vue'
import Page1 from '../views/MyPageOne.vue'
import Page2 from '../views/MyPageTwo.vue'
// 创建路由组件
Vue.use(VueRouter)

const routes = [
  // 主路由
  {path:'/',
  redirect:'/home',
  component:Main, children:[
    // 子路由
    {path:'/home',component:Home},
    {path:'/user', component:User},
    {path:'/mall',component:Mall},
    {path:'/page1',component:Page1},
    {path:'/Page2',component:Page2}
  ]},
]
const router = new VueRouter({
  routes
})

export default router