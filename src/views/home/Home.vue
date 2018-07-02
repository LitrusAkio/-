
<!-- 首页 -->
<template>
  <div class="home-page">
    <!-- 这里使用头部 -->
    <home-header></home-header>
    <!-- 轮播图 -->
    <swiper :options="swiperOption">
      <swiper-slide><img src="../../assets/images/banner.jpg"></swiper-slide>
      <swiper-slide><img src="../../assets/images/banner.jpg"></swiper-slide>
      <swiper-slide><img src="../../assets/images/banner.jpg"></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// 调用swiper方法和样式
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 调用头部组件
import homeHeader from '@/components/HomeHeader'
export default {
  name: 'HomeHeader',
  // 注册头部组件
  components: {homeHeader, swiper, swiperSlide},
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: false,
        spaceBetween: 5
      }
    }
  }
}
</script>

<style scoped lang="less" type="text/less">
</style>
