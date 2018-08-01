<template>
    <el-tag closable>
    1
    </el-tag>
    <!-- v-for="(tag, index) in tags" :key="tag.name" :type="tag.type" -->
</template>
<script>
export default {
  name: 'tag',
  data () {
    return {
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' }
      ]
    }
  }
}
</script>
