<template>
  <div class="wrapper">
    <mt-swipe :auto="auto" class="mint-swipe" :show-indicators="showIndicators">
      <mt-swipe-item class="swipe-item" v-for="(page, index) in pages" :key="index">
        <ul class="iconsPerPage">
          <li class="iconfont" v-for="icon in page" :key="icon.id">
            <span v-html="icon.iconUnicode" class="icon"></span>
            <span class="iconName">{{icon.name}}</span>
          </li>
        </ul>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui';

  export default {
    name: 'HomeIcons',
    props: ['pagesList'],
    data(){
      return {
        auto: false,
        showIndicators: false,
        iconsNumPerPage: 8
      }
    },
    components: {
      'mt-swipe': Swipe,
      'mt-swipe-item': SwipeItem
    },
    computed: {
      pages: function () {
        let pages = [];
        for(let i = 0; i < this.pagesList.length; i++){
          let page = Math.floor(i / this.iconsNumPerPage);
          if(!pages[page]){
            pages[page] = [];
          }
          pages[page].push(this.pagesList[i]);
        }
        return pages;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/variable.styl"
  @import "../../../assets/styles/mixins.styl"

  .wrapper >>> .mint-swipe-indicators .is-active
    background white
  .mint-swipe
    display block
    width 100%
    height 3rem
    .swipe-item
      .iconsPerPage
        width 100%
        height 100%
        display flex
        justify-content flex-start
        align-items center
        flex-wrap wrap
        .iconfont
          width 25%
          color $bgColor
          display flex
          flex-direction column
          align-items center
          font-size .5rem
          .iconName
            display block
            padding-top .15rem
            font-size .26rem
            color #333
            width 95%
            text-align center
            ellipsis()
</style>
