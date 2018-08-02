<template>
  <div class="index-box" style="height:100%">
      <div class="index-left">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo"
                                  @open="handleOpen"
                                  @close="handleClose"
                                  :collapse="isCollapse"
                                  vue-router>
        <el-menu-item index="/">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">任务</span>
            <el-menu-item index="/task">选项1</el-menu-item>
            <el-menu-item index="/">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="/task">
            <span slot="title">选项4</span>
            <el-menu-item index="/task">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
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
            <el-button type="text" icon="el-icon-menu" :label="true" @click = "isCollapseFun"></el-button>
            <Tag></Tag>
          </div>
          <div class="index-right-center">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item><a href="/task">我的任务</a></el-breadcrumb-item>
            </el-breadcrumb>
            <router-view></router-view>
          </div>
      </div>
  </div>
</template>
<script>
import Tag from '../../components/tag.vue'
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  components: {
    Tag
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
