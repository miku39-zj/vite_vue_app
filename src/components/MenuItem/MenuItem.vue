<!--
 * @Description: 
-->
<template>
  <div v-if="!item.hidden">
    <template v-if="checkOneChild(item.children,item)">
      <router-link v-if="onlyOneChild.meta && !onlyOneChild.meta.hidden" :to="onlyOneChild.path">
        <el-menu-item :index="onlyOneChild.name" :class="{'submenu-title-noDropdown' : isNest }">
          <i :class="onlyOneChild.meta.icon || (item.meta && item.meta.icon)" style="color: #ffffff" />
          <template #title>
            <span>{{onlyOneChild.meta.title}}</span>
          </template>
        </el-menu-item>
      </router-link>
    </template>
    <el-submenu v-else ref="subMenu" :index="item.name" popper-append-to-body>
      <template #title>
        <i v-if="item.meta" :class="item.meta && item.meta.icon" style="color: #ffffff" />
        <span v-if="item.meta">{{item.meta.title}}</span>
      </template>
      <menuItem v-for="child in item.children" :key="child.path" :is-nest='true' :item='child'
        :base-path="child.path" />
    </el-submenu>
  </div>
</template>

<script lang="ts">
  import {
    defineComponent
  } from 'vue'

  export default defineComponent({
    name: "MenuItem",
    props: {
      item: {
        type: Object,
        required: true
      },
      isNest: {
        type: Boolean,
        required: false
      },
      basePath: {
        type: String,
        default: ''
      }
    },
    setup(props, context) {


      return {}
    }
  })
</script>

<style scoped>

</style>