<!--
 * @Description: 
-->
<script lang="ts">
  import {
    defineComponent,
    computed,
    ref,
    Ref,
    onMounted,
    nextTick,
    onBeforeUpdate,
    h
  } from 'vue'
  import {
    IData
  } from "./FakerData"
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
      },
      showData: {
        type: Number,
        default: 20
      }
    },
    setup(props, {
      slots
    }) {
      //#region 
      //       <template>
      //   <div ref="vList" class="virtual-list-contain" @scroll="scrollEvent($event)">
      //     <div class="virtual-list-model" :style="{ height: listHeight + 'px' }"></div>
      //     <div class="virtual-list" :style="{'transform': getTransform}">
      //       <div class="virtual-item" v-for="(item,i) in visibleData" :key="item.id" :ref="setIemref"
      //         :style="{ height: itemSize + 'px',lineHeight: itemSize + 'px' }">
      //         <slot name="content" :item="item" :i="i"></slot>
      //       </div>
      //     </div>
      //     <div style="width: 100%;height: 0px"></div>
      //   </div>
      // </template>
      //#endregion

      let vList: any = ref(null)
      let items: any = ref < any > ([])

      let itemHight: Ref < number > = ref < number > (0)
      // 可视高度
      let screenHeight: Ref < number > = ref < number > (0)
      // 偏移量
      let startOffset: Ref < number > = ref < number > (0)
      let start: Ref < number > = ref < number > (0)
      let end: Ref < number > = ref < number > (0)
      
      //列表高度
      const listHeight = computed(() => props.listData.length * itemHight.value)
      
      //可显示列表数
      const visibleCount = computed(() => Math.ceil(screenHeight.value / itemHight.value))
      //偏移
      const getTransform = computed(() => `translate(0,${startOffset.value}px)`)
      //显示数据
      const visibleData = computed(() => props.listData.slice(start.value, Math.min(end.value, props.listData
        .length)))
      //真实高度
      const virtualHight = computed(() => itemHight.value * props.showData)
      //method
      const scrollEvent = async (e: Event) => {
        //当前滚动位置
        let scrollTop = vList.value.scrollTop;
        start.value = Math.floor(scrollTop / props.itemSize);
        end.value = start.value + visibleCount.value;

        startOffset.value = scrollTop - (scrollTop % props.itemSize);
      }
      const setIemref = (el: Element) => {
        items.value.push(el)
      }
      onBeforeUpdate(() => {
        items.value = []
      })

      onMounted(() => {
        screenHeight.value = vList.value.clientHeight
        start.value = 0
        end.value = props.showData
        // end.value = start.value + visibleCount.value
        nextTick(() => {
          itemHight.value = items.value[0].clientHeight
        })
      })
      const getSlotsRender = (h: any, slot: any): Array < typeof h > => {
        const slotsNode: Array < typeof h > = []
        visibleData.value.map((item: any, i: number) => {
          slotsNode.push(h('div', {
            key: item.id,
            class: 'virtual-item',
            ref: setIemref,
            style: {
              height: props.itemSize + 'px',
              lineHeight: props.itemSize + 'px'
            }
          }, slot.content({
            name: 'content',
            item: item,
            i: i
          })))
        })
        return slotsNode
      }
      return {
        vList,
        items,
        listHeight,
        visibleCount,
        getTransform,
        visibleData,
        scrollEvent,
        setIemref,
        getSlotsRender,
        virtualHight,
      }
    },
    render() {
      const {
        scrollEvent,
        listHeight,
        getTransform,
        getSlotsRender,
        virtualHight,
        $slots
      } = this
      return h('div', {
        ref: 'vList',
        onScroll: scrollEvent,
        class: 'virtual-list-contain',
      }, [
        h('div', {
          class: 'virtual-list-model',
          style: {
            height: listHeight + 'px'
          },
        }),
        h('div', {
          class: 'virtual-list',
          style: {
            transform: getTransform,
            height: virtualHight
          }
        }, getSlotsRender(h, $slots))
      ])
    }
  })
</script>

<style scoped>
  .virtual-list-contain {
    border: 1px solid #999;
    height: 600px;
    width: 50%;
    overflow: auto;
    position: relative;
    cursor: pointer;
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