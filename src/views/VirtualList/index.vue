<!--
 * @Description: 
-->
<template>
  <div class="box">
    <VirtualList :listData="FakerData">
      <template #content="scoped">
        <div :ref="el => { if (el) divs[scoped.i] = el }">{{scoped.item.value}}</div>
      </template>
    </VirtualList>
  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
    onMounted,
    reactive,
    Ref,
    ref,
    onBeforeUpdate,
    nextTick
  } from 'vue'
  import VirtualList from "./VirtualList.vue";
  import {
    data,
    IData
  } from "./FakerData"
  export default defineComponent({
    components: {
      VirtualList
    },
    setup() {
      const divs: Ref < Array < any >> = ref < Array < any >> ([])
      const FakerData: Array < IData > = reactive < Array < IData >> (data)
      onMounted(() => {
        nextTick(() => {
          console.log(divs.value, " divs.value456");
          divs.value.forEach(e => {
            console.log(e.clientHeight);
          });
        })
      })
      onBeforeUpdate(() => {
        divs.value = []
      })
      return {
        FakerData,
        divs
      }
    }
  })
</script>

<style scoped>
  .box {
    height: 100%;
  }
</style>