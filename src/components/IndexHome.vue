<template>
  <NavHome />
  <!--横幅-->
  <BannerHome />
  <!--站点-->
  <StationHome />
  <!--一言-->
  <HitokotoHome />
  <!--底部-->
  <FooterHome />
</template>

<script>
import NavHome from "@/components/module/NavHome.vue";
import BannerHome from "@/components/module/BannerHome.vue";
import StationHome from "@/components/module/StationHome.vue";
import HitokotoHome from "@/components/module/HitokotoHome.vue";
import FooterHome from "@/components/module/FooterHome.vue";

export default {
  components: {
    NavHome, BannerHome, StationHome, HitokotoHome, FooterHome
  },
  mounted() {
    document.title = '主页';
    document.querySelector('meta[name="keywords"]').setAttribute('content', '主页，个人网站，好看的个人主页');
    document.querySelector('meta[name="description"]').setAttribute('content', '个人主页搭建');
  }
}
</script>

<style scoped>

</style>
