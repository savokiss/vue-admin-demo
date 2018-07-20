<template>
  <div class="home">
    <div class="container">
      <header class="navbar">nav</header>
       <div class="body-box">
          <div class="sidebar">
            <ul>
              <li>
                <router-link to="/">home</router-link>
              </li>
              <li>
                <router-link to="/about">about</router-link>
              </li>
            </ul>
          </div>
          <div class="main">
            <router-view></router-view>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  }
}
</script>

<style lang="scss">
.home {
  .container {
    width: 100%;
  }
  .navbar{
    position: fixed;
    width: 100%;
    top: 0;
    background-color: #fff;
    height: 40px;
    padding: 10px 60px;
    z-index: 100;
    background: #ccc;
  }
  .body-box{
    position: static;
    z-index: 1;
    padding: 0 60px 30px;
    overflow-x: hidden;
    border-top:1px solid #ccc;
  }
  .sidebar {
    position: fixed;
    z-index: 10;
    top: 40px;
    left: 0;
    bottom: 0;
    width:100px;
    overflow-x: hidden;
    overflow-y: auto;
    border-right:1px solid #ccc;
  }
  .main{
    position: fixed;
    z-index: 10;
    top: 40px;
    left: 100px;
    bottom: 0;
    width:100%;
    overflow-x: hidden;
    overflow-y: auto;
    border-right:1px solid #ccc;
  }
}
</style>
