<template>
  <div class="index">
    <div class="container">
      <header class="header">
        <div>
          <img src="http://qty83k.creatby.com/materials/origin/b83026d03c9761d8fd6cab59d39be219_origin.png" alt="">
          <div>
            <h4>---------------------------------</h4>
          </div>
          <div>
            <p>..........</p>
          </div>
        </div>
      </header>
      <div class="sidebar">
            <navBar></navBar>
      </div>
      <div class="main">
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
    }
  },
  components: {
    navBar: navBar
  },
  methods: {
  }
}
</script>

<style lang="scss">
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
  .body-box{
    position: static;
    z-index: 1;
    overflow-x: hidden;
    border-top:1px solid #ccc;
  }
  .sidebar {
    display: flex;
    justify-content: center;
    overflow-x: hidden;
    overflow-y: auto;
    border-right:1px solid #ccc;
  }
  .main{
    width:100%;
    overflow-x: hidden;
    overflow-y: auto;
    border-right:1px solid #ccc;
  }
}
</style>
