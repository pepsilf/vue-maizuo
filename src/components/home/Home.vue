<template>
  <div id="home">
    <div class="home">
      <div class="swiper-container banner">
        <div class="swiper-wrapper">
          <div v-for="item in arr" :key="item.id" class="swiper-slide">
            <img :src="item.imageUrl">
          </div>
        </div>
      </div>
    </div>
    <Movies type="now-playing"></Movies>
    <Movies type="coming-soon"></Movies>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import Movies from "@/components/home/Movies";

export default {
  name: 'Home',
  data () {
    return {
      arr:[]
    }
  },
  created(){
    let url = "/anhao/v4/api/billboard/home"
    this.$http.get(url,{params:{__t:Date.now()}}).then(res=>{
      this.arr = res.data.data.billboards;
    });
  },
  updated(){
    new Swiper(".swiper-container", {
      autoplay: true,//可选选项，自动滑动
      loop: true,
    });
  },
  components:{
    Movies
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../../static/css/home.css";     
</style>
