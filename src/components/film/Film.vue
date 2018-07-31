<template>
  <div class="film">
    <div class="switch">
      <span :class="{action:type=='now-playing'}" @click="switchs('now-playing')">正在热映</span>
      <span :class="{action:type=='coming-soon'}" @click="switchs('coming-soon')">即将上映</span>
    </div>
    <ul class="film-list">
      <Films v-for="item in arr" :key="item.id" :film="item" :type="type"></Films>
    </ul>
  </div>
</template>

<script>

import Films from '@/components/film/Films'

export default {
  name: 'film',
 
  data(){
    return {
      type:this.$route.params.type,
      arr:[],               //电影列表
      page:1,               //开始页数
      count:7,              //请求一次的页数
      bReady:true,          
    }
  },
  components:{
    Films,                  //电影列表组件
  },
  mounted(){                //滚动至底部时加载下一页
    window.onscroll=()=>{
      let bodyH = document.body.scrollHeight;
      let scrolT = document.documentElement.scrollTop||document.body.scrollTop;
      let clientH = document.documentElement.clientHeight;
      if(bodyH*0.8<=scrolT+clientH){
        if(this.bReady){              //判断是否加载完成
          this.page++                 //更改页数
          this.bReady=false           
          console.log(this.page)
          this.getFilms()
        }
      }
    }
  },
  methods:{
    switchs(data){          //切换电影类型
      this.type=data;
    },
    getFilms(){             //获取电影列表
      let params = {page:this.page,count:this.count};
      let url = `/anhao/v4/api/film/${this.type}`;
      this.$http.get(url,{params}).then(res=>{
        let len = res.data.data.films.length;
        if(len == 0)return;
        this.arr = this.arr.concat(res.data.data.films);
        this.bReady=true                       //加载完成
      });
    }
  },
  watch:{                   //监听type发生变化时,请求电影列表
    type: {
      handler: function () {   
        this.page=1;
        this.arr=[];
        this.getFilms();    
      },
      immediate: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../../static/css/film.css";     
</style>
