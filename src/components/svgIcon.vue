<!--
 * @Description: 
-->
<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script lang="ts">
  import {
    defineComponent,
    defineProps,
    ComputedRef,
    computed
  } from 'vue'

  export default defineComponent({
    props: {
      iconClass: {
        type: String,
        required: true
      },
      className: {
        type: String,
        default: ''
      }
    },
    setup(props) {
      const iconName: ComputedRef < string > = computed(_ => `#icon-${props.iconClass}`)
      const svgClass: ComputedRef < string > = computed(_ => props.className ? `svg-icon ${props.className}` :
        `svg-icon`)
      return {
        iconName,
        svgClass
      }
    }
  })
</script>

<style scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    fill: currentColor;
    overflow: hidden;
  }
</style>