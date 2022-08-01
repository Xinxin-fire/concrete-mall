<template>
  <div class="back-head">
    <svg-icon icon-class="back" class="back" @click="goback" />
    <div class="content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  methods: {
    goback() {
      this.$router.back(-1);
    }
  }
};
</script>

<style lang='scss' scoped>
.back-head {
  height: 64px;
  display: flex;
  align-items: center;
  background: #fff;
  padding: 16px;
  box-sizing: border-box;
  .back {
    width: 22px;
    height: 22px;
    &:hover {
      cursor: pointer;
    }
  }
  .content {
    color: #1B1B1B;
    font-weight: 600;
    font-size: 22px;
    margin-left: 16px;
  }
}
</style>
