<template>
  <div class="order-item">
    <div class="head">
      <div class="numbers">
        发货单号: 25645546846464645
      </div>
    </div>
    <div class="content">
      <div class="item block1">
        <div class="item-head">发12m³</div>
        <div>西安地铁4号线建设工程</div>
        <div>中山路至观澜大道段墙柱</div>
      </div>
      <div class="item block2">
        <div class="item-head">深圳是龙华新区新区大道3号工地板房 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  27.16元/方</div>
        <div>C35(160±20mm泵送)</div>
        <div>所属订单:5546846464645 </div>
        <div>累计方量:624方 累计车次:124车 </div>
      </div>
      <div class="item block3">
        <div>
          <span class="item-head">潘凡提: </span>
          &nbsp;&nbsp;
          <span>2020-01-01 11:02:23 发货</span>
        </div>
      </div>
      <div class="item block4">
        <div>{{ activeIndex === '3' ? '待签收' : activeIndex === '4' ? '已签收' : '已退货' }}</div>
      </div>
      <div class="item block5 button">
        <div v-if="activeIndex === '3'" class="item-head last-block">
          <SvgIcon class="clock" icon-class="clock" />
          <span>还剩29天23时</span>
        </div>
        <base-button
          v-if="itemObj.operationButton1 && activeIndex === '3'"
          type="contrastButton"
          :name="itemObj.operationButton1"
          @click="operationButton1Click(itemObj.operationButton1)"
        />
        <base-button
          v-if="itemObj.operationButton2 && activeIndex === '3'"
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
      default: () => { }
    },
    activeIndex: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {};
  },
  methods: {
    operationButton1Click(name) {
      this.$router.push('/personal/order-manage/take-delivery');
    },
    operationButton2Click() {
      this.$confirm('确定要退货吗？', '退货', {
        confirmButtonText: '确认退货',
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
  }
  .content {
    height: 150px;
    background: #FFFFFF;
    display: flex;
    .item {
      border-right: 1px solid #E6E6E6;
      padding: 20px 0 0 20px;
      font-size: 16px;
      color: #999999;
      line-height: 24px;
      box-sizing: border-box;
      .item-head {
        color: #333333;
      }
      .last-block {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        .clock {
          width: 24px;
          height: 24px;
          margin-right: 10px;
        }
      }
      &:last-child {
        border-right: none;
        padding: 20px 0 0;
      }
    }
    .button {
      display: flex;
      justify-content: center;
      flex-flow: row wrap;
      align-content: flex-start;
    }
    .block1 {
      width: 284px;
    }
    .block2 {
      width: 470px;
      flex: 1;
    }
    .block3 {
      width: 360px;
    }
    .block4 {
      width: 104px;
    }
    .block5 {
      width: 164px;
    }
  }
}
::v-deep .button .base-button {
  flex: 100%;
  display: flex;
  justify-content: center;
}
</style>
