<!--
 * @Description: 
-->
<template>
  <div ref="vList" class="virtual-list-contain" @scroll="scrollEvent($event)">
    <div class="virtual-list-model" :style="{ height: listHeight + 'px' }"></div>
    <div class="virtual-list" :style="{'transform': getTransform}">
      <div class="virtual-item" v-for="(item,i) in visibleData" :key="item.id" :ref="el => { if (el) items[i] = el }"
        :style="{ height: itemSize + 'px',lineHeight: itemSize + 'px' }">
        <slot name="content" :item="item" :i="i"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
    computed,
    ref,
    Ref,
    onMounted,
    nextTick,
    onBeforeUpdate,
  } from 'vue'

  export default defineComponent({
    name: 'VirtualList',
    props: {
      listData: {
        type: Array,
        default: () => []
      },
      itemSize: {
        type: Number,
        default: 30
      }
    },
    setup(props, content) {
      const vList: any = ref(null)
      const items: Ref<Array<any>> = ref<Array<any>>([])
      // 可视高度
      const screenHeight = ref(0)
      // 偏移量
      const startOffset = ref(0)
      const start = ref(0)
      const end = ref(0)
      //列表高度
      const listHeight = computed(() => props.listData.length * props.itemSize)
      //可显示列表数
      const visibleCount = computed(() => Math.ceil(screenHeight.value / props.itemSize))
      //偏移
      const getTransform = computed(() => `translate(0,${startOffset.value}px)`)
      //显示数据
      const visibleData = computed(() => props.listData.slice(start.value, Math.min(end.value, props.listData
        .length)))

      //method
      const scrollEvent = async (e: Event) => {
        //当前滚动位置
        let scrollTop = vList.value.scrollTop;
        start.value = Math.floor(scrollTop / props.itemSize);
        end.value = start.value + visibleCount.value;
        startOffset.value = scrollTop - (scrollTop % props.itemSize);
      }
      onBeforeUpdate(() => {
        items.value = []
      })

      onMounted(() => {
        screenHeight.value = vList.value.clientHeight
        start.value = 0
        end.value = start.value + visibleCount.value
        console.log(vList.value, "vList.value");
      })
      return {
        vList,
        items,
        listHeight,
        visibleCount,
        getTransform,
        visibleData,
        scrollEvent
      }
    }
  })
</script>

<style scoped>
  .virtual-list-contain {
    border: 1px solid #999;
    height: 80%;
    width: 50%;
    overflow: auto;
    position: relative;
  }

  .virtual-list-model {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: -1;
  }

  .virtual-list {
    left: 0;
    right: 0;
    top: 0;
    position: absolute;
    text-align: center;
  }

  .virtual-item {
    padding: 0px;
    color: #555;
    box-sizing: border-box;
    border-bottom: 1px solid #999;
  }
</style>