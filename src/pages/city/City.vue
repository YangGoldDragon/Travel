<template>
  <div>
    <city-header></city-header>
    <city-list></city-list>
  </div>
</template>

<script>
  import CityHeader from './components/CityHeader.vue';
  import CityList from './components/CityList.vue';
  export default {
    name: 'City',
    components: {
      CityHeader,
      CityList
    }
  }
</script>

<style lang="stylus" scoped>

</style>
