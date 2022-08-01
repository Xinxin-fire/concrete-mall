<template>
  <div class="order-item">
    <div class="head">
      <div class="numbers">
        订单号: 25645546846464645
      </div>
      <div v-if="itemObj.type === 'temp'" class="order-temp">
        临时现金订单
      </div>
      <div v-if="itemObj.type === 'contract'" class="order-contract">
        正式合同订单
      </div>
    </div>
    <div class="content">
      <div class="item">
        <img class="td1" src="../../assets/td1.png" alt="td1">
      </div>
      <div class="item">
        <img class="td2" :src="itemObj.src" alt="td2-1">
      </div>
      <div class="item">
        <img class="td3" src="../../assets/td3.png" alt="td3">
      </div>
      <div class="item">
        <img class="td4" src="../../assets/td4.png" alt="td4">
      </div>
      <div class="item button">
        <base-button type="minortextButton" :name="itemObj.status" />
        <base-button
          v-if="itemObj.statusButton1"
          type="minortextButton"
          :name="itemObj.statusButton1"
          @click="statusButton1Click"
        />
        <base-button
          v-if="itemObj.statusButton2"
          type="minortextButton"
          :name="itemObj.statusButton2"
          @click="statusButton2Click(itemObj.statusButton2)"
        />
      </div>
      <div class="item button">
        <base-button
          v-if="itemObj.operationButton1"
          type="contrastButton"
          :name="itemObj.operationButton1"
          @click="operationButton1Click(itemObj.operationButton1)"
        />
        <base-button
          v-if="itemObj.operationButton2"
          type="minortextButton"
          style="margin-top: 6px;"
          :name="itemObj.operationButton2"
          @click="operationButton2Click"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemObj: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
    };
  },
  methods: {
    statusButton1Click() {
      this.$router.push('/personal/order-manage/order-detail');
    },
    statusButton2Click(name) {
      if (name === '查看物流') {
        this.$router.push('/personal/order-manage/my-transport');
      } else {
        this.$router.push('/personal/order-manage/evaluate');
      }
    },
    operationButton1Click(name) {
      if (name === '完结') {
        this.$confirm('完结后，平台将不再为该订单配送混凝土，确定完结吗？', '完结订单', {
          confirmButtonText: '确认完结',
          cancelButtonText: '我再想想',
          type: 'warning'
        }).then(() => {
          console.log('删除');
        });
      } else if (name === '立即付款') {
        this.$router.push('/payment');
      } else {
        this.$router.push('/personal/order-manage/evaluate');
      }
    },
    operationButton2Click() {
      this.$confirm('确定取消该订单吗？', '取消订单', {
        confirmButtonText: '确认取消',
        cancelButtonText: '我再想想',
        type: 'warning'
      }).then(() => {
        console.log('删除');
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.order-item {
  margin-bottom: 20px;
  border: 1px solid #E6E6E6;
  .head {
    height: 56px;
    background: #F1F1F1;
    display: flex;
    align-items: center;
    .numbers {
      font-size: 16px;
      color: #666666;
      margin-left: 25px;
    }
    .order-temp {
      font-size: 14px;
      color: #FFFFFF;
      margin-left: 25px;
      background: linear-gradient(180deg, #A9D5EE 0%, #86BFDF 100%);
      border: 1px solid #72B7E3;
      border-radius: 1px;
    }
    .order-contract {
      font-size: 14px;
      color: #FFFFFF;
      margin-left: 25px;
      background: linear-gradient(180deg, #FFBF7F 0%, #F0A65C 100%);
      border: 1px solid #FF891C;
      border-radius: 1px;
    }
  }
  .content {
    height: 150px;
    background: #FFFFFF;
    display: flex;
    .button {
      width: 140px;
      border: 1px solid #E6E6E6;
      display: flex;
      justify-content: center;
      flex-flow: row wrap;
      align-content: flex-start;
      padding-top: 20px;
    }
    .td1 {
      width: 378px;
    }
    .td2 {
      width: 437px;
    }
    .td3 {
      width: 140px;
    }
    .td4 {
      width: 140px;
    }
  }
}
::v-deep .button .base-button {
  flex: 100%;
  display: flex;
  justify-content: center;
}
</style>
