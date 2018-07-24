<template>
  <div class="nav">
    <ul>
      <li v-for = "(nav, index) in navs" :key = "index">
        <router-link to = "/about">{{nav}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  data () {
    return {
      navs: ['about', 'home']
    }
  }
}
</script>
<style scoped lang="scss">
  .nav{
    margin-top:20px;
    font-size: 20px;
    ul{
      width: 1170px;
      height: 60px;
      padding-left: 15px;
      padding-right: 15px;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      border-top: 1px solid #eee;
      li{
        float: left;
        margin:0 20px;
        a{
          color:#666;
          padding:16px;
          display: inline-block;
          &:hover {
            color:#000;
            border-bottom: 1px solid #ddd;
          }
        }
      }
    }
  }
</style>
