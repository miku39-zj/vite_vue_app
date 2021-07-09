<!--
 * @Description: 
-->
<template>
  <div class="login_box" v-if="isSignIn">
    <!-- 头像区 -->
    <div class="avtar">
      <div class="pic"><img src="../../assets/img/33.png" alt=""></div>
    </div>
    <div class="login-box-title">
      后台管理系统
    </div>
    <!-- 登录表单  :model绑定数据-->
    <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" placeholder="请输入用户名" size="medium">
          <template #prepend><i class="el-icon-user"></i></template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" placeholder="请输入密码" size="medium">
          <template #prepend><i class="el-icon-key"></i></template>
        </el-input>
      </el-form-item>
      <el-form-item class="btns">
        <el-button style="width:100%" type="primary" round @click="login" size="medium">立即登录
        </el-button>
      </el-form-item>
      <el-row class="remenbBox">
        <el-col :span="12">
          <el-form-item>
            <el-checkbox v-model="loginForm.remenbMe" style="color:#000">记住我</el-checkbox>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item :style="{ 'text-align': 'right' }">
            <el-button type="text" size="small">
              忘记密码？
            </el-button>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="divider">
        <span class="text">其他登录</span>
      </div>
      <el-form-item :style="{ 'text-align': 'center' }">
        <el-button class="iconBox" type="text" @click="otherLogin">
          <svg-icon icon-class='github' className="myIcon github-icon" />
        </el-button>
        <el-button class="iconBox" type="text" @click="otherLogin">
          <svg-icon icon-class='facebook' className="myIcon facebook-icon" />
        </el-button>
        <el-button class="iconBox" type="text" @click="otherLogin">
          <svg-icon icon-class='twitter' className="myIcon twitter-icon" />
        </el-button>
        <el-button class="iconBox" type="text" @click="otherLogin">
          <svg-icon icon-class='wechart' className="myIcon wechart-icon" />
        </el-button>
      </el-form-item>
    </el-form>
    <p class="btn-something">
      Don't have an account ? <span type="text" @click.prevent="signup">signup</span>
    </p>
  </div>
</template>

<script lang="ts">
  import {
    ElMessage
  } from 'element-plus'
  import {
    defineComponent,
    reactive,
    ref,
    Ref
  } from 'vue'
  import {
    useRouter
  } from "vue-router";
  export default defineComponent({
    name: "SignIn",
    setup(props, context) {
      const isSignIn: Ref < Object > = ref < boolean > (true)
      const loginForm: Object = reactive < Object > ({
        username: 'admin',
        password: '123456',
        remenbMe: false
      })
      const loginFormRules: Object = reactive < Object > ({
        username: [{
          validator: (rule: any, value: any, callback: (arg0 ? : Error | undefined) =>
            void) => {
            if (!value) {
              return callback(new Error('用户名不能为空'))
            }
            callback()
          },
          trigger: 'blur'
        }],
        password: [{
          validator: (rule: any, value: any, callback: (arg0 ? : Error | undefined) =>
            void) => {
            if (!value) {
              return callback(new Error('密码不能为空'))
            }
            callback()
          },
          trigger: 'blur'
        }],
      })
      const otherLogin = () => {

      }

      const router = useRouter()
      const loginFormRef: Ref = ref(null)

      const login = async () => {
        loginFormRef.value.validate(async (valid: boolean) => {
          if (valid) {
            ElMessage.success("登录成功");
            await router.push('/welcome');
          }
        })
      }

      const signup = () => {
        context.emit('showSignUp')
      }

      return {
        isSignIn,
        loginForm,
        loginFormRules,
        otherLogin,
        signup,
        login,
        loginFormRef
      }
    }
  })
</script>

<style lang="less" scoped>
  /deep/ .el-input__inner {
    background-color: rgba(255, 255, 255, 0.7);
  }

  /deep/.el-input-group__prepend {
    background-color: rgba(245, 247, 250, 0.7);
  }

  .login_box {
    width: 400px;
    height: 540px;
    border: 1px solid rgba(0, 0, 0, .2);
    background: hsla(0, 0%, 100%, .1);
    // border-radius: 50px;
    // position: absolute;
    // right: 0;
    // top: 50%;
    // transform: translate(-50%, -50%);
    transition: transform .1s;
    &:hover { 
      box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    }
  }

  .login-box-title {
    line-height: 50px;
    font-size: 1.4rem;
    color: #000;
    text-align: center;
    font-weight: bold;
    border-bottom: 1px solid #ffffff;
    user-select: none;
  }


  .myIcon {
    width: 1.8em;
    height: 1.8em;
  }

  .iconBox {
    margin: 0.5em 1em;
  }

  .btn-something {
    color: #888;
    font-size: 14px;
    text-align: center;
  }

  .btn-something span {
    color: #0066ff;
    cursor: pointer;
    font-weight: 500;
  }

  .avtar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    user-select: none;
  }

  .avtar .pic {
    position: relative;
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 50%;
  }

  .avtar .pic img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }


  .login_form {
    margin-top: 30px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;

    .btns {
      margin-bottom: 6px;
    }

    .remenbBox {
      /deep/.el-form-item {
        margin-bottom: 0px;
      }
    }
  }


  .divider {
    border-top: 0px solid rgba(0, 0, 0, .4);
    box-sizing: border-box;
    color: rgba(0, 0, 0, .5);
    width: 100%;

    .text {
      width: 20%;
      display: inline-block;
      padding: 0 1em;
      text-align: center;
      transform: translate(0, 25%);
    }

  }


  .divider::before {
    content: "";
    display: inline-block;
    border-bottom: 0;
    border-top: 1px solid transparent;
    border-top-color: inherit;
    width: 35%;
  }

  .divider::after {
    border-bottom: 0;
    display: inline-block;
    border-top: 1px solid transparent;
    border-top-color: inherit;
    content: "";
    width: 35%;
  }
</style>