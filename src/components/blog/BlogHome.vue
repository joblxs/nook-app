<template>
  <!--导航-->
  <NavBlog />
  <!--内容-->
  <div class="container-fixed" style="margin-top: 60px">
    <!--博客列表-->
    <div class="col-content">
      <ListBlog />
    </div>
    <!--右侧小组件-->
    <div class="col-other">
      <!--信息卡片-->
      <InfoCard />
      <!--热门博客-->
      <HotBlog />
    </div>
    <div style="clear: both"></div>
  </div>

  <!--底部-->
  <FooterHome />
</template>

<script>
import NavBlog from "@/components/blog/module/NavBlog.vue";
import ListBlog from "@/components/blog/module/ListBlog.vue";
import FooterHome from "@/components/module/FooterHome.vue";
import InfoCard from "@/components/blog/module/InfoCard.vue";
import HotBlog from "@/components/blog/module/HotBlog.vue";
export default {
  components: {
    NavBlog, ListBlog, FooterHome, InfoCard, HotBlog
  }
}
</script>

<style>
.header-fixed, .container-fixed {
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

.col-content {
  float: left;
  width: calc(100% - 300px - 20px);
}

.col-other {
  float: right;
  width: 300px
}

@media screen and (max-width: 1366px) {
  .header-fixed, .container-fixed {
    width: 90%
  }
}

@media screen and (max-width: 1024px) {
  .col-content, .col-other {
    width: 100%;
    float: none
  }

  .header-fixed, .container-fixed {
    width: 90%
  }
}

@media screen and (max-width: 500px) {
  .col-content, .col-other {
    padding: 0 0
  }
}
</style>