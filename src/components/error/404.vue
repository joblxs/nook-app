<template>
  <div id="container">
    <div id="sun"></div>
    <div class="orbit" id="earth-orbit">
      <div class="globe" id="earth">
        <div class="orbit" id="moon-orbit">
          <div class="globe" id="moon"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
body {
  background-color: var(--7-background-rgba);
  height: 100vh;
}

#container {
  height: 400px;
  left: calc(50% - 200px);
  position: absolute;
  top: calc(50% - 200px);
  width: 400px;
}
#container #sun {
  background-color: yellow;
  border-radius: 50%;
  -webkit-box-shadow: 0 0 30px white;
  box-shadow: 0 0 30px white;
  height: 100px;
  left: 150px;
  position: absolute;
  top: 150px;
  width: 100px;
}
#container .orbit {
  border: solid;
  border-color: white transparent transparent transparent;
  border-radius: 50%;
  border-width: 1px 1px 0 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transform-origin: center;
  transform-origin: center;
}
#container .orbit#earth-orbit {
  -webkit-animation: orbit 36.5s linear infinite;
  animation: orbit 36.5s linear infinite;
  height: 300px;
  left: 50px;
  top: 50px;
  width: 300px;
}
#container .orbit#moon-orbit {
  -webkit-animation: orbit 2.7s linear infinite;
  animation: orbit 2.7s linear infinite;
  height: 80px;
  left: -25px;
  top: -25px;
  width: 80px;
}
#container .orbit .globe {
  border-radius: 50%;
  position: absolute;
}
#container .orbit .globe#earth {
  background: aqua;
  height: 30px;
  right: 28px;
  top: 28px;
  width: 30px;
}
#container .orbit .globe#moon {
  background: #d6d6d6;
  height: 12px;
  right: 2px;
  top: 8px;
  width: 12px;
}

@-webkit-keyframes orbit {
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes orbit {
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>