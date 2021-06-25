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
    ref
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
      const divs: Ref<Array<any>> = ref<Array<any>>([])
      const FakerData: Array < IData > = reactive < Array < IData >> (data)
      onMounted(() => {
        console.log(divs,"items132321132");
        
        divs.value.forEach(e => {
          console.log(e.clientHeight);
          
        });
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