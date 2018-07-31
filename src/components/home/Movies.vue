<template>
  <div class="movie">
    <ul class="film-list">
      <li v-for="item in arr" class="film-item">
        <img :src="item.cover.origin"/>
        <div class="film-info">
          <div class="film-left">
            <div class="film-name">{{item.name}}</div>
            <div class="film-nums" v-if="type=='now-playing'">{{item.cinemaCount}}家影院上映 {{item.watchCount}}人购票</div>
          </div>
          <div v-if="type=='now-playing'" class="film-grade">{{item.grade}}</div>
          <div v-else  class="film-day">{{item.premiereAt|mmdd}}</div>
        </div>
      </li>
      <router-link tag="div" class="more-button" :to="{name:'Film',params:{type}}">{{more_button}}</router-link>
    </ul>
    
  </div>
</template>

<script>

export default {
  name: 'movies',
  props:["type"],
  data () {
    return {
      arr:[],
    }
  },
  created(){
    //https://m.maizuo.com/v4/api/film/now-playing?__t=1530599814576&page=1&count=5
    //https://m.maizuo.com/v4/api/film/coming-soon?__t=1530599814582&page=1&count=3
    let params = {__t:Date.now(),page:1,count:5};
    let url = `/anhao/v4/api/film/${this.type}`;
    this.$http.get(url,{params}).then(res=>{
      this.arr = res.data.data.films;
      console.log(this.arr)
    });
  },
  computed:{
    more_button(){
      return this.type=="now-playing"?"更多热映电影":"更多即将上映电影";
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../../static/css/movie.css";     
</style>
