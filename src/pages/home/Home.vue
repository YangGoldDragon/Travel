<template>
  <div>
    <home-header></home-header>
    <vue-awesome-swiper></vue-awesome-swiper>
    <icons></icons>
  </div>
</template>

<script>
  import homeHeader from './components/HomeHeader.vue';
  import VueAwesomeSwiper from './components/VueAwesomeSwiper.vue';
  import Icons from './components/Icons.vue';

  export default {
    name: 'home',
    components: {
      homeHeader,
      VueAwesomeSwiper,
      Icons
    }
  }
</script>

<style>
</style>
