<template>
  <div class="wrapper" ref="wrapper" v-show="keywords">
    <div>
      <ul class="cityList">
        <li v-for="(item, index) in list" :key="index" :ref="index" class="city border-bottom">{{item}}</li>
        <li v-show="noData" class="city border-bottom">无法找到匹配城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'CitySearchLogic',
    props: ['cities', 'keywords'],
    data(){
      return {
        timer: null,
        list: []
      }
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper)
    },
    watch: {
      keywords(){
        if(this.timer){
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const result = [];
          for(let i in this.cities){
            if(this.cities.hasOwnProperty(i)){
              this.cities[i].forEach((val) => {
                if(val.spell.indexOf(this.keywords) > -1 || val.name.indexOf(this.keywords) > -1){
                  result.push(val.name);
                }
              })
            }
          }
          this.list = result;
        }, 100);
      }
    },
    computed: {
      noData(){
        return !this.list.length;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/variable.styl"
  .wrapper
    position absolute
    top 1.66rem
    right 0
    bottom 0
    left 0
    overflow hidden
    z-index 1
    background #eee
    .cityList
      background white
      .city
        color #666
        line-height .62rem
        font-size .26rem
        padding-left .2rem
</style>
