<template>
  <div>
    <city-header></city-header>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
  import CityHeader from './components/CityHeader.vue';
  import CityList from './components/CityList.vue';
  import CityAlphabet from './components/CityAlphabet.vue';
  export default {
    name: 'City',
    components: {
      CityHeader,
      CityList,
      CityAlphabet
    }
  }
</script>

<style lang="stylus" scoped>

</style>
