<template>
  <div class="wrapper">
    <div class="banner" @click="handleBannerClick">
      <img src="https://youimg1.c-ctrip.com/target/10020q000000gbtn63B1F_R_640_10000_Q90.png" alt="" class="bannerImg">
      <h6 class="leftArea">大连圣亚海洋世界（AAAA景区）</h6>
      <div class="rightArea">
        <span class="iconfont">&#xe63b;</span>
        <span class="imgNumber">3</span>
      </div>
    </div>
    <animation-fade>
      <gallery v-show="showGallery" @closeGallery="handleCloseGallery" :imgList="imgList"></gallery>
    </animation-fade>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
  import Gallery from '../../common/gallery/Gallery.vue';
  import DetailHeader from './components/DetailHeader.vue';
  import DetailList from './components/DetailList.vue';
  import AnimationFade from './../../common/animation/Fade.vue';
  export default {
    name: 'Detail',
    data(){
      return{
        showGallery: false,
        imgList: [
          'https://dimg04.c-ctrip.com/images/30060j000000avqxv0263_C_500_280_Q90.jpg',
          'https://dimg04.c-ctrip.com/images/30030j000000ay4gkAA39_C_500_280_Q90.jpg',
          'https://dimg04.c-ctrip.com/images/300c0j000000axbkw2F3F_C_500_280_Q90.jpg'
        ],
        list: null
      }
    },
    components: {
      Gallery,
      DetailHeader,
      DetailList,
      AnimationFade
    },
    methods: {
      handleBannerClick(){
        this.showGallery = true;
      },
      handleCloseGallery(){
        this.showGallery = false;
      },
      getDetailInfo(){
        this.axios.get('./../../static/mock/detail.json', {
          params: {
            id: this.$route.params.id
          }
        })
          .then(this.getDetailInfoSucc)
      },
      getDetailInfoSucc(res){
        res = res.data;
        if(res.ret && res.data){
          this.list = res.data.list;
        }
      }
    },
    mounted(){
      this.getDetailInfo();
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper
    .content
      height 1000px
    .banner
      position relative
      display block
      overflow hidden
      width 100%
      height 0
      padding-bottom 66.6%
      .bannerImg
        display block
        width 100%
        background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8));
      .leftArea
        position absolute
        left .2rem
        bottom .3rem
        font-size .3rem
        color white
        font-weight bold
      .rightArea
        position absolute
        right .2rem
        bottom .2rem
        background rgba(0, 0, 0, .8);
        border-radius .3rem
        height .32rem
        line-height .32rem
        font-size .26rem
        color white
        padding .1rem .3rem
        .imgNumber
          color white
</style>

