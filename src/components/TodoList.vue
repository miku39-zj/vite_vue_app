<template>
  <div>
    <h1 @click="add">{{ count }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
let count = ref<number>(1);
function add() {
  count.value++;
}
</script>

<style>
h1 {
  color: red;
}
</style>
