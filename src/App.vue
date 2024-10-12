<template>
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
    // 切换主题
    function toggleTheme() {
      theme.value = theme.value === 'light' ? 'dark' : 'light';
    }
    return { theme, toggleTheme };
  }
}
</script>

<style>
</style>
