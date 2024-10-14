<template>
  <!--导航-->
  <NavBlog />

  <FooterHome />
</template>

<script>
import NavBlog from "@/components/blog/module/NavBlog.vue";
import FooterHome from "@/components/module/FooterHome.vue";
export default {
  components: {
    NavBlog, FooterHome
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
  width: calc(100% - 300px - 20px)
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