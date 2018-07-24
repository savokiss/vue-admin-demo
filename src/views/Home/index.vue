<template>
  <div class="index">
    <div class="container">
      <header class="header">
        <div>
          <img src="http://qty83k.creatby.com/materials/origin/b83026d03c9761d8fd6cab59d39be219_origin.png" alt="">
          <div>
            <h4></h4>
          </div>
          <div>
            <p></p>
          </div>
        </div>
      </header>
      <div class="sidebar" :class="{ fixedBar: isFixed }">
            <navBar></navBar>
      </div>
      <div class="main" :style="{ marginTop: marginTop }">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from '@/components/navBar.vue'
export default {
  name: 'index',
  data () {
    return {
      isFixed: false, // navbar浮动
      offsetTop: 0, // 触发navbar浮动的阈值
      marginTop: 0
    }
  },
  components: {
    navBar: navBar
  },
  mounted () {
    // 设置初始的 padding-bottom 值为 footer 的高度 +20 防止数据列表拉到最下面被footer挡住 +多少自定
    // this.paddingBottom = document.querySelector('.footer').offsetHeight + 20 + 'px'
    // 设置bar浮动阈值为 .sidebar 至页面顶部的距离
    this.offsetTop = document.querySelector('.sidebar').offsetTop
    // 开启滚动监听
    console.dir(document.querySelector('.sidebar'))
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    // 滚动监听  滚动触发的效果写在这里
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop >= this.offsetTop) {
        this.isFixed = true
        this.marginTop = document.querySelector('.sidebar').offsetHeight + 'px'
      } else {
        this.isFixed = false
        this.marginTop = 0
      }
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll) // 离开页面 关闭监听 不然会报错
  }
}
</script>

<style lang="scss">
.fixedBar {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}
.index {
  .container {
    width: 100%;
  }
  .header{
    width: 100%;
    display: flex;
    justify-content: center;
    img{
    margin-top: 20px;
    width: 175px;
    margin-bottom: 20px;
    }
  }
  .sidebar {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    overflow-x: hidden;
    overflow-y: auto;
    background: #fff;

  }
  .main{
    width:100%;
    overflow-x: hidden;
    overflow-y: auto;
    border-right:1px solid #ccc;
  }
}
</style>
