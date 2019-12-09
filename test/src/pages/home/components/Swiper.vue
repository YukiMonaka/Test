<template>
  <div class="wrapper">
    <!-- 添加v-if='list.length'解决初始化空数组导致的乱序问题 -->
    <swiper :options="swiperOption" v-if='list.length'>
      <!-- slides -->
      <!-- 将原来循环的swiperList 改成新的list数组 -->
      <swiper-slide v-for='item of list' :key='item.id'>
        <img class='swiper-img' :src='item.imgUrl' />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    // 指定props里接收list是数组
    props: {
      list: Array
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
        }
        // 删掉原来的data数据
      }
    }

  }
</script>

<style lang='stylus' scoped>
  .wrapper >>> .swiper-pagination-bullet-active
  {background: #fff;}
  
  /*实现.wrapper对.swiper-pagination-bullet-active的样式穿透*/
  .wrapper
  {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 26.66%;
  }
 
  /*.wrapper实现按比例占位*/
  .swiper-img{width: 100%;}
  
</style>
