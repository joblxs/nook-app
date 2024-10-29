<template>
  <object class="background-iframe" :data="backgroundIframeSrc" type="text/html" v-if="showBackground"></object>

  <lay-tooltip position="left-start" content="切换主题">
    <lay-backtop @click="toggleTheme" :bottom="150" circle size="small" bgcolor="#5FB878" iconSize="22" :showHeight="0" :icon="theme === 'dark' ? 'layui-icon-light' : 'layui-icon-moon'" disabled></lay-backtop>
  </lay-tooltip>

  <lay-tooltip position="left-start" :content="showBackground ? '关闭背景' : '打开背景'">
    <lay-backtop @click="toggleBackground" :bottom="100" circle size="small" bgcolor="#5FB878" iconSize="22" :showHeight="0" :icon="showBackground ? 'layui-icon-eye-invisible' : 'layui-icon-eye'" disabled></lay-backtop>
  </lay-tooltip>
</template>

<script>
import {ref, onMounted} from 'vue';

export default {
  setup() {
    const theme = ref('light')
    const backgroundIframeSrc = ref('/theme/background/Background-light.html');
    const showBackground = ref(true);

    // 应用主题到页面
    const applyTheme = (newTheme, newShow) => {
      theme.value = newTheme;
      showBackground.value = newShow;
      // 切换背景
      backgroundIframeSrc.value = `/theme/background/Background-${newTheme}.html`;

      // 移除旧的<style>元素
      const currentLink = document.getElementById('dynamic-theme');
      if (currentLink) {
        document.head.removeChild(currentLink);
      }
      const link = document.createElement('link');
      link.id = 'dynamic-theme';
      link.rel = 'stylesheet';
      link.href = `/theme/css/${newTheme}.css`;
      document.head.appendChild(link);

      // 保存主题设置到localStorage，并设置12小时后过期
      const expires = new Date().getTime() + 12 * 60 * 60 * 1000; // 12小时后的时间戳
      localStorage.setItem('user-theme', JSON.stringify({ theme: newTheme, showBackground: newShow, expires }));
    };

    // 从localStorage加载主题设置
    const loadThemeFromStorage = () => {
      const savedData = localStorage.getItem('user-theme');
      if (savedData) {
        const { theme: savedTheme, showBackground: savedShow, expires } = JSON.parse(savedData);
        const currentTime = new Date().getTime();
        if (savedTheme && expires && expires > currentTime) {
          applyTheme(savedTheme, savedShow);
        } else {
          localStorage.removeItem('user-theme'); // 清理过期的主题设置
          applyDefaultTheme();
        }
      } else {
        applyDefaultTheme();
      }
    };

    // 应用默认主题
    const applyDefaultTheme = () => {
      const currentHour = new Date().getHours();
      applyTheme(currentHour >= 6 && currentHour < 18 ? 'light' : 'dark', showBackground.value);
    };

    // 切换主题
    const toggleTheme = () => {
      const newTheme = theme.value === 'light' ? 'dark' : 'light';
      applyTheme(newTheme, showBackground.value);
    };
    // 打开/关闭背景
    const toggleBackground = () => {
      const newShowBackground = !showBackground.value;
      applyTheme(theme.value, newShowBackground);
    };
    // 组件卸载时清理过期主题设置
    onMounted(() => {
      loadThemeFromStorage(); // 加载主题
    });
    return { theme, toggleTheme, backgroundIframeSrc, showBackground, toggleBackground };
  }
}

</script>

<style scoped>

</style>