<!--
 * @Description: 
-->
<template>
  <div class="tags" v-if="showTags">
    <ul>
      <li class="tags-li" v-for="(item,index) in tagList" :class="{'active': isActive(item.path)}" :key="index">
        <router-link :to="item.path" class="tags-li-title">{{item.title}}</router-link>
        <span @click="closeTags(index)" class="icon-box" v-if="item.title !== '欢迎页'">
          <svg-icon icon-class='closeCircle' className="close-icon" />
          <!-- <svg-icon icon-class='close' className="close-icon" /> -->
        </span>
      </li>
    </ul>
    <div class="tags-close-box">
      <el-dropdown @command="handleTags" size="small">
        <el-button size="mini" type="primary">
          标签选项
          <svg-icon icon-class='dropDown' className="dropDown-icon" />
          <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="handleOther">关闭其他</el-dropdown-item>
            <el-dropdown-item command="handleAll">关闭所有</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    computed,
    defineComponent,
    watchEffect,
  } from 'vue'
  import {
    Store,
    useStore
  } from "vuex";
  import {
    useRoute,
    useRouter,
    RouteLocationNormalizedLoaded
  } from "vue-router";
  export default defineComponent({
    setup() {
      // const modulesFiles = require.context('./modules', true, /\.js$/); // webpack
      // const modulesFiles = import.meta.globEager("./module/*.js") // vite;
      const store: Store < any > = useStore()
      const route: RouteLocationNormalizedLoaded = useRoute();
      const router = useRouter()
      const tagList = computed(() => store.getters.tagList)
      const showTags = computed(() => tagList.value.length)
      const isActive = (path: string) => {
        return path === route.fullPath
      }
      const closeTags = async (i: number) => {
        const curtag = tagList.value[i]
        if (curtag.path === route.fullPath) {
          router.push(tagList.value[i - 1].path)
        }
        setTimeout(() => {
          store.commit("DEL_TAGLIST", {
            index: i
          })
        })
      }
      const handleTags = async (val: any) => {
        if (val === "handleOther") {
          const curItem = tagList.value.filter((item: any) => {
            return item.path === route.fullPath
          })
          store.commit("DEL_OTHER_TAGLIST", curItem)
        } else {
          store.commit("DEL_ALL_TAGLIST");
          router.push("/");
        }
      }
      const setTag = async (route: any) => {
        const isExist = tagList.value.some((item: any) => {
          return item.path === route.fullPath;
        });
        if (!isExist) {
          if (tagList.value.lengtht > 7) {
            store.commit("DEL_TAGLIST", {
              index: 0
            });
          }
          store.commit("SET_TAGLIST", {
            name: route.name,
            title: route.meta.title,
            path: route.fullPath
          });
        }
      }
      watchEffect(() => setTag(route))

      return {
        tagList,
        showTags,
        isActive,
        closeTags,
        handleTags
      }
    }
  })
</script>

<style lang="less" scoped>
  .tags {
    position: relative;
    height: 30px;
    overflow: hidden;
    /* background: #fff; */
    padding-right: 120px;
    box-shadow: 0 5px 10px #ddd;
    background: #ECFCFF;
  }

  .tags ul {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

  }

  .tags-li {
    float: left;
    margin: 3px 5px 2px 3px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    font-size: 12px;
    overflow: hidden;
    cursor: pointer;
    line-height: 23px;
    background: rgba(255, 255, 255, .8);
    padding: 0 10px 0 10px;
    vertical-align: middle;
    text-align: center;
    color: #666;
    transition: all 0.3s ease-in;
  }

  .tags-li:not(.active):hover {
    background: #f8f8f8;
  }

  .tags-li.active {
    color: #fff;
    border: 1px solid #409EFF;
    background-color: #409EFF;
  }

  .tags-li-title {
    float: left;
    max-width: 80px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-right: 5px;
    color: #666;
  }

  .tags-li.active .tags-li-title {
    color: #fff;
  }

  .icon-box .close-icon {
    vertical-align: text-top;
    width: 1.2em;
    height: 1.2em;
  }

  .tags-close-box {
    position: absolute;
    right: 0;
    top: 0;
    box-sizing: border-box;
    text-align: center;
    width: 100px;
    height: 30px;
    background: #fff;
    margin-right: 2px;
    z-index: 10;
  }
</style>