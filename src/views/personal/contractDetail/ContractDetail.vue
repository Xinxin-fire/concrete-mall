<template>
  <div class="contract-detail">
    <el-page-header class="page-head" content="合同详情" @back="goBack" />
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
  },
  methods: {
    goBack() {
      this.$router.push('/personal/personalInfo/contract');
    }
  }
};
</script>

<style lang='scss' scoped>
.contract-detail {
  .page-head {
    display: flex;
    align-items: center;
    height: 64px;
    background: #FFFFFF;
    padding-left: 15px;
  }
  .detail {
    width: 100%;
    height: 1095px;
    margin-top: 20px;
  }
}
</style>
