<template>
  <div class="wrapper">
    <ul class="alphabet">
      <li>A</li>
      <li>A</li>
      <li>A</li>
      <li>A</li>
      <li>A</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'CityAlphabet'
  }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/variable.styl"
  .wrapper
    position absolute
    top 1.66rem
    right 0
    bottom 0
    .alphabet
      height 100%
      display flex
      flex-direction column
      justify-content center
      align-items center
      li
        width .4rem
        line-height .4rem
        color $bgColor
        text-align center
        font-size .26rem
</style>
