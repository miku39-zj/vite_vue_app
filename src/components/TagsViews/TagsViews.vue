<!--
 * @Description: 
-->
<!--
 * @Description: 
-->
<template>
  <div class="tags" v-if="showTags">
    <ul>
      <li class="tags-li" v-for="(item,index) in tagList" :class="{'active': isActive(item.path)}" :key="index">
        <router-link :to="item.path" class="tags-li-title">{{item.title}}</router-link>
        <span @click="closeTags(index)" v-if="item.title !== '欢迎页'">
          <i class="el-icon-close"></i>
        </span>
      </li>
    </ul>
    <div class="tags-close-box">
      <el-dropdown @command="handleTags">
        <el-button size="mini" type="primary">
          标签选项
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu size="small">
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
    defineComponent
  } from 'vue'
  import {
    mapGetters,
    Store,
    useStore
  } from "vuex";
  export default defineComponent({
    setup() {
      const store: Store<any> = useStore()
      const tagList = computed(() => store.getters.tagList)
      const showTags = computed(() => tagList.value.length)
      return {
        tagList,
        showTags
      }
    }
  })
</script>

<style scoped>

</style>