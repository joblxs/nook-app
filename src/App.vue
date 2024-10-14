<template>
  <!--背景-->
  <object :class="`background-iframe ${theme}`" :data="backgroundIframeSrc" type="text/html"></object>

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
import {ref, onMounted } from 'vue';
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
    const backgroundIframeSrc = ref('/theme/background/BackgroundLight.html');

    // 从localStorage加载主题设置
    const loadThemeFromStorage = () => {
      const savedData = localStorage.getItem('user-theme');
      if (savedData) {
        const { theme: savedTheme, expires } = JSON.parse(savedData);
        const currentTime = new Date().getTime();
        if (savedTheme && expires && expires > currentTime) {
          applyTheme(savedTheme);
        } else {
          // 如果没有设置，或者设置已过期，则根据当前时间设置默认主题
          const currentHour = new Date().getHours();
          applyTheme(currentHour >= 6 && currentHour < 18 ? 'light' : 'dark');
        }
      } else {
        // 如果没有设置，或者设置已过期，则根据当前时间设置默认主题
        const currentHour = new Date().getHours();
        applyTheme(currentHour >= 6 && currentHour < 18 ? 'light' : 'dark');
      }
    };
    // 应用主题到页面
    const applyTheme = (newTheme) => {
      theme.value = newTheme;
      backgroundIframeSrc.value = newTheme === 'light' ? '/theme/background/BackgroundLight.html' : '/theme/background/BackgroundDark.html';

      // 移除旧的<style>元素
      const oldStyle = document.querySelector('#dynamic-theme-style');
      if (oldStyle) {
        document.head.removeChild(oldStyle);
      }
      // 添加新的<style>元素
      const styleElement = document.createElement('style');
      styleElement.id = 'dynamic-theme-style';
      styleElement.textContent = newTheme === 'light' ? lightTheme : darkTheme;
      document.head.appendChild(styleElement);

      // 保存主题设置到localStorage，并设置12小时后过期
      const expires = new Date().getTime() + 12 * 60 * 60 * 1000; // 12小时后的时间戳
      localStorage.setItem('user-theme', JSON.stringify({ theme: newTheme, expires }));
    };

    // 切换主题
    const toggleTheme = () => {
      const newTheme = theme.value === 'light' ? 'dark' : 'light';
      applyTheme(newTheme);
    };

    // 清理localStorage中的过期主题设置
    const clearExpiredThemes = () => {
      const savedData = localStorage.getItem('user-theme');
      if (savedData) {
        const { expires } = JSON.parse(savedData);
        const currentTime = new Date().getTime();
        if (expires && expires < currentTime) {
          localStorage.removeItem('user-theme');
        }
      }
    };

    // 组件卸载时清理过期主题设置
    onMounted(() => {
      loadThemeFromStorage(); // 加载主题
      clearExpiredThemes(); // 清理过期主题
    });
    return { theme, toggleTheme, backgroundIframeSrc };
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
/* 定义滚动条的宽度 */
::-webkit-scrollbar {
  width: 8px;
}
/* 定义滚动条的轨道颜色 */
::-webkit-scrollbar-track {
  background-color: var(--border-color);
}
/* 定义滚动条的滑块颜色 */
::-webkit-scrollbar-thumb {
  background-color: var(--background-color);
  transition: background-color 0.3s ease;
}
</style>
