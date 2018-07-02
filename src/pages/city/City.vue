<template>
  <div>
    <city-header></city-header>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleChangeLetter"></city-alphabet>
  </div>
</template>

<script>
  import CityHeader from './components/CityHeader.vue';
  import CityList from './components/CityList.vue';
  import CityAlphabet from './components/CityAlphabet.vue';

  export default {
    name: 'City',
    data(){
      return {
        cities: {},
        hotCities: [],
        letter: ''
      }
    },
    components: {
      CityHeader,
      CityList,
      CityAlphabet
    },
    methods: {
      getCityInfo(){
        this.axios.get('./../../static/mock/city.json')
          .then(this.getCityInfoSucc)
      },
      getCityInfoSucc(res){
        if(res.data.ret && res.data.data){
          const data = res.data.data;
          this.cities = data.cities;
          this.hotCities = data.hotCities;
        }
      },
      handleChangeLetter(letter){
        this.letter = letter
      }
    },
    mounted () {
      this.getCityInfo();
    }
  }
</script>

<style lang="stylus" scoped>

</style>
