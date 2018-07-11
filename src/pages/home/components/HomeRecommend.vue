<template>
  <div class="wrapper">
    <h6 class="recommend">热销推荐</h6>
    <ul class="recommend-ul">
      <li class="recommend-li border-bottom" v-for="item in recommendList" :key="item.id">
        <div class="recommend-li-left">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="recommend-li-right">
          <h6>{{item.imgTitle}}</h6>
          <p>{{item.imgDesc}}</p>
          <router-link :to="'/detail/' + item.id" tag="button">查看详情</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    props: ['recommendList'],
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
        padding .1rem
        .recommend-li-left
          flex-grow 1
          padding .05rem
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
          p
            font-size .24rem
            text-indent .2rem
            ellipsis()
            margin-top .1rem
            color gray
          button
            display block
            border none
            background #ff9300
            border-radius .06rem
            font-size .24rem
            margin-left .2rem
            margin-top .2rem
            color white
            padding .1rem .2rem
</style>
