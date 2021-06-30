<!--
 * @Description: 
-->
<template>
  <div v-if="!item.hidden">
    <template v-if="checkOneChild(item.children,item)">
      <router-link v-if="onlyOneChild.meta && !onlyOneChild.meta.hidden" :to="onlyOneChild.path">
        <el-menu-item :index="onlyOneChild.name" :class="{'submenu-title-noDropdown' : isNest,'menu-box': true }">
          <svg-icon :icon-class="onlyOneChild.meta.icon || (item.meta && item.meta.icon)" className="icon"
            style="color: #ffffff" />
          <template #title>
            <span>{{onlyOneChild.meta.title}}</span>
          </template>
        </el-menu-item>
      </router-link>
    </template>
    <el-submenu v-else ref="subMenu" class="menu-box" :index="item.name" popper-append-to-body>
      <template #title>
        <svg-icon :icon-class="item.meta && item.meta.icon" className="icon" style="color: #ffffff" />
        <span v-if="item.meta">{{item.meta.title}}</span>
        <!-- <svg-icon icon-class='dropDown' className="dropDown-icon" /> -->
      </template>
      <menuItem v-for="child in item.children" :key="child.path" :is-nest='true' :item='child'
        :base-path="child.path" />
    </el-submenu>
  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
    Ref,
    ref
  } from 'vue'
  import {
    IRouterList
  } from '../../types/routerType'
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
      const onlyOneChild: Ref = ref(null)
      const checkOneChild = (children: Array < IRouterList > | [] = [], parent: IRouterList) => {
        const showingChildren: Array < IRouterList > | [] = children.filter(item => {
          if (item.hidden) {
            return false
          } else {
            onlyOneChild.value = item
            return true
          }
        })
        if (showingChildren.length === 1) {
          return true
        }
        if (showingChildren.length === 0) {
          onlyOneChild.value = {
            ...parent,
            noShowingChildren: true
          }
          // console.log(this.onlyOneChild, "this.onlyOneChild");
          return true
        }
        return false
      }
      return {
        checkOneChild,
        onlyOneChild
      }
    }
  })
</script>

<style lang="less" scoped>
  .el-menu-item.is-active {
    background: #1A86EE !important;
  }

  .menu-box {
    .icon {
      margin-right: 5px;
      width: 1.5em;
      height: 1.5em;
    }
  }
</style>