<!--
 * @Description: 
-->
<template>
  <div class="login_container"
    :style="showMoon ? {['background-color']:'rgba(1, 4, 10, 0.8)'} : {['background-color']:'#fff'}">
    <div class="user">
      <div class="Icon">
        <svg-icon icon-class='userfill' className="user-icon" />
      </div>
      <div class="head">account login</div>
    </div>
    <div class="rightTop">
      <svg-icon :icon-class="showMoon ? 'moontag' : 'suntag'" className="moon-icon" />
    </div>
    <div class="toggle" :class="{'is-moon': showMoon}" @click="sunChangeMoon">
      <svg-icon icon-class='suntag' className="suntag-icon" />
      <svg-icon icon-class='moontag' className="moontag-icon" />
    </div>
    <div class="login-form-box">
      <div class="login-form-left">
        <svg-icon icon-class='undraw_happy_2021_h01d' className="login-icon" />
      </div>
      <div class="login-form-right">
        <transition name="move" mode="out-in">
          <SignIn ref="SignIn" v-if="isSignIn" @showSignUp="showSignUp"></SignIn>
          <SignUp ref="SignUp" v-else @showSignUp="showSignUp"></SignUp>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
    Ref,
    ref
  } from 'vue'
  import SignIn from "./LoginChild/SignIn.vue"
  import SignUp from "./LoginChild/SignUp.vue"
  export default defineComponent({
    components: {
      SignIn,
      SignUp
    },
    setup() {
      let showMoon: Ref < boolean > = ref < boolean > (false)
      let isSignIn: Ref < boolean > = ref < boolean > (true)
      const showSignUp = () => {
        isSignIn.value = !isSignIn.value
      }
      const sunChangeMoon = () => {
        showMoon.value = !showMoon.value
      }
      return {
        showMoon,
        isSignIn,
        showSignUp,
        sunChangeMoon
      }
    }
  })
</script>

<style lang="less" scoped>
  .login_container {
    width: 100%;
    height: 100%;
    background-image: url('../assets/img/login.png');
    background-size: cover;
    background-repeat: no-repeat;
  }

  .rightTop {
    position: absolute;
    right: 30px;
    top: 0;

    .moon-icon {
      width: 4rem;
      height: 4rem;
    }
  }

  .toggle {
    position: absolute;
    display: flex;
    height: 26px;
    width: 50px;
    background-color: #151515;
    cursor: pointer;
    border-radius: 30px;
    box-sizing: border-box;
    padding: 0 6px;
    margin: 0 0 0 auto;
    top: 20px;
    right: 100px;
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

  .user {
    position: absolute;
    left: 30px;
    top: 10px;

    .Icon {
      text-align: center;
      margin-bottom: 2px;

    }

    .user-icon {
      fill: rgb(0, 191, 166);
      font-size: 5rem;
    }

    .head {
      font-size: 1.6rem;
      text-transform: uppercase;
      user-select: none;
      background-image: -webkit-linear-gradient(left, rgb(47, 224, 210), #1edb6d 10%, #cc00ff 20%, #d3142e 30%, #b8b8eb 40%, #1d7979 50%, #5ca6d1 60%, #CC00CC 70%, #d3142e 80%, #1edb6d 90%, rgb(47, 224, 210) 100%);
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

  .login-form-box {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10rem;
    padding: 0 10rem;
    box-sizing: border-box;
  }

  .login-form-left {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .login-icon {
      width: 600px;
      height: 600px;
    }
  }

  .login-form-right {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .move-enter,
  .move-leave-to {
    transform: rotateY(180deg);
    opacity: 0;
  }

  .move-enter-to,
  .move-leave {
    // transform: scale(1);
    transform: rotateY(0deg);
    opacity: 1;
  }

  .move-enter-active,
  .move-leave-active {
    transition: all .5s;
  }

  @media screen and (max-width: 1500px) {
    .login-form-box {
      grid-gap: 5rem;
      padding: 0 5rem;
    }

    .login-form-box .login-icon {
      width: 500px;
      height: 500px;
    }
  }

  @media screen and (max-width: 1080px) {
    .login-form-box {
      grid-gap: 1rem;
      padding: 0 1rem;
    }

    .login-form-box .login-icon {
      width: 400px;
      height: 400px;
    }
  }

  @media screen and (max-width: 830px) {
    .login_container {
      background: #fff;
    }

    .user {
      display: none;
    }

    .login-form-left {
      display: none;

      .login-icon {
        display: none;
      }
    }

    .login-form-box {
      grid-template-columns: 1fr;
      grid-gap: 0;
      padding: 0;
    }
  }
</style>