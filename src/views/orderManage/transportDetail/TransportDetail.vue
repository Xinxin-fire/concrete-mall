<template>
  <div class="contract-detail">
    <base-back content="运输单详情" />
    <img class="detail" src="../assets/transport.png" alt="transport-detail">
    <div style="margin: 32px 0 82px;">
      <base-button type="minorButton" name="退货" style="margin-right: 16px;" />
      <base-button type="mainButton" name="签收" />
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
    height: 1490px;
    margin-top: 20px;
  }
}
</style>
