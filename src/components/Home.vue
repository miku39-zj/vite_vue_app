<!--
 * @Description: 
-->
<template>
  <div class="app-layout">
    <el-container class="home-comtainer">

      <el-aside :width="isCollapse ? '64px' : '200px'" class="home-sider">
        <div class="siderBox">
          <div class="siderTitle">
            <svg-icon icon-class='backstage' className="backstage-icon" />
            <span>后台管理系统VUE3</span>
          </div>
          <div class="siderMain">
            <el-menu class="siderMenu" background-color="#333744" text-color="#ffffff" active-text-color="#ffffff"
              unique-opened :collapse="isCollapse" :collapse-transition="false" router :default-active="activeMenu"
              mode="vertical">
              <MenuItem v-for="route in common_routes" :key="route.name" :item="route" :base-path="route.path">
              </MenuItem>
            </el-menu>
          </div>
        </div>
      </el-aside>

      <el-container class="main">
        <el-header class="home-header" height='50px'>
          <div class="headerBox">
            <div class="headersLeft">
              <div class="leftBox" @click="toggleCollapse" :class="toggleActive ? 'toggleLeftBox' : ''">
                <svg-icon icon-class='fold' className="fold-icon" />
              </div>
              <!-- 面包屑 -->
              <BreadCrumb />
            </div>

            <HeaderRight />
          </div>
        </el-header>

        <el-main class="home-main">
          <TagsViews />
          <!-- 路由占位符 -->
          <div class="main-views">
            <transition name="move" mode="out-in">
              <router-view />
            </transition>
          </div>

        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
    ref,
    Ref
  } from 'vue'
  import {
    mapGetters
  } from "vuex";
  import MenuItem from './MenuItem/MenuItem.vue'
  export default defineComponent({
    components:{
      MenuItem,
    },
    computed: {
      ...mapGetters(["common_routes", "tagList"]),
      activeMenu() {
        const route = this.$route;
        const {
          meta,
          path,
          name
        } = route;
        if (meta.activeMenu) {
          return meta.activeMenu;
        }
        return name;
      },
    },
    setup() {
      const isCollapse: Ref < boolean > = ref < boolean > (false)
      const toggleActive: Ref < boolean > = ref < boolean > (false)
      const toggleCollapse = async () => {
        isCollapse.value = !isCollapse.value
        toggleActive.value = !toggleActive.value
      }
      return {}
    }
  })
</script>

<style lang="less" scoped>
  /deep/.router-link-active {
    text-decoration: none !important;
  }
</style>