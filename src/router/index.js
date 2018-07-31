import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import User from '@/components/user/User'
import City from '@/components/city/City'
import Film from '@/components/film/Film'
import Movie from '@/components/movie/Movie'
import Card from '@/components/card/Card'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/film/:type',   //接收数据
      name: 'Film',
      component: Film,
      props:true             //通过props接收
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/card',
      name: 'Card',
      component: Card
    },
    {
      path: "/*",   
      redirect: Home    //默认路由
    },
  ]
})
