<script lang="ts" setup>
import { isElectronMode } from '@/utils/electron'
</script>

<template>
  <div id="logo-name" v-if="!isElectronMode()">Chat Room</div>

  <section class="section">
    <router-view />
  </section>

  <div class="copyright">
    <span>©2022 - 2026 </span> <br/>
    <span>管理账号：15511112222</span> <br/>
    <span>管理邮箱：diwangkeji#outlook.com</span> <br/>
    <span><a href="http://service.queryip.top/guifan.html" target="_blank">社区规范</a></span>
  </div>

  <div class="fly-box">
    <div class="fly bg-fly-circle1"></div>
    <div class="fly bg-fly-circle2"></div>
    <div class="fly bg-fly-circle3"></div>
    <div class="fly bg-fly-circle4"></div>
  </div>
</template>

<style lang="less" scoped>
body {
  -webkit-app-region: drag;
}

@import '@/assets/css/login.less';

.section {
  height: 100vh;
  width: 100vw;
}
</style>
