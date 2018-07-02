<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont icon-back">&#xe604;</span>
    </div>
    <div class="header-middle">
      <input type="text" placeholder="输入城市/景点/游玩主题">
      <span class="iconfont icon-search">&#xe7cd;</span>
    </div>
    <router-link to="/city">
      <div class="header-right">
        <span class="city">{{this.city}}<!--也可以使用this.$store.state.city--></span>
        <span class="iconfont icon-city">&#xe617;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    name: 'HomeHeader',
    computed: {
      ...mapState({
        city: 'city'
      })
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/variable.styl"
  .header
    display flex
    align-items center
    height .86rem
    background-color $bgColor
    color white
    .header-left
      width 1rem
      display flex
      justify-content center
      align-items center
      .icon-back
        font-size $iconBackFontsize
    .header-middle
      position relative
      flex-grow 1
      height 75%
      color darkgray
      display flex
      input
        flex-grow 1
        border-radius .1rem
        height 100%
        padding-left .72rem
        font-size .28rem
      .icon-search
        position absolute
        top 0
        bottom 0
        left .12rem
        margin auto
        height 100%
        font-size .48rem
        display flex
        justify-content center
        align-items center
    .header-right
      min-width 1.2rem
      height 100%
      display flex
      justify-content center
      align-items center
      color white
      padding 0 .15rem
      .city
        font-size .32rem
      .icon-city
        font-size .36rem
        padding-left .06rem
        padding-top .08rem
</style>
