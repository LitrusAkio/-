<!-- 入口模板 -->
<template>
  <div id="app">
    <!-- 顶级路由出口,所有页面在这里渲染 -->
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" type="text/less">
  // 样式重置
  @import 'assets/less/reset';
  // 公共方法
  @import 'assets/less/common';
  // 通用配置
  @import 'assets/less/config';
  #nprogress{
    .bar{
      background: @nproColor;
      height: 3px;
    }
    .spinner-icon{
      border-top-color: @nproColor;
      border-left-color: @nproColor;
    }
  }
</style>
