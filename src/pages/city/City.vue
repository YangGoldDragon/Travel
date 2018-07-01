<template>
  <div>
    <city-header></city-header>
    <city-list :cities="cities" :hotCities="hotCities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>
  import CityHeader from './components/CityHeader.vue';
  import CityList from './components/CityList.vue';
  import CityAlphabet from './components/CityAlphabet.vue';
  import axios from 'axios';

  export default {
    name: 'City',
    data(){
      return {
        cities: {},
        hotCities: []
      }
    },
    components: {
      CityHeader,
      CityList,
      CityAlphabet
    },
    methods: {
      getCityInfo(){
        axios.get('./../../static/mock/city.json')
          .then(this.getCityInfoSucc)
      },
      getCityInfoSucc(res){
        if(res.data.ret && res.data.data){
          const data = res.data.data;
          this.cities = data.cities;
          this.hotCities = data.hotCities;
        }
      }
    },
    mounted () {
      this.getCityInfo();
    }
  }
</script>

<style lang="stylus" scoped>

</style>
