<!--
 * @Description: 
-->
<template>
  <div id="app">
    <div>
      <router-link to="/about">关于</router-link>
    </div>
    <!-- 路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
