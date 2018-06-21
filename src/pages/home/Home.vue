<template>
  <div>
    <home-header></home-header>
    <vue-awesome-swiper></vue-awesome-swiper>
    <icons></icons>
    <recommend></recommend>
  </div>
</template>

<script>
  import HomeHeader from './components/HomeHeader.vue';
  import HomeVueAwesomeSwiper from './components/HomeVueAwesomeSwiper.vue';
  import HomeIcons from './components/HomeIcons.vue';
  import HomeRecommend from './components/HomeRecommend.vue';

  export default {
    name: 'home',
    components: {
      HomeHeader,
      HomeVueAwesomeSwiper,
      HomeIcons,
      HomeRecommend
    }
  }
</script>

<style>
</style>
