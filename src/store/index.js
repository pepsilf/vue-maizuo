import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict:true,
  state:{
    showNav:false,
    listName:"首页"
  },
  mutations:{
    showMutation(state){
      state.showNav = !state.showNav;
    },
    selectMutation(state,value){
      state.listName=value;
    }
  },
  actions:{
    showAction({commit}){
      commit("showMutation");
    },
    selectAction({commit},value){
      commit("selectMutation",value);
    }, 
  },
  getters:{},
  modules:{}
})

