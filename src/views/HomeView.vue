<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <el-button @click="toLogin">跳转</el-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  methods: {
    toLogin() {
      this.$router.push('/login');
    }
  }
};
</script>
