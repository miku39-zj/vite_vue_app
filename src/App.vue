<!--
 * @Descripttion: 
 * @version: 
 * @Author: zj
 * @Date: 2021-04-29 15:27:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-30 08:37:18
-->
<template>
  <router-view />
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
</template>

<script lang="ts">
  import {
    defineComponent
  } from 'vue'
  import HelloWorld from 'comps/HelloWorld.vue'

  export default defineComponent({
    name: 'App',
    components: {
      HelloWorld
    }
  })
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>