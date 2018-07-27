<template>
  <div class="nav">
    <el-menu :default-active="activeIndex"
              router
              class="el-menu-demo content"
              mode="horizontal"
              @select="handleSelect"
              text-color="#333"
              active-text-color="#000">
      <el-submenu index="">
        <template slot="title">我的工作台</template>
        <el-menu-item index="/task">任务</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="about">消息处理中心</el-menu-item>
      <el-menu-item index="/">消息</el-menu-item>
      <el-menu-item index="4"><a href="#" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped lang="scss">
  .nav{
    font-size: 20px;
    .content{
      width: 1170px;
      padding-left: 15px;
      padding-right: 15px;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      border-top: 1px solid #eee;
      border-bottom: none;
      background: #fff;
    }
  }
</style>
