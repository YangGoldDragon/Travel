<template>
  <div class="wrapper">
    <h6 class="recommend">周末去哪儿</h6>
    <ul class="recommend-ul">
      <li class="recommend-li" v-for="item in weekendList" :key="item.id">
        <div class="recommend-li-left">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="recommend-li-right">
          <h6>{{item.imgTitle}}</h6>
          <p>{{item.imgDesc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeWeekend',
    props: ['weekendList'],
    data(){
      return {

      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/mixins.styl"
  .wrapper
    .recommend
      height .7rem
      background #eee
      font-size .28rem
      font-weight bolder
      color #333
      text-indent .28rem
      line-height .7rem
    .recommend-ul
      display flex
      flex-direction column
      width 100%
      overflow hidden
      .recommend-li
        width 100%
        display flex
        flex-direction column
        padding-bottom .2rem
        .recommend-li-left
          flex-grow 1
          overflow hidden
          height 0
          padding-bottom 33%
          img
            display block
            width 100%
        .recommend-li-right
          flex-grow 3
          min-width 0
          h6
            font-size .3rem
            font-weight bolder
            text-indent .2rem
            padding .05rem 0
            ellipsis()
            margin-top .1rem
          p
            font-size .14rem
            text-indent .2rem
            ellipsis()
            margin-top .1rem
            color gray
            line-height 1.5
</style>
