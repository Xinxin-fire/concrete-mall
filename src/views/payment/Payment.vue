<template>
  <div class="payment">
    <img class="step" src="./assets/step.png" alt="step">
    <img class="QR-code" src="./assets/QR-code.png" alt="QR-code">
  </div>
</template>

<script>
export default {
  name: 'PaymentView',
  data() {
    return {
    };
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
    // margin: 70px 0 35px;
    width: 1600px;
    height: 816px;
  }
}
</style>
