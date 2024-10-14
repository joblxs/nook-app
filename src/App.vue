<template>
  <!--背景-->
  <object class="background-iframe" data="/theme/background/BackgroundLight.html" type="text/html"></object>

  <lay-config-provider :theme="theme">
    <router-view />
  </lay-config-provider>

  <lay-tooltip position="left-start" content="返回顶部">
    <lay-backtop :bottom="140" circle size="small" bgcolor="#5FB878" iconSize="22" icon="layui-icon-top" ></lay-backtop>
  </lay-tooltip>

  <lay-tooltip position="left-start" content="切换主题">
    <lay-backtop @click="toggleTheme" :bottom="100" circle size="small" bgcolor="#5FB878" iconSize="22" :showHeight="0" :icon="theme === 'dark' ? 'layui-icon-light' : 'layui-icon-moon'" disabled></lay-backtop>
  </lay-tooltip>
</template>

<script>
import {ref} from 'vue';
import WOW from 'wow.js';
import darkTheme from '../public/theme/css/globalDark.css';
import lightTheme from '../public/theme/css/globalLight.css';

export default {
  name: 'App',
  mounted() {
    new WOW({
      boxClass: "wow", // 需要执行动画的元素的class
      animateClass: "animate__animated", // 动画的class
      offset: 0, // 触发动画的滚动偏移量
      mobile: true, // 是否在移动设备上启用
      live: true, // 是否对动态添加的元素进行动画处理
      scrollContainer: null,
      resetAnimation: true,
    }).init();
  },
  setup() {
    const theme = ref('light')
    const styleElement = document.createElement('style');
    // 切换主题
    function toggleTheme() {
      theme.value = theme.value === 'light' ? 'dark' : 'light';
      styleElement.textContent = theme.value === 'light' ? lightTheme : darkTheme;
      const backgroundIframe = document.querySelector('.background-iframe');
      backgroundIframe.data = theme.value === 'light' ? '/theme/background/BackgroundLight.html' : '/theme/background/BackgroundDark.html'
    }
    return { theme, toggleTheme };
  }
}
</script>

<style>
* {margin: 0;padding: 0}
body {
  opacity: 0.9;
  font-family:"Microsoft YaHei"
}
@font-face {
  font-family: 'BarbaraHand';
  src: url('@/assets/fonts/barbarahand-webfont.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
.background-iframe {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
}
</style>
