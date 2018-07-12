<template>
  <div>
    <city-header @change="handleChangeKeywords"></city-header>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleChangeLetter"></city-alphabet>
    <city-search-logic :cities="cities" :keywords="keywords"></city-search-logic>
  </div>
</template>

<script>
  import CityHeader from './components/CityHeader.vue';
  import CityList from './components/CityList.vue';
  import CityAlphabet from './components/CityAlphabet.vue';
  import CitySearchLogic from './components/CitySearchLogic.vue';
  export default {
    name: 'City',
    data(){
      return {
        cities: {},
        hotCities: [],
        letter: '',
        keywords: ''
      }
    },
    components: {
      CityHeader,
      CityList,
      CityAlphabet,
      CitySearchLogic
    },
    methods: {
      getCityInfo(){
        this.axios.get('../../../static/mock/city.json')
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
      },
      handleChangeKeywords(keywords){
        this.keywords = keywords
      }
    },
    mounted () {
      this.getCityInfo();
    }
  }
</script>

<style lang="stylus" scoped>

</style>
