<template>
  <div id="markdown-container" ></div>
</template>

<script>
import 'cherry-markdown/dist/cherry-markdown.css';
import Cherry from 'cherry-markdown';

export default {
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

</style>