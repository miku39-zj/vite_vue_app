<!--
 * @Description: 
-->
<template>
  <div class="login_container"
    :style="showMoon ? {['background-color']:'rgba(3, 11, 29, 0.6)'} : {['background-color']:'hsla(0, 0%, 100%, 0.5)'}">
    <div class="rightTop">
      <svg-icon :icon-class="showMoon ? 'moontag' : 'suntag'" className="moon-icon" />
    </div>
    <div class="toggle" :class="{'is-moon': showMoon}" @click.prevent="sunChangeMoon">
      <svg-icon icon-class='suntag' className="suntag-icon" />
      <svg-icon icon-class='moontag' className="moontag-icon" />
    </div>
  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
    reactive,
    Ref,
    toRaw,
    ref
  } from 'vue'

  export default defineComponent({
    setup() {
      let showMoon = ref < Boolean > (true)
      let form: Object = reactive < Object > ({
        name: "",
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      })
      console.log(showMoon,"showMoon");
      
      const sunChangeMoon: Function = () => {
        showMoon = ref < Boolean > (!toRaw(showMoon.value))
        console.log(showMoon, "showMoon");
      }
      return {
        showMoon,
        form,
        sunChangeMoon
      }
    }
  })
</script>

<style lang="less" scoped>
  .login_container {
    width: 100%;
    height: 100%;

    .wave {
      position: absolute;
      bottom: 0;
      z-index: -1;
      fill: #0099ff;
    }
  }

  .rightTop {
    float: right;
    margin: 0 30px 0 0;

    .moon-icon {
      width: 4em;
      height: 4em;
    }
  }

  .toggle {
    position: relative;
    display: flex;
    height: 26px;
    width: 50px;
    background-color: #151515;
    cursor: pointer;
    border-radius: 30px;
    box-sizing: border-box;
    padding: 0 6px;
    margin: 0 0 0 auto;
    top: 10px;
    right: 30px;
    justify-content: space-between;
    align-items: center;
  }

  .toggle::after {
    content: "";
    position: absolute;
    width: 18px;
    height: 18px;
    background-color: #fff;
    z-index: 1;
    top: 4px;
    border-radius: 50%;
    transition: all .3s;
  }

  .is-moon::after {
    transform: translateX(calc(100% + 2px));
  }
</style>