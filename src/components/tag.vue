<template>
    <div class="tag-box">
        <el-tag
                v-for="tag in tags"
                :key="tag.name"
                :type="tag.type"
                closable
                disable-transitions
                size="small"
                @close="handleClose(tag)">
            {{tag.name}}
        </el-tag>
    </div>
</template>
<script>
export default {
  name: 'tag',
  data () {
    return {
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: '' },
        { name: '标签三', type: '' },
        { name: '标签四', type: '' },
        { name: '标签五', type: '' }
      ]
    }
  },
  methods: {
    handleClose (tag) {
      this.tags.splice(this.tags.indexOf(tag), 1)
    }
  }
}
</script>
<style lang="scss" scoped>
.tag-box{
    display: inline-block;
    .el-tag{
        margin:0 5px;
    }
}
</style>
