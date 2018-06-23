<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont back">&#xe604;</div>
    </router-link>
    <h6 class="cityChoose">城市选择</h6>
  </div>
</template>

<script>
  export default {
    name: 'CityHeader'
  }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/variable.styl"

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
</style>
