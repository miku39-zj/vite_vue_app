<!--
 * @Description: 
-->
<template>
  <div class="login_container"
    :style="showMoon ? {['background-color']:'rgba(3, 11, 29, 0.6)'} : {['background-color']:'hsla(0, 0%, 100%, 0.5)'}">
    1111111111
  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
    reactive,
    Ref,
    ref
  } from 'vue'

  export default defineComponent({
    setup() {
      const showMoon: Ref < Boolean > = ref < Boolean > (false)
      const form: Object = reactive < Object > ({
        name: "",
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      })
      return {
        showMoon,
        form
      }
    }
  })
</script>

<style lang="less" scoped>
  .login_container {
    width: 100%;
    height: 100%;

    .wave {
      position: absolute;
      bottom: 0;
      z-index: -1;
      fill: #0099ff;
    }
  }
</style>