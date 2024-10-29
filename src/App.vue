<template>
  <FpsCounter />
  <!--主题-->
  <ThemeSwitcher ref="themeSwitcher" />

  <lay-config-provider :theme="themeSwitcher.theme">
    <keep-alive>
      <router-view />
    </keep-alive>
  </lay-config-provider>

  <lay-tooltip position="left-start" content="返回顶部">
    <lay-backtop :bottom="200" circle size="small" bgcolor="#5FB878" iconSize="22" icon="layui-icon-top" ></lay-backtop>
  </lay-tooltip>
</template>

<script>
import {ref } from 'vue';
import WOW from 'wow.js';
import FpsCounter from './utils/FpsCounter.vue'
import ThemeSwitcher from "@/utils/ThemeSwitcher.vue";

export default {
  name: 'App',
  components: {
    ThemeSwitcher,
    FpsCounter
  },
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
    const themeSwitcher  = ref('null')
    return { themeSwitcher };
  }
}
// 使用防抖函数（debounce）来延迟处理 ResizeObserver 的回调函数，以避免频繁触发重排（reflow）或重绘（repaint）
const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
const _ResizeObserver = window.ResizeObserver;
window.ResizeObserver = class ResizeObserver extends _ResizeObserver {
  constructor(callback) {
    callback = debounce(callback, 200);
    super(callback);
  }
};
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
/* 定义滚动条的宽度 */
::-webkit-scrollbar {
  width: 8px;
}
/* 定义滚动条的轨道颜色 */
::-webkit-scrollbar-track {
  background-color: var(--border-color);
}
/* 定义滚动条的滑块颜色 */
::-webkit-scrollbar-thumb, ::-webkit-scrollbar-thumb:hover {
  background-color: var(--background-color);
  transition: background-color 0.3s ease;
  cursor: pointer;
  border-radius: 20%;
}
</style>
