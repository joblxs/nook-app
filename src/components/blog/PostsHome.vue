<template>
  <!--导航-->
  <NavBlog />
  <div class="container-fixed" style="margin-top: 90px">
    <div class="col-content">
      <div id="markdown-container"></div>
    </div>
    <div style="clear: both"></div>
  </div>
  <!--底部-->
  <FooterHome />
</template>

<script>
import 'cherry-markdown/dist/cherry-markdown.css';
import Cherry from 'cherry-markdown';
import NavBlog from "@/components/blog/module/NavBlog.vue";
import FooterHome from "@/components/module/FooterHome.vue";

export default {
  components: {
    FooterHome,
    NavBlog
  },
  mounted() {
    new Cherry({
      id: 'markdown-container',
      value: '## hello world\nhello world\nhello world\nhello world\nhello world\nhello world\nhello world\nhello world\n' +
        '### 123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n123\n' +
        '#### 122344',
      engine: {
        syntax: {
          header: {
            anchorStyle: 'none', // 标题前有自增序号锚点
          },
        },
      },
      editor: {
        // 纯预览模式
        defaultModel: 'previewOnly'
      },
      toolbars: {
        toc: {
          updateLocationHash: false, // 要不要更新URL的hash
          defaultModel: 'full', // pure: 精简模式/缩略模式，只有一排小点； full: 完整模式，会展示所有标题
          showAutoNumber: false, // 是否显示自增序号
          position: 'fixed', // 悬浮目录的悬浮方式。当滚动条在cherry内部时，用absolute；当滚动条在cherry外部时，用fixed
          cssText: '', // 自定义样式
        },
      }
    });
  }
}
</script>

<style scoped>
.container-fixed {
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
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
  .container-fixed {
    width: 90%
  }
}

@media screen and (max-width: 1024px) {
  .col-content, .col-other {
    width: 100%;
    float: none
  }

  .container-fixed {
    width: 90%
  }
}

@media screen and (max-width: 500px) {
  .col-content, .col-other {
    padding: 0 0
  }
}
</style>