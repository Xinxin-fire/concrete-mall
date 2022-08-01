<template>
  <div class="payment">
    <img v-if="!hasContract" class="step" src="./assets/step.png" alt="step">
    <img v-if="hasContract" class="step" src="./assets/contract-step.png" alt="step">
    <img
      v-if="!hasContract && step === 1"
      class="QR-code"
      src="./assets/QR-code.png"
      alt="QR-code"
      @click="nextStep"
    >
    <div v-if="hasContract || step === 2" class="payment-bottom">
      <img v-if="!hasContract && step === 2" class="payment-success" src="./assets/payment-success.png" alt="payment-success">
      <img v-if="hasContract" class="payment-success" src="./assets/submit-success.png" alt="payment-success">
      <div class="bottom-button">
        <base-button type="minorButton" name="订单详情" @click="toOrderDetail" />
        <base-button type="mainButton" name="返回首页" style="margin-left: 20px;" @click="toHome" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentView',
  data() {
    return {
      hasContract: false,
      step: 1
    };
  },
  created() {
    this.hasContract = this.$route.query.contract;
  },
  methods: {
    nextStep() {
      this.step = 2;
    },
    toOrderDetail() {
      this.$router.push('/personal/order-manage/order-detail');
    },
    toHome() {
      this.$router.push('/home');
    }
  }
};
</script>

<style lang='scss' scoped>
.payment {
  padding: 0 160px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: #F8F8F8;
  .step {
    margin: 70px 0 35px 180px;
    width: 1454px;
    height: 72px;
  }
  .QR-code {
    width: 100%;
    height: 816px;
    margin-bottom: 108px;
  }
  .payment-success {
    // margin: 70px 0 35px;
    width: 228px;
    height: 195px;
  }
  .payment-bottom {
    width: 100%;
    height: 594px;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 100px;
    margin-bottom: 108px;
    background: #FFFFFF;
    align-content: flex-start;
    .bottom-button {
      width: 100%;
      height: 80px;
      margin-top: 40px;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
