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
    height: 55px;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #cfd8dc
  }
  .sidebar {
    position: fixed;
    width: 200px;
    height: 100%;
    overflow: scroll;
    border-right:1px solid #ccc;
  }
  .main{
    margin-left: 200px;
  }
}
</style>
