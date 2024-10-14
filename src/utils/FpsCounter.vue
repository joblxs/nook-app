<template>
  <div class="fps-counter">
    <span>FPS: {{ fpsValue }}</span>
    <template v-if="fpsValue >= 60">
      <span>😎</span>
      <span style="color: #6bc30d">十分流畅</span>
    </template>
    <template v-else-if="fpsValue >= 30">
      <span>😐</span>
      <span style="color: #f8a037">还算流畅</span>
    </template>
    <template v-else>
      <span>😞</span>
      <span style="color: #cf3921">有点难受</span>
    </template>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'FpsCounter',
  setup() {
    const fpsValue = ref(0);

    let last = performance.now();
    let ticks = 0;

    const updateFps = () => {
      ticks += 1;
      if (ticks >= 10) { // 每10帧更新一次FPS值
        const now = performance.now();
        const diff = now - last;
        fpsValue.value = Math.round(1000 / (diff / ticks));
        last = now;
        ticks = 0;
      }
      requestAnimationFrame(updateFps);
    };

    onMounted(() => {
      requestAnimationFrame(updateFps);
    });

    onUnmounted(() => {
      // 组件卸载时无需清除requestAnimationFrame，因为它会在浏览器下次刷新时自动调用
    });

    return {
      fpsValue
    };
  }
};
</script>

<style scoped>
.fps-counter {
  position: fixed;
  bottom: 10px;
  left: 10px;
  background: var(--10-background-rgba);
  padding: 8px;
  border-radius: 4px;
  z-index: 1000;
  font-family: 'Arial', sans-serif;
}
</style>