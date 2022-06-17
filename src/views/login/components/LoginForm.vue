<template>
  <div class="loginForm">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="密码登录" name="first" />
      <el-tab-pane label="短信登录" name="second" />
    </el-tabs>
    <el-form ref="loginForm" :model="loginForm" :rules="rules" class="form">
      <el-form-item class="form-item form-input" prop="title">
        <el-input v-model="loginForm.telephone" placeholder="请输入您的手机号" type="input" />
      </el-form-item>
      <el-form-item class="form-item form-input" prop="title">
        <el-input v-model="loginForm.password" placeholder="请输登录密码" type="input" />
      </el-form-item>
      <el-form-item class="agree" prop="title">
        <el-checkbox v-model="isAgree">已阅读并同意 《服务条款》《法律声明》《隐私政策》</el-checkbox>
      </el-form-item>
    </el-form>
    <el-button type="primary" class="login-button">登录</el-button>
    <div class="bottom">
      <span class="left">忘记密码?</span>
      <span class="right">立即注册</span>
    </div>
  </div>
</template>

<script>
import { A } from '@/utils/common';
console.log(A);
export default {
  name: 'LoginForm',
  data() {
    return {
      activeName: 'first',
      loginForm: {
        telephone: '',
        password: ''
      },
      isAgree: false
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="scss" scoped>
.loginForm {
  position: absolute;
  width: 471px;
  height: 530px;
  background: #FFFFFF;
  border-radius: 3px;
  left: 50%;
  top: 50%;
  transform: translate(0, -50%);
  padding: 50px 30px;
}
.form {
  margin-top: 36px;
  .form-input {
    height: 48px;
  }
  .agree {
    color: var(--minor-color);
  }
}
.bottom {
  margin-top: 20px;
  font-size: 16px;
  .right {
    float: right;
    color: var(--primary-color);
  }
}

.login-button {
  width: 100%;
  height: 48px;
}
/* el-tabs组件样式穿透 */
::v-deep .el-tabs__nav-wrap::after {
  content: none;
}
::v-deep .el-tabs__item {
  font-weight: 500;
  font-size: 25px;
  color: var(--head-color)
}

/* el-input样式穿透 */
::v-deep .el-input__inner {
  height: 48px;
}

</style>
