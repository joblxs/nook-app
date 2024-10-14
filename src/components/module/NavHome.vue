<!--导航-->
<template>
  <div class="nav">
    <lay-tooltip position="left-start" content="导航">
      <lay-backtop @click="toggleMenu" style="top:50px;" circle size="medium" bgcolor="#5FB878" iconSize="22" :showHeight="0" :icon="currentIcon" disabled></lay-backtop>
    </lay-tooltip>
    <div class="navigation" :class="{ open: !menuClosed, closed: menuClosed }" ref="navigationElement">
      <ul class="navigation-point">
        <li><a href="/">首页</a></li>
        <li><a href="/blog">博客</a></li>
      </ul>
      <div class="navigation-logo"><a href="/">Mr.li</a></div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const menuClosed = ref(true);
    const currentIcon = ref('layui-icon-shrink-right');
    const navigationElement = ref(null);

    const toggleMenu = () => {
      menuClosed.value = !menuClosed.value;
      currentIcon.value = menuClosed.value ? 'layui-icon-shrink-right' : 'layui-icon-spread-left'; // 切换图标
    };

    onMounted(() => {
      navigationElement.value = document.querySelector('.navigation');
    });

    return {
      menuClosed, toggleMenu, currentIcon, navigationElement
    };
  }
}
</script>

<style scoped>
.navigation {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 101;
  background: var(--6-background-rgba);
  transition: transform 0.3s ease-in-out;
  transform: translateX(100%); /* 初始状态为关闭 */
  opacity: 0;
  visibility: hidden;
}

.navigation:before {
  content: '';
  width: 60%;
  height: 100%;
  background: var(--10-background-rgba);
  position: fixed;
  transform: translateZ(0) translateX(45%) skew(-12deg);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  top: 0;
  z-index: 11;
  right: 0
}

.navigation.open {
  animation: slideIn 0.3s forwards;
  transform: translateX(0); /* 确保动画结束后位置正确 */
  opacity: 1; /* 确保动画结束后可见 */
  visibility: visible; /* 确保动画结束后可见 */
}

.navigation.closed {
  animation: slideOut 0.3s forwards;
  opacity: 0;
  visibility: hidden;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

.navigation-point {
  position: absolute;
  right: 0;
  top: 200px;
  z-index: 101;
  font-size: 20px
}

.navigation-point li {
  display: block;
  text-align: right;
  line-height: 80px
}

.navigation-point li a {
  display: inline-block;
  line-height: 46px;
  padding: 10px 50px;
  font-size: 20px;
  text-decoration: none;
  -webkit-transition: color .6s linear;
  transition: color .6s linear;
  position: relative;
}

.navigation-point li a:before {
  -webkit-transition: all .3s linear;
  transition: all .3s linear;
  content: '';
  height: 1px;
  background-color: transparent;
  position: absolute;
  top: 50%;
  left: 15px;
  right: 105px
}

.navigation-point li a:hover:before {
  background-color: var(--background-color);
  right: 15px
}

.navigation-logo {
  font-size: 50px;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 101;
  padding: 10px 50px
}

.navigation-logo a {
  font-family: BarbaraHand;
  text-decoration: none
}

@media screen and (max-width: 768px) {
  .navigation:before, .navigation:before {
    width: 50%;
    transform: none;
    -webkit-transform: none;
  }

  .navigation-logo {
    width: 50%;
    padding: 0;
    text-align: center;
  }
}
</style>