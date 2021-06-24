<!--
 * @Description: 
-->
<template>
  <div class="box">
    <VirtualList :listData="data"></VirtualList>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import VirtualList from "./VirtualList.vue";

interface IData {
  id: number | string
  value: any
}

export default defineComponent({
  components: {
    VirtualList
  },
  setup () {
    const data: Array<IData> = reactive<Array<IData>>([])
    for(let i = 0; i < 10000; i++) {
      data.push({id: 1, value: i})
    }

    return {
      data
    }
  }
})
</script>

<style scoped>
.box {
  height: 100%;
}
</style>
