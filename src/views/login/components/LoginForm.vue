<template>
  <div class="loginForm">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="密码登录" name="password">
        <el-form ref="password" :model="loginForm" :rules="rules" class="form">
          <el-form-item class="form-item form-input" prop="telephone">
            <el-input v-model="loginForm.telephone" placeholder="请输入您的手机号" />
          </el-form-item>
          <el-form-item class="form-item form-input" prop="password">
            <el-input v-model="loginForm.password" type="password" placeholder="请输入登录密码" />
          </el-form-item>
          <el-form-item class="agree" prop="agree">
            <el-checkbox v-model="isAgree">
              已阅读并同意
              <el-button class="text-button" type="text">《服务条款》《法律声明》《隐私政策》</el-button>
            </el-checkbox>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="短信登录" name="message">
        <el-form ref="message" :model="loginForm" :rules="rules" class="form">
          <el-form-item class="form-item form-input" prop="telephone">
            <el-input v-model="loginForm.telephone" placeholder="请输入您的手机号" />
          </el-form-item>
          <el-form-item class="form-item form-input" prop="password">
            <el-input v-model="loginForm.password" placeholder="请输入验证码" style="width: 245px;" />
            <el-button plain class="code-button">获取验证码</el-button>
          </el-form-item>
          <el-form-item class="agree" prop="agree">
            <el-checkbox v-model="isAgree">
              已阅读并同意
              <el-button class="text-button" type="text">《服务条款》《法律声明》《隐私政策》</el-button>
            </el-checkbox>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>

    <el-button type="primary" class="login-button" @click="toHome">登录</el-button>
    <div class="bottom">
      <span class="left">{{ activeName === 'password' ? '忘记密码?' : '收不到验证码？' }}</span>
      <span class="right">立即注册</span>
    </div>
  </div>
</template>

<script>
import { setToken } from '@/utils/cookies';
export default {
  name: 'LoginForm',
  data() {
    return {
      activeName: 'password',
      loginForm: {
        telephone: '',
        password: ''
      },
      isAgree: false,
      rules: {
        telephone: { required: true, message: '请输入手机号', trigger: 'change' },
        password: { required: true, message: '请输入密码', trigger: 'change' }
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    toHome() {
      if (this.activeName === 'password') {
        this.$refs.password.validate((valid) => {
          if (valid) {
            if (this.loginForm.telephone !== 'admin' || this.loginForm.password !== '123456') {
              this.$message.error('账号或密码不正确');
              return;
            }
            setToken('123456');
            this.$store.commit('user/SET_TOKEN', '123456');
            this.$router.push('/');
          }
        });
      }
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
    .code-button {
      width: 148px;
      height: 48px;
      margin-left: 16px;
    }
  }
  .agree {
    color: #999999;
    .text-button {
       color: #386BF5;
    }
  }
}
.bottom {
  margin-top: 20px;
  font-size: 16px;
  .left {
    color: #999999;
  }
  .right {
    float: right;
    color: #386BF5;
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
  color: #333333;
}

/* el-input样式穿透 */
::v-deep .el-input__inner {
  height: 48px;
}

</style>
