<template>
  <div>
    <home-header></home-header>
    <vue-awesome-swiper></vue-awesome-swiper>
  </div>
</template>

<script>
  import homeHeader from './components/HomeHeader.vue';
  import VueAwesomeSwiper from './components/VueAwesomeSwiper.vue';
  export default {
    name: 'home',
    components: {
      homeHeader,
      VueAwesomeSwiper
    }
  }
</script>

<style>
</style>
