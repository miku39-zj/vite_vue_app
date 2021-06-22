<!--
 * @Description: 
-->
<template>
  <div class="box">
    <lottie :options="defaultOptions" :height="400" :width="400" @animCreated="handleAnimation" />
  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
    ref,
    onMounted,
    nextTick,
    reactive
  } from 'vue'
  import Lottie from './index.vue';
  // import lottie from 'lottie-web';
  import * as animationData from '../../assets/lottie/65358-loading-dino.json';
  export default defineComponent({
    components: {
      'lottie': Lottie
    },
    setup() {
      const defaultOptions = reactive({
        animationData: animationData
      })
      let anim: undefined
      const handleAnimation = async (anim: any) => {
        anim = anim
        anim.play()
      }
      return {
        defaultOptions,
        handleAnimation
      }
    }
  })
</script>

<style scoped>
  .box {
    width: 100%;
    height: 100%;
  }

  .bodymovin {
    width: 100%;
    height: 100%;
  }
</style>