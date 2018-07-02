
<!-- 这是示例文件,不要随意改动 -->
<template>
  <div class="test-page">
    <div>
      <!-- 轮播图 -->
      <swiper :options="swiperOption">
        <swiper-slide><img src="../assets/images/banner.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/images/banner.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/images/banner.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/images/banner.jpg"></swiper-slide>
        <swiper-slide><img src="../assets/images/banner.jpg"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
// 调用swiper方法和样式
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'Test',
  // 定义data属性
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
  },
  // 计算属性
  computed: {
  },
  // 定义方法
  methods: {
  },
  // 注册组件
  components: { swiper, swiperSlide }
}
</script>

<style scoped lang="less" type="text/less">
  .test-page{
  }
</style>
