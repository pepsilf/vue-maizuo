<template>
  <li class="films">
    <div class="film-item">
      <div class="left">
        <img :src="film.poster.origin"/>
      </div>
      <div class="right">
        <div class="film-name">
          {{film.name}}
          <span class="film-grade" v-if="type=='now-playing'">{{film.grade}}</span>
        </div>
        <div class="film-info">{{film.intro}}</div>
        <div class="film-counts" v-if="type=='now-playing'">{{film.scheduleCount}}家影院上映  {{film.watchCount}}人购票</div>
        <div class="film-reactid" v-if="type=='coming-soon'">{{film.premiereAt|mmdd}}上映  {{film.premiereAt|week}}</div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'films',
  props:["type","film"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../../static/css/films.css";     
</style>
