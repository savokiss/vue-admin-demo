<template>
  <div class="index-box" style="height:100%">
      <div class="index-left">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo"
                                  @open="handleOpen"
                                  @close="handleClose"
                                  :collapse="isCollapse"
                                  vue-router>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="/">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
      </div>
      <div class="index-right">
          <div>
            <el-button type="primary" icon="el-icon-share" :label="true" @click = "isCollapseFun"></el-button>
             <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item><a href="/">我的任务</a></el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="index-right-center">
            <router-view></router-view>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  mounted () {},
  methods: {
    isCollapseFun () {
      if (this.isCollapse) {
        this.isCollapse = false
      } else {
        this.isCollapse = true
      }
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100%;
}
.index-left {
  float: left;
  z-index: 1001;
  overflow: hidden;
  height: 100%;
  transition: all 0.28s ease-out;
}
.index-right {
  min-height: 100%;
  transition: all .28s ease-out;
}
.index-right-center {
  height:640px;
  overflow-y: scroll;
}
</style>
