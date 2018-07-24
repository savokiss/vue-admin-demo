<template>
  <div class="home">
    <waterfall :line-gap="200" :watch="items">
  <!-- each component is wrapped by a waterfall slot -->
  <waterfall-slot
    v-for="(item, index) in items"
    :width="item.width"
    :height="item.height"
    :order="index"
    :key="item.id"
  >
    <!--
      your component
    -->
  </waterfall-slot>
</waterfall>
  </div>
</template>
<script>
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
export default {
  name: 'home',
  data (){
    return {
      items: ['1', 'a']
    }
  },
  components: {
    Waterfall,
    WaterfallSlot
  }
}
</script>
