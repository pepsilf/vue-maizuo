<template>
  <div class="header">
    <div class="header">
      <span @click="show">菜单</span>
      <span @click="show">{{this.$store.state.listName}}</span>
      <router-link tag="span" to="/city" @click.native="select('城市')">深圳</router-link>
      <router-link tag="span" to="/user" @click.native="select('我的')">用户</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods:{
    show(){
      this.$store.dispatch("showAction")
    },
    select(data){
      this.$store.dispatch("selectAction",data)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  @import "../../../static/css/header.css";     
</style>
