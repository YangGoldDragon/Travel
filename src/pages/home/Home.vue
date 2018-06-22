<template>
  <div>
    <home-header></home-header>
    <home-vue-awesome-swiper></home-vue-awesome-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from './components/HomeHeader.vue';
  import HomeVueAwesomeSwiper from './components/HomeVueAwesomeSwiper.vue';
  import HomeIcons from './components/HomeIcons.vue';
  import HomeRecommend from './components/HomeRecommend.vue';
  import HomeWeekend from './components/HomeWeekend.vue';
  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeVueAwesomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    }
  }
</script>

<style>
</style>
