<template>
    <div class="mz-nav">
      <transition name="fade">
        <div class="nav" v-show="shows">
          <transition name="slideLeft">
            <ul v-show="shows"  @click="show">
              <router-link tag="li" to="/" @click.native="select('首页')">首页</router-link>
              <router-link tag="li" :to="{name:'Film',params:{type:'now-playing'}}" @click.native="select('影片')">影片</router-link>
              <router-link tag="li" to="/movie" @click.native="select('影院')">影院</router-link>
              <router-link tag="li" to="/user" @click.native="select('我的')">我的</router-link>
              <router-link tag="li" to="/card" @click.native="select('卖座卡')">卖座卡</router-link>
            </ul>
          </transition>
          <transition name="fade">
            <div class="cover" v-show="shows" @click="show"></div>  
          </transition>     
        </div> 
      </transition>
    </div>
    
</template>

<script>
export default {
  name: 'Nav',
  computed:{
    shows(){
      return this.$store.state.showNav;    //计算属性
    }
  },
  methods:{
    show(){
      this.$store.dispatch("showAction")
    },
    select(data){
      this.$store.dispatch("selectAction",data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  @import "../../../static/css/nav.css";     
</style>
