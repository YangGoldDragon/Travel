<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in imgList" :key="item.id">
        <img :src="item.imgUrl" alt="" class="swiper-img">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'VueAwesomeSwiper',
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
        },
        imgList: [
          {
            id: '001',
            imgUrl: '//img1.qunarzz.com/qs/1806/8f/e1141f1b52114402.jpg'
          },
          {
            id: '002',
            imgUrl: '//img1.qunarzz.com/qs/1805/79/895429b453f08002.jpg'
          },
          {
            id: '001',
            imgUrl: '//img1.qunarzz.com/qs/1806/98/57120f8844f23e02.jpg'
          }
        ]
      }
    }
  }
</script>

<style  lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background white !important
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 25.6%
    background #eee
    .swiper-img
      width 100%
</style>
