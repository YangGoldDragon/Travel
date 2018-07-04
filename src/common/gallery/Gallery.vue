<template>
  <div class="wrapper" @click="handleGalleryClick">
    <div class="gallery">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(value, index) in imgList" :key="index">
          <img :src="value" alt="" class="galleryImg">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Gallery',
    props: ['imgList'],
    data(){
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType : 'fraction',
          observer:true,
          observeParents:true,
        }
      }
    },
    methods: {
      handleGalleryClick(){
        this.$emit('closeGallery');
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-container
    overflow inherit
  .wrapper
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    z-index 99
    background #000
    display flex
    justify-content center
    align-items center
    .gallery
      width 100%
      height 0
      padding-bottom 56%
      position relative
      .galleryImg
        width 100%
      .swiper-pagination
        font-size .26rem
        color white
        bottom -1rem
</style>
