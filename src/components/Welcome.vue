<!--
 * @Description: 
-->
<template>
  <div>
    <div class="bodymovin"></div>
    <!-- <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_0ot2smbt.json" background="transparent" speed="1"
      style="width: 300px; height: 300px;" loop autoplay></lottie-player> -->
  </div>
</template>

<script lang="ts">
  import {
    defineComponent
  } from 'vue'

  export default defineComponent({
    setup() {
      fetch('src/assets/lottie/65358-loading-dino.json')
            .then(data => {
      const animation = (window as any).bodymovin.loadAnimation({
        container: document.querySelector('.bodymovin'), // 要包含该动画的dom元素
        renderer: 'svg', // 渲染方式，svg、canvas、html（轻量版仅svg渲染）
        loop: true, // 是否循环播放
        autoplay: true, // 是否自动播放
        path: 'src/assets/lottie/65358-loading-dino.json', // 动画json文件路径
      });
      // animation.playCount = 800;
      console.log(animation);
            })
      return {
        
      }
    }
  })
</script>

<style scoped>
  .bodymovin {
    width: 500px;
    height: 500px;
  }
</style>