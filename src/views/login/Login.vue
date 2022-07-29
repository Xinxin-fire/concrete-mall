<template>
  <div class="login">
    <!-- 登录 -->
    <img class="login-bg" src="@/assets/login/login-bg.png" alt="back-ground">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from './components/LoginForm';
export default {
  name: 'LoginView',
  components: { LoginForm }
};
</script>

<style lang="scss" scoped>
  .login {
    height: 100%;
    background: #386BF5;
  }
  .login-bg {
    width: 60%;
    height: 100%;
    float: left;
  }
</style>
