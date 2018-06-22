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
          <button>查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    data(){
      return {
        recommendList: [
          {
            id: '001',
            imgUrl: 'https://imgs.qunarzz.com/p/tts9/1805/ec/3a6e53b7cabdc802.jpg_180x120_9670af64.jpg',
            imgTitle: '骑行十里画廊',
            imgDesc: '骑行十里画廊！桂林阳朔+5A漓江+遇龙河+世外桃源+象鼻山+龙脊金坑梯田4日'
          },
          {
            id: '002',
            imgUrl: 'https://imgs.qunarzz.com/p/tts8/1804/3b/6094bd35f5ba6902.jpg_180x120_d1347326.jpg',
            imgTitle: '桂林上水甲天下',
            imgDesc: '桂林山水甲天下-桂林/北海/涠洲岛/北海银滩/火山岛经典刘三姐大观园双飞7天'
          },
          {
            id: '003',
            imgUrl: 'https://imgs.qunarzz.com/p/tts9/1805/ec/3a6e53b7cabdc802.jpg_180x120_9670af64.jpg',
            imgTitle: '骑行十里画廊',
            imgDesc: '骑行十里画廊！桂林阳朔+5A漓江+遇龙河+世外桃源+象鼻山+龙脊金坑梯田4日'
          },
          {
            id: '004',
            imgUrl: 'https://imgs.qunarzz.com/p/tts8/1804/3b/6094bd35f5ba6902.jpg_180x120_d1347326.jpg',
            imgTitle: '桂林上水甲天下',
            imgDesc: '桂林山水甲天下-桂林/北海/涠洲岛/北海银滩/火山岛经典刘三姐大观园双飞7天'
          }
        ]
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
            font-size .14rem
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
