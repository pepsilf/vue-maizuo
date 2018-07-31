import Vue from "vue";
//12月31日
Vue.filter("mmdd",function(str){
    let oDate = new Date(str);
    return `${oDate.getMonth()+1}月${oDate.getDate()}日`;
});

//星期一
Vue.filter("week",function(str){
    let oDate = new Date(str);
    return "星期"+"日一二三四五六".charAt(oDate.getDay());
});
