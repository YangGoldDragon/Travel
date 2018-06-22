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
    name: 'HomeVueAwesomeSwiper',
    props: ['imgList'],
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true,
          autoplay: 3000
        }
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
