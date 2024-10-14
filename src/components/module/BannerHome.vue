<template>
  <div class="banner">
    <div class="nav wow animate__animated animate__bounceIn" data-wow-duration="2s">
      <h1>lxs-Blog</h1>
      <p>只要朝着一个方向努力，一切都会变得得心应手</p>
    </div>
    <lay-icon type="layui-icon-down" class="next wow animate__animated animate__zoomIn" data-wow-duration="2s" @click="scrollToNextSection"></lay-icon>
  </div>
</template>

<script>
export default {
  setup() {
    const scrollToNextSection = () => {
      // 滚动到第二屏的位置
      const nextSectionPosition = window.innerHeight;
      window.scrollTo({
        top: nextSectionPosition,
        behavior: 'smooth'
      });
    }
    return {
      scrollToNextSection
    }
  }
}
</script>

<style scoped>
.banner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: var(--5-background-rgba);
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

.nav {
  text-align: center;
  margin: 0 auto;
  max-width: 800px;
}

.nav h1 {
  font-size: 2.5rem;
}

.nav p {
  font-size: 1rem;
  letter-spacing: 0.5rem;
  margin: 1rem 0;
}

.next {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  transition: all .5s ease-out;
  cursor: pointer;
}

.next:hover {
  background-color: var(--background-color);
}

.next:before {
  font-size: 3rem;
  display: table;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .nav h1 {
    font-size: 2rem;
  }

  .nav p {
    font-size: 0.9rem;
    letter-spacing: 0.3rem;
  }
}

@media (max-width: 480px) {
  .nav h1 {
    font-size: 1.5rem;
  }

  .nav p {
    font-size: 0.8rem;
    letter-spacing: 0.2rem;
  }
}
</style>