<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <div class="currentCity">
        <h6 class="currentCity-title border-topbottom">当前城市</h6>
        <ul class="currentCity-name">
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
        </ul>
      </div>
      <div class="hotCity">
        <h6 class="hotCity-title border-topbottom">热门城市</h6>
        <ul class="hotCity-name">
          <li  v-for="item in hotCities" :key="item.id">{{item.name}}</li>
        </ul>
      </div>
      <div class="perCity">
        <ul>
          <li v-for="(item, key) in cities" :key="key" :ref="key">
            <h6 class="perCity-title border-topbottom">{{key}}</h6>
            <ul class="perCity-name">
              <li class="border-bottom" v-for="innerItem in item" :key="innerItem.id">{{innerItem.name}}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'CityList',
    props: ['cities', 'hotCities', 'letter'],
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper)
    },
    watch: {
      letter: function () {
        const ele = this.$refs[this.letter][0];
        this.scroll.scrollToElement(ele);
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/variable.styl"
  .border-topbottom
  .border-bottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .wrapper
    position absolute
    top 1.66rem
    right 0
    bottom 0
    left 0
    overflow hidden
    .currentCity
    .hotCity
    .perCity
      padding-bottom .3rem
      .currentCity-title
      .hotCity-title
      .perCity-title
        background #eee
        font-size .26rem
        color #666
        padding-left .2rem
        line-height .54rem
      .currentCity-name
      .hotCity-name
        display flex
        align-items center
        flex-wrap wrap
        li
          width 25%
          margin .3rem .2rem 0
          border .02rem solid #ccc
          font-size .28rem
          text-align center
          border-radius .06rem
          padding .1rem 0
      .perCity-name
        width 100%
        display flex
        flex-direction column
        font-size .28rem
        line-height .7rem
        li
          padding-left .2rem
          &:last-child
            &:before
              border-color: transparent
            &:after
              border-color: transparent
</style>
