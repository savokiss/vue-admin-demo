<template>
  <div class="home">
    <div class="container">
      <div class="sidebar">

      </div>
      <div class="main">

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
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  .sidebar {
    width: 200px;
    height: 100vh;
    border: 1px solid #ccc;
  }
  .main {
    width: 100%;
    height: 100vh;
    border: 1px solid #ccc;
  }
}
</style>
