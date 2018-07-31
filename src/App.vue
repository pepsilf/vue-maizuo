<template>
  <div class="App">
    <Header></Header>
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script>

import Header from "@/components/home/Header";             //引入头部组件
import Nav from "@/components/home/Nav";

export default {
  components:{Header,Nav},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
</style>
