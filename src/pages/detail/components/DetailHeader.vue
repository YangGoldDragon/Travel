<template>
  <div class="wrapper">
    <router-link class="back" tag="div" to="/"><</router-link>
    <div class="header" v-show="showHeader" :style="opacityStyle">景点详情</div>
  </div>
</template>

<script>
  export default {
    name: 'DetailHeader',
    data(){
      return {
        showHeader: false,
        opacityStyle: {
          opacity: 0
        }
      }
    },
    methods: {
      handleShowHeader(){
        const top = document.documentElement.scrollTop;
        if(top > 60){
          this.showHeader = true;
          const opacity = top / 200;
          this.opacityStyle = {
            opacity
          }
        }else{
          this.showHeader = false;
        }
      }
    },
    activated(){
      window.addEventListener('scroll', this.handleShowHeader);
    },
    deactivated(){
      window.removeEventListener('scroll', this.handleShowHeader);
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/variable.styl";
  .wrapper
    position fixed
    top 0
    left 0
    width 100%
    height 1.2rem
    .back
      position absolute
      top 0
      bottom 0
      left .2rem
      z-index 1
      margin auto
      font-size .5rem
      border-radius 50%
      background rgba(0, 0, 0, .6)
      width .8rem
      height .8rem
      display flex
      justify-content center
      align-items center
      color white
    .header
      height 1.2rem
      background $bgColor
      color white
      font-size .34rem
      font-weight bold
      display flex
      justify-content center
      align-items center
      letter-spacing .2rem
</style>
