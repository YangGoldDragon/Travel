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
    data(){
      return {
        auto: false,
        showIndicators: false,
        iconsNumPerPage: 8,
        pagesList: [
          {
            id: '001',
            iconUnicode: '&#xe601;',
            name: '周边游'
          },
          {
            id: '002',
            iconUnicode: '&#xe62b;',
            name: '潜水'
          },
          {
            id: '003',
            iconUnicode: '&#xe60a;',
            name: '赛事'
          },
          {
            id: '004',
            iconUnicode: '&#xe6d1;',
            name: '签证'
          },
          {
            id: '005',
            iconUnicode: '&#xe679;',
            name: 'WiFi'
          },
          {
            id: '006',
            iconUnicode: '&#xe62d;',
            name: '户外'
          },
          {
            id: '007',
            iconUnicode: '&#xe66d;',
            name: '亲子游学'
          },
          {
            id: '008',
            iconUnicode: '&#xe630;',
            name: '当地游玩'
          },
          {
            id: '009',
            iconUnicode: '&#xe600;',
            name: '自驾游'
          },
        ]
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
            font-size .2rem
            color #333
            width 95%
            text-align center
            ellipsis()
</style>
