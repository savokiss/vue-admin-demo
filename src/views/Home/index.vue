<template>
  <div class="demo-wrapper">
  <div class="login-screen">
    <p>1</p>
    <div class="myform">
      <input type="text" placeholder="Password" />
      <button data-icon="&#xe00c;" id="unlock-button"></button>
    </div>
  </div>
  <div class="page todos">
    <h2 class="page-title">2</h2>
    <ul contenteditable>
      <li>Finish my 3D demo<span class="delete-button">x</span></li>
      <li>Design my blog<span class="delete-button">x</span></li>
      <li>Buy groceries<span class="delete-button">x</span></li>
      <li>Finish my todo app<span class="delete-button">x</span></li>
      <li>Organize my bookmarks<span class="delete-button">x</span></li>
    </ul>
    <div class="close-button">x</div>
  </div>

  <div class="page random-page">
    <h2 class="page-title">Some Awesome App!</h2>
    <div class="close-button">x</div>
  </div>

  <div class="dashboard clearfix">
      <div class="col1 clearfix">
        <div class="big todos-thumb" data-page="todos">
          <p>My Todos
            <span class="todos-thumb-span">You have 5 more tasks to do!</span>
          </p>
        </div>
        <div class="small lock-thumb">
          <span class="icon-font  center" aria-hidden="true" data-icon="&#xe00d;"></span>
        </div>
        <div class="small last cpanel-thumb" data-page="random-page">
          <span class="icon-font" aria-hidden="true" data-icon="&#xe016;"></span>
        </div>
        <div class="big notes-thumb" data-page="random-page">
          <span class="icon-font" aria-hidden="true" data-icon="&#xe000;"></span>
          <p> Notes</p>
        </div>
        <div class="big calculator-thumb" data-page="random-page"><span class="icon-font" aria-hidden="true" data-icon="&#xe017;"></span><p>Calculator</p></div>
      </div>
      <div class="col2 clearfix">
        <div class="big organizer-thumb" data-page="random-page"><span class="icon-font" aria-hidden="true" data-icon="&#xe015;"></span><p>Contacts</p></div>
        <div class="big news-thumb" data-page="random-page"><span class="icon-font" aria-hidden="true" data-icon="&#xe00f;"></span><p>News</p></div>
        <div class="small calendar-thumb" data-page="random-page"><span class="icon-font" aria-hidden="true" data-icon="&#xe00a;"></span></div>
        <div class="small last paint-thumb" data-page="random-page"><span class="icon-font" aria-hidden="true" data-icon="&#xe014;"></span></div>
        <div class="big weather-thumb" data-page="random-page"><span class="icon-font" aria-hidden="true" data-icon="&#xe012;"></span><p> Weather</p></div>
      </div>
      <div class="col3 clearfix">
        <div class="big photos-thumb" data-page="random-page"><span class="icon-font" aria-hidden="true" data-icon="&#xe001;"></span><p> Photos</p></div>
        <div class="small alarm-thumb" data-page="random-page"><span class="icon-font" aria-hidden="true" data-icon="&#xe009;"></span></div>
        <div class="small last favorites-thumb" data-page="random-page"><span class="icon-font" aria-hidden="true" data-icon="&#xe018;"></span></div>
        <div class="big games-thumb" data-page="random-page"><span class="icon-font" aria-hidden="true" data-icon="&#xe002;"></span><p>Games</p></div>
        <div class="small git-thumb" data-page="random-page"><span class="icon-font" aria-hidden="true" data-icon="&#xe010;"></span></div>
        <div class="small last code-thumb" data-page="random-page"><span class="icon-font" aria-hidden="true" data-icon="&#xe011;"></span></div>
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
  },
  mounted () {
  },
  methods: {
    handleScroll () {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
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
</style>
