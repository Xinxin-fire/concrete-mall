<template>
  <div class="head">
    <div class="left">
      <SvgIcon icon-class="point" />
      陕西 西安市
    </div>
    <div v-if="!$store.getters.token" class="right">
      你好，欢迎来到砼易商城，请
      <base-button name="登录" type="textButton" @click="toLogin" />
      &nbsp; &nbsp; | &nbsp; &nbsp; 免费注册
    </div>
    <div v-if="$store.getters.token && $store.getters.path === 'home'" class="right">
      <el-button type="text" @click="toHome">首页</el-button> &nbsp; | &nbsp;
      <el-button type="text" @click="toPersonal">用户中心</el-button> &nbsp; | &nbsp;
      <el-button type="text" @click="loginOut">退出登录</el-button>
    </div>
    <div v-if="$store.getters.token && $store.getters.path === 'personal'" class="right">
      <el-button type="text" @click="toHome">砼易商城首页</el-button> &nbsp; | &nbsp;
      <el-button type="text" @click="loginOut">退出登录</el-button>
    </div>
  </div>
</template>

<script>
import { removeToken } from '@/utils/cookies';
export default {
  name: 'HeadView',
  mounted() {
    console.log(this.$route);
  },
  methods: {
    toLogin() {
      this.$router.push('/login');
    },
    toHome() {
      this.$router.push('/home');
    },
    toPersonal() {
      this.$router.push('/personal');
    },
    loginOut() {
      this.$router.push('/login');
      removeToken();
      this.$store.commit('user/SET_TOKEN', '');
    }
  }
};
</script>

<style lang="scss" scoped>
.head {
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  padding: 0 160px;
  background: #F6F7F8;
  .right {
    float: right;
    .el-button {
      color: #666666;
      &:hover {
        color: #386BF5;
      }
    }
  }
}
</style>

