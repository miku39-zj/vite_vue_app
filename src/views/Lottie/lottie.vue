<!--
 * @Description: 
-->
<template>
  <div class="box">
    <lottie :options="defaultOptions" :height="500" :width="500" @animCreated="handleAnimation" />
    <el-button type="primary" @click="stop">停止</el-button>
    <br/>
    <el-button type="primary" @click="start" :style="{['margin-top']: '10px'}">开始</el-button>
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
  import * as animationData from '../../assets/lottie/60820-bicycle-riding.json';
  export default defineComponent({
    components: {
      'lottie': Lottie
    },
    setup() {
      const defaultOptions = reactive({
        animationData: animationData
      })
      let anim: any = ref(null)
      const handleAnimation = async (animParam: any) => {
        anim = animParam
        anim.play()
      }
      const stop = async () => {
        anim.stop()
      }
      const start = async ()=> {
        anim.play()
      }
      return {
        defaultOptions,
        handleAnimation,
        anim,
        stop,
        start
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