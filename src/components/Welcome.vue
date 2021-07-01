<!--
 * @Description: 
-->
<template>
  <div class="container">
    <div class="container-one">
      <div class="user-box">
        <div class="user-avator">
          <svg-icon icon-class='Totoro' className="Totoro-icon" />
          <!-- <img src="../assets/img/36.png" class="img-avator" alt /> -->
          <div class="user-name">
            <p class="user-name-item">泡泡茶壶</p>
            <p class="use-induce-item">你好,泡泡茶壶,欢迎来VUE3世界</p>
          </div>
        </div>
      </div>
      <div class="tip-box">
        <div class="tip-item item-one">
          <div class="icon-box chaseBox">
            <svg-icon icon-class='chase' className="tip-icon" />
          </div>
          <div class="grid-cont-right">
            <div class="grid-num">339</div>
            <div>追番数</div>
          </div>
        </div>
        <div class="tip-item item-two">
          <div class="icon-box todolistBox">
            <svg-icon icon-class='todolist' className="tip-icon" />
          </div>
          <div class="grid-cont-right">
            <div class="grid-num">39</div>
            <div>待办事项</div>
          </div>
        </div>
        <div class="tip-item item-three">
          <div class="icon-box msgBox">
            <svg-icon icon-class='msg' className="tip-icon" />
          </div>
          <div class="grid-cont-right">
            <div class="grid-num">393</div>
            <div>系统消息</div>
          </div>
        </div>
        <div class="tip-item item-four">
          <div class="icon-box githubBox">
            <svg-icon icon-class='github' className="tip-icon" />
          </div>
          <div class="grid-cont-right">
            <div class="grid-num">3</div>
            <div>项目数量</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
    ref,
    onMounted,
    nextTick
  } from 'vue'
  export default defineComponent({
    setup() {
      return {}
    }
  })
</script>

<style lang="less" scoped>
  .container {
    width: 100%;
    height: 100%;
    // background: #fff;
    // border: 1px solid rgba(0, 0, 0, .1);
    // border-radius: 5px;
    box-sizing: border-box;
  }

  .container-one {
    width: 100%;
    height: 100%;
  }



  .user-box {
    float: left;
    padding: 20px;
    width: 33%;
    height: 25%;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: 5px;
    box-sizing: border-box;
  }

  .img-avator {
    margin-right: 15px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  .user-avator {
    width: 100%;
    align-items: center;
    display: flex;

    .Totoro-icon {
      width: 10rem;
      height: 10rem;
    }

    .user-name {
      font-size: 30px;
      color: #222;
    }

    p {
      margin: 0;
    }

    .use-induce-item {
      margin-top: 10px;
      font-size: 20px;
      background-image: -webkit-linear-gradient(left, blue, #5EDFFF 10%, #cc00ff 20%, #CC00CC 30%, #CCCCFF 40%, #1d7979 50%, #CCCCFF 60%, #CC00CC 70%, #CC00FF 80%, #5EDFFF 90%, blue 100%);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      background-size: 200% 100%;
      animation: masked 4s linear infinite;
    }
  }

  @keyframes masked {
    0% {
      background-position: 0 0;
    }

    100% {
      background-position: -100% 0;
    }
  }

  .tip-box {
    margin-left: 15px;
    float: left;
    width: calc(67% - 15px);
    height: 25%;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: 5px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    padding: 40px 20px;
  }

  .tip-item {
    width: calc(25% - 20px);
    height: 100%;
    border: 1px solid rgba(0, 0, 0, .1);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

    transition: transform .2s ;
    
    .icon-box {
      font-size: 30px;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      text-align: center;
      line-height: 80px;
      color: #fff;

      .tip-icon {
        width: 2em;
        width: 2em;
        vertical-align: middle;
      }
    }
    &:hover {
      transform: scale(1.05,1.05);
    }
  }

  .chaseBox {
    background: rgb(242, 94, 67);
  }

  .todolistBox {
    background: #3eede7;
  }

  .msgBox {
    background: rgb(100, 213, 114);

  }

  .githubBox {
    background: rgb(45, 140, 240);
  }

  .grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
  }

  .grid-num {
    font-size: 30px;
    font-weight: bold;
  }
</style>