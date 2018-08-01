<template>
  <div class="dashboard clearfix">
      <div class="col1 clearfix">
        <div class="big todos-thumb" data-page="todos">
          <p>1
            <span class="todos-thumb-span">11</span>
          </p>
        </div>
        <div class="small lock-thumb">
          <span class="icon-font  center" aria-hidden="true" data-icon="">2</span>
        </div>
        <div class="small last cpanel-thumb" data-page="random-page">
          <span class="icon-font" aria-hidden="true" data-icon="">3</span>
        </div>
        <div class="big notes-thumb" data-page="random-page">
          <span class="icon-font" aria-hidden="true" data-icon="">4</span>
          <p> 41</p>
        </div>
        <div class="big calculator-thumb" data-page="random-page"><span class="icon-font" aria-hidden="true" data-icon=""></span><p>5</p></div>
      </div>
      <div class="col2 clearfix">
        <div class="big organizer-thumb" data-page="random-page"><span class="icon-font" aria-hidden="true" data-icon=""></span><p>6</p></div>
        <div class="big news-thumb" data-page="random-page"><span class="icon-font" aria-hidden="true" data-icon=""></span><p>7</p></div>
        <div class="small calendar-thumb" data-page="random-page"><span class="icon-font" aria-hidden="true" data-icon=""></span>8</div>
        <div class="small last paint-thumb" data-page="random-page"><span class="icon-font" aria-hidden="true" data-icon=""></span>9</div>
        <div class="big weather-thumb" data-page="random-page"><span class="icon-font" aria-hidden="true" data-icon=""></span><p> 0</p></div>
      </div>
      <div class="col3 clearfix">
        <div class="big photos-thumb" data-page="random-page"><span class="icon-font" aria-hidden="true" data-icon=""></span><p> 10</p></div>
        <div class="small alarm-thumb" data-page="random-page"><span class="icon-font" aria-hidden="true" data-icon="">12</span></div>
        <div class="small last favorites-thumb" data-page="random-page"><span class="icon-font" aria-hidden="true" data-icon="">13</span></div>
        <div class="big games-thumb" data-page="random-page"><span class="icon-font" aria-hidden="true" data-icon=""></span><p>14</p></div>
        <div class="small git-thumb" data-page="random-page"><span class="icon-font" aria-hidden="true" data-icon="">15</span></div>
        <div class="small last code-thumb" data-page="random-page"><span class="icon-font" aria-hidden="true" data-icon="">16</span></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  data () {
    return {
      show2: true
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
</style>
