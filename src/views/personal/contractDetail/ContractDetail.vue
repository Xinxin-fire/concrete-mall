<template>
  <div class="contract-detail">
    <base-back content="合同详情" />
    <img class="detail" src="../assets/contract-detail.png" alt="contract-detail">
    <div style="margin: 32px 0 82px;">
      <el-button class="finish" @click="finish">完结</el-button>
      <el-button type="primary" class="view-order" @click="viewOrder">查看对应订单</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  }
};
</script>

<style lang='scss' scoped>
.contract-detail {
  .detail {
    width: 100%;
    height: 1095px;
    margin-top: 20px;
  }
}
</style>
