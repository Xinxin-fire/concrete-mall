<template>
  <div class="head">
    <div class="left">
      <SvgIcon icon-class="point" />
      收获区域: 陕西 西安市
    </div>
    <div class="right">
      你好，欢迎来到砼易商城，请
      <el-button type="text" @click="toLogin">登录</el-button>
      &nbsp; &nbsp; | &nbsp; &nbsp; 免费注册
    </div>
  </div>
</template>

<script>

export default {
  name: 'HeadView',
  methods: {
    toLogin() {
      this.$router.push('/login');
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
  }
}
</style>

