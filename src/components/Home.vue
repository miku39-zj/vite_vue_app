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
            <span>vue3+vite</span>
          </div>
          <div class="siderMain">
            <el-menu class="siderMenu" background-color="rgb(121, 162, 165)" text-color="#ffffff" active-text-color="#ffffff"
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
          <div class="main-views">
            <router-view v-slot="{ Component }">
              <transition name="move" mode="out-in">
                <keep-alive>
                  <component :is="Component" />
                </keep-alive>
              </transition>
            </router-view>
          </div>
          
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
    reactive,
    ref,
    Ref,
    computed
  } from 'vue'
  import {
    mapGetters,
    Store,
    useStore
  } from "vuex";
  import MenuItem from './MenuItem/MenuItem.vue'
  import TagsViews from './TagsViews/TagsViews.vue'
  import HeaderRight from './HeaderRight/HeaderRight.vue'
  import BreadCrumb from './BreadCrumb/BreadCrumb.vue'
  import {
    useRoute,
    useRouter,
    RouteLocationNormalizedLoaded
  } from "vue-router";
  // import lottie from 'vue-lottie'
  import * as animationData from '../assets/lottie/65358-loading-dino.json';
  export default defineComponent({
    components: {
      MenuItem,
      TagsViews,
      HeaderRight,
      BreadCrumb,
      // lottie
    },
    setup() {
      const defaultOptions: Ref < object > = ref < object > ({
        animationData: animationData
      })

      const store: Store < any > = useStore()
      const route: RouteLocationNormalizedLoaded = useRoute();
      const common_routes = computed(() => store.getters.common_routes)
      const activeMenu = computed(() => {
        const itemRoute = route;
        const {
          meta,
          path,
          name
        } = itemRoute;
        if (meta.activeMenu) {
          return meta.activeMenu;
        }
        return name;
      })
      const isCollapse: Ref < boolean > = ref < boolean > (false)
      const toggleActive: Ref < boolean > = ref < boolean > (false)
      const toggleCollapse = async () => {
        isCollapse.value = !isCollapse.value
        toggleActive.value = !toggleActive.value
      }
      return {
        isCollapse,
        toggleActive,
        toggleCollapse,
        activeMenu,
        common_routes
      }
    }
  })
</script>

<style lang="less" scoped>
  /deep/.router-link-active {
    text-decoration: none !important;
  }

  .app-layout {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .home-comtainer {
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: all 1s;
  }

  .home-sider {
    background-image: linear-gradient(#B2FCFF, #B2FCFF);
    height: 100%;
    transition: width .3s;

    .siderBox {
      width: 100%;
      height: 100%;
    }


    .siderTitle {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #dcdfe6;
      color: #000;
      box-sizing: border-box;
      text-align: left;
      line-height: 50px;
      font-size: 16px;
      overflow: hidden;
      font-weight: bolder;

      .backstage-icon {
        fill: #3E64FF;
        margin: 0 10px 0 25px;
      }
    }

    .siderMain {
      width: 100%;
      height: calc(100% - 64px);
      overflow-x: hidden;
      overflow-y: auto;
    }

    .siderMenu {
      width: 100%;
    }
  }


  .home-header {
    // background: radial-gradient(ellipse farthest-side at 76% 77%, rgba(245, 228, 212, 0.25) 4%, rgba(255, 255, 255, 0) calc(4% + 1px)), radial-gradient(circle at 76% 40%, #fef6ec 4%, rgba(255, 255, 255, 0) 4.18%), linear-gradient(135deg, #ff0000 0%, #000036 100%), radial-gradient(ellipse at 28% 0%, #ffcfac 0%, rgba(98, 149, 144, 0.5) 100%), linear-gradient(180deg, #cd6e8a 0%, #f5eab0 69%, #d6c8a2 70%, #a2758d 100%);
    // background-blend-mode: normal, normal, screen, overlay, normal;
    background: linear-gradient(125deg, #ECFCFF 0%, #ECFCFF 40%, #B2FCFF calc(40% + 1px), #B2FCFF 60%, #5EDFFF calc(60% + 1px), #5EDFFF 72%, #3E64FF calc(72% + 1px), #3E64FF 100%);
    // background-image: linear-gradient(to right, #ffffff, #ffffff);
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #dcdfe6;

    .headerBox {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
    }

    .headersLeft {
      display: flex;
      justify-content: flex-start;
    }

    .leftBox {
      transition: all 0.5s;
      transform-origin: center center;
      line-height: 50px;
      width: 20px;
      height: 100%;
      margin-right: 15px;
    }

    .toggleLeftBox {
      transform: rotate(180deg);
    }

    .fold-icon {
      transition: all 0.5s;
      transform-origin: center center;
      width: 20px;
      height: 100%;
      margin-right: 15px;
    }
  }

  .main {
    width: 100%;
    height: 100%;
    overflow: hidden !important;
  }

  .home-main {
    width: 100%;
    height: 100%;
    // background-color: #eaedf1;
    padding: 0px !important;
  }

  .main-views {
    padding: 10px 10px 0 10px;
    width: 100%;
    box-sizing: border-box;
    height: calc(100% - 35px);
    overflow-x: hidden;
    overflow-y: auto;
    -ms-overflow-style: none;
    overflow: '-moz-scrollbars-none';
    scrollbar-width: none;
    /*  火狐   */
    // background: #F5F7F9;
    // background: linear-gradient(125deg, #ECFCFF 0%, #ECFCFF 40%, #B2FCFF calc(40% + 1px), #B2FCFF 60%, #5EDFFF calc(60% + 1px), #5EDFFF 72%, #3E64FF calc(72% + 1px), #3E64FF 100%);
    background-image: linear-gradient(to right, #ECFCFF, #ECFCFF)
  }

  .iconfont {
    margin-right: 10px;
  }

  .move-enter,
  .move-leave-to {
    transform: scale(0.9);
    opacity: 0;
  }

  .move-enter-to,
  .move-leave {
    transform: scale(1);
    opacity: 1;
  }

  .move-enter-active,
  .move-leave-active {
    transition: all 0.5s;
  }
</style>