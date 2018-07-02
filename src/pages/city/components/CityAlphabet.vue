<template>
  <div class="wrapper">
    <ul class="alphabet">
      <li v-for="(value, key) in cities"
          :key="key"
          :ref="key"
          @click="handleClickLetter"
          @touchstart="handleTouchstart"
          @touchmove="handleTouchmove"
          @touchend="handleTouchend"
      >{{key}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'CityAlphabet',
    props: ['cities'],
    data(){
      return {
        touchStatus: false,
        startY: 0,
        timer: null
      }
    },
    updated(){
      this.startY = this.$refs['A'][0].offsetTop + 83;
    },
    methods: {
      handleClickLetter(e){
        this.$emit('change', e.target.innerText);
      },
      handleTouchstart(){
        this.touchStatus = true;
      },
      handleTouchmove(e){
        if(this.touchStatus){
          if(this.timer){
            clearTimeout(this.timer);
          }
          this.timer = setTimeout(() => {
            const moveY = e.touches[0].clientY;
            const index = Math.floor((moveY - this.startY) / 20);
            if(index >= 0 && index < this.letters.length){
              this.$emit('change', this.letters[index]);
            }
          }, 16)
        }
      },
      handleTouchend(){
        this.touchStatus = false;
      }
    },
    computed: {
      letters(){
        const letters = [];
        for(let i in this.cities){
          if(this.cities.hasOwnProperty(i)){
            letters.push(i);
          }
        }
        return letters;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/variable.styl"
  .wrapper
    position absolute
    top 1.66rem
    right 0
    bottom 0
    .alphabet
      height 100%
      display flex
      flex-direction column
      justify-content center
      align-items center
      li
        width .4rem
        line-height .4rem
        color $bgColor
        text-align center
        font-size .26rem
</style>
