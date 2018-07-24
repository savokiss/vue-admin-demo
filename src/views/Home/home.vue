<template>
  <div class="home">
    <waterfall :line-gap="200" :min-line-gap="100" :max-line-gap="300" :watch="items">
      <!-- each component is wrapped by a waterfall slot -->
      <waterfall-slot v-for="(item, index) in items" :width="item.width" :height="item.height" :order="index" :key="item.id" :style="item.style">
        <div class="item">{{ item.title }}</div>
      </waterfall-slot>
    </waterfall>
  </div>
</template>
<script>
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'

function getRandomColor () {
  var colors = [
    'rgba(21,174,103,.5)',
    'rgba(245,163,59,.5)',
    'rgba(255,230,135,.5)',
    'rgba(194,217,78,.5)',
    'rgba(195,123,177,.5)',
    'rgba(125,205,244,.5)'
  ]
  return colors[~~(Math.random() * colors.length)]
}

function getItem (n) {
  const res = []
  for (var i = 0; i < n; i++) {
    res.push({
      width: 100 + ~~(Math.random() * 100),
      height: 100 + ~~(Math.random() * 50),
      title: 'test',
      style: {
        backgroundColor: getRandomColor()
      }
    })
  }
  return res
}

export default {
  name: 'home',
  data () {
    return {
      items: getItem(100)
    }
  },
  components: {
    Waterfall,
    WaterfallSlot
  }
}
</script>

<style lang="scss">
.home {
  padding: 10px 30px;
  .item {
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    font-size: 1.2em;
    color: rgb(0, 158, 107);
  }
}
</style>
