<template>
  <div>
    <home-header :city="city"></home-header>
    <home-vue-awesome-swiper :imgList="imgList"></home-vue-awesome-swiper>
    <home-icons :pagesList="pagesList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from './components/HomeHeader.vue';
  import HomeVueAwesomeSwiper from './components/HomeVueAwesomeSwiper.vue';
  import HomeIcons from './components/HomeIcons.vue';
  import HomeRecommend from './components/HomeRecommend.vue';
  import HomeWeekend from './components/HomeWeekend.vue';
  import {mapState} from 'vuex';
  export default {
    name: 'Home',
    data(){
      return {
        pagesList: [],
        recommendList: [],
        imgList: [],
        weekendList: [],
        lastCity: ''
      }
    },
    components: {
      HomeHeader,
      HomeVueAwesomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    },
    methods: {
      getHomeInfo(){
        this.axios.get('/static/mock/home.json?city=' + this.city)
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res){
        if(res.data.ret && res.data.data){
          const data = res.data.data;
          this.city = data.city;
          this.pagesList = data.pagesList;
          this.recommendList = data.recommendList;
          this.imgList = data.imgList;
          this.weekendList = data.weekendList;
        }
      }
    },
    computed: {
      ...mapState(['city'])
    },
    mounted(){
      this.lastCity = this.city;
      this.getHomeInfo();
    },
    activated(){
      if(this.lastCity !== this.city){
        this.getHomeInfo();
        this.lastCity = this.city;
      }
    }
  }
</script>

<style>
</style>
