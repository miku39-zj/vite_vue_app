<!--
 * @Description: 
-->


<script lang="ts">
  import {
    defineComponent,
    onMounted,
    reactive,
    Ref,
    ref,
    onBeforeUpdate,
    nextTick,
    h,
    resolveComponent
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
        divs,
      }
    },
    render() {
      const {
        FakerData,
        divs,
      } = this
      const VirtualList: any = resolveComponent('VirtualList')
      return h('div', {
        class: 'box'
      }, [h(VirtualList, {
        listData: FakerData,
        showData: 30
      }, {
        content: (props: any) => h('div',{
          ref: el => { if (el) divs[props.i] = el }
        }, props.item.value)
      })])
    },
  })
</script>

<style scoped>
  .box {
    height: 100%;
  }
</style>