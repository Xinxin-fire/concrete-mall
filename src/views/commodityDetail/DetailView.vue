<template>
  <div class="detail">
    <CommodityType />
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="购买信息" name="first">
        <PaymentInfo />
      </el-tab-pane>
      <el-tab-pane label="交易流程" name="second">
        <div class="container">
          <img class="deal" src="./assets/deal.png" alt="deal">
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import CommodityType from './components/commodityType/CommodityType.vue';
import PaymentInfo from './components/paymentInfo/PaymentInfo.vue';

export default {
  name: 'DetailView',
  components: { CommodityType, PaymentInfo },
  data() {
    return {
      activeName: 'first'
    };
  },
  methods: {
    handleClick() {
      console.log(1);
    }
  }
};
</script>
<style lang="scss" scoped>
.detail {
  padding: 0 160px;
  margin-top: 70px;
}
.container {
  text-align: center;
  padding: 64px 0;
}
.deal {
  width: 1062px;
  height: 605px;
}
::v-deep .el-tabs__header{
  background: #F5F5F5;
}
::v-deep .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
    border-bottom-color: var(--primary-color);
    color: var(--primary-color);
}
::v-deep .el-tabs__item{
  height: 64px;
  line-height: 64px;
  background: #fff;
  border-bottom: 1px solid #F0F2F5;
  &:hover {
    color: #386BF5;
  }
}
::v-deep .el-tabs--card>.el-tabs__header .el-tabs__item {
  border-bottom-color: #E4E7ED;
}

</style>

