<template>
  <div class="contract-detail">
    <base-back content="订单详情" />
    <img class="detail" src="../assets/order-detail.png" alt="order-detail">
    <div style="margin: 32px 0 82px;">
      <base-button type="mainButton" name="查看运输单详情" @click="viewTransport" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    viewTransport() {
      this.$router.push('/personal/order-manage/transport-detail');
    }
  }
};
</script>

<style lang='scss' scoped>
.contract-detail {
  .detail {
    width: 100%;
    height: 1521px;
    margin-top: 20px;
  }
}
</style>
