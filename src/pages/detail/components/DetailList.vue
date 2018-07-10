<template>
  <div class="wrapper">
    <div class="list" v-for="(item, index) in list.item" :key="index">
      <div class="listItem border-bottom">
        <span class="iconfont itemIcon">&#xe654;</span>
        <span class="itemTitle">{{item.title}}</span>
      </div>
      <div v-if="item.children" class="itemChildren">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailList',
    props: ['list']
  }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/variable.styl"
  .wrapper
    .list
      .listItem
        .itemIcon
          color $bgColor
          line-height .8rem
          font-size .4rem
          padding 0 0 0 .2rem
        .itemTitle
          font-size .3rem
          font-weight bolder
      .itemChildren
        padding 0 0 0 .2rem
</style>
