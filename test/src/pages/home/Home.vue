<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-hot></home-hot>
    <home-liked></home-liked>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeHot from './components/Hot'
  import HomeLiked from './components/Like'
  import HomeWeekend from './components/Weekend'
  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeHot,
      HomeLiked,
      HomeWeekend
    }
  }
</script>

<style scoped>
</style>

