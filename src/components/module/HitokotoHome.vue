<template>
  <div class="section">
    <!--当前时间-->
    <!--        <div class="clock">-->
    <!--            <p class="date">{{ date }}</p>-->
    <!--            <p class="time">{{ time }}</p>-->
    <!--        </div>-->
    <div class="hitokoto wow animate__animated animate__jello">
      <h1>lxs个人博客</h1>
      <p>
        一天很短，开心了就笑，不开心了就过会儿再笑。
      </p>
    </div>
  </div>
</template>

<script>
import {ref, onMounted, onUnmounted} from 'vue';

export default {
  setup() {
    const time = ref('');
    const date = ref('');

    const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

    function updateTime() {
      const cd = new Date();
      time.value = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
      date.value = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth() + 1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
    }

    function zeroPadding(num, digit) {
      return num.toString().padStart(digit, '0');
    }

    let timerID;
    onMounted(() => {
      updateTime();
      timerID = setInterval(updateTime, 1000);
    });

    onUnmounted(() => {
      clearInterval(timerID);
    });

    return {
      time, date
    };
  }
}
</script>

<style scoped>
.section {
  width: 100%;
  padding: 100px 0;
  background-color: var(--5-background-rgba);
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

.hitokoto {
  text-align: center;
  margin: 0 auto;
  max-width: 800px;
}

.hitokoto h1 {
  font-size: 2.5rem;
}

.hitokoto p {
  font-size: 1rem;
  letter-spacing: 0.5rem;
  margin: 1rem 0;
}

.clock {
  margin-bottom: 20px;
  text-align: center;
  text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
}

.clock .time {
  letter-spacing: 0.05em;
  font-size: 80px;
  padding: 5px 0;
}

.clock .date {
  letter-spacing: 0.1em;
  font-size: 24px;
}

@media (max-width: 768px) {
  .hitokoto h1 {
    font-size: 2rem;
  }

  .hitokoto p {
    font-size: 0.9rem;
    letter-spacing: 0.3rem;
  }
}

@media (max-width: 480px) {
  .hitokoto h1 {
    font-size: 1.5rem;
  }

  .hitokoto p {
    font-size: 0.8rem;
    letter-spacing: 0.2rem;
  }
}
</style>