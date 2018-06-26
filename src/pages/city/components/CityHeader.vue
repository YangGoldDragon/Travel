<template>
  <div class="wrapper">
    <div class="header">
      <router-link to="/">
        <div class="iconfont back">&#xe604;</div>
      </router-link>
      <h6 class="cityChoose">城市选择</h6>
    </div>
    <input type="text" class="cityEnter" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
  export default {
    name: 'CityHeader'
  }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/variable.styl"
  .wrapper
    background $bgColor
    padding-bottom .2rem
    .header
      height .86rem
      background $bgColor
      color white
      font-size .36rem
      position relative
      .back
        color white
        font-size $iconBackFontsize
        position absolute
        left .15rem
        height 100%
        line-height .86rem
      .cityChoose
        height 100%
        display flex
        justify-content center
        align-items center
        font-weight bolder
    .cityEnter
      display block
      width 95%
      border-radius .05rem
      text-align center
      height .6rem
      line-height .6rem
      font-size .28rem
      margin 0 auto;
</style>
