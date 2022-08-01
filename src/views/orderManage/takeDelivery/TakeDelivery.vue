<template>
  <div class="enter-payment">
    <base-head title="确认收货" />
    <div class="content">
      <div class="delivery-info">
        <div class="title">签收信息</div>
        <div class="row">
          <div class="item">
            <span class="label">送货单编号:</span>
            <span class="value">YH75426426434341</span>
          </div>
          <div class="item">
            <span class="label">浇筑部位:</span>
            <span class="value">墙柱</span>
          </div>
        </div>
        <div class="row">
          <div class="item">
            <span class="label">标号:</span>
            <span class="value">C15</span>
          </div>
          <div class="item">
            <span class="label">运送方量:</span>
            <span class="value">30</span>
          </div>
        </div>
      </div>
      <BaseForm
        class="form"
        :form="form"
        :rules="rules"
        :form-content="formContent"
        @buttonClick="buttonClick"
        @selectChange="selectChange"
      />
      <div class="bottom-button">
        <base-button type="cancelButton" name="取消" style="margin-right: 16px;" @click="goback" />
        <base-button type="confirmButton" name="确定" @click="confirmEnter" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseHead from '@/components/baseHead/BaseHead.vue';
export default {
  components: { BaseHead },
  data() {
    return {
      form: {
        adress: '958954654524545',
        pourSite: '林克',
        bank: '中国银行龙华支行'
      },
      formContent: {
        projectName: { prop: 'projectName', label: '签收方量', type: 'input' },
        remark: { prop: 'remark', label: '备注', type: 'textarea' }
      },
      rules: {
        projectName: { required: true, message: '请输入签收方量', trigger: 'change' },
        remark: { required: true, message: '请输入备注', trigger: 'change' }
      }
    };
  },
  methods: {
    goback() {
      this.$router.back(-1);
    },
    confirmEnter() {
      this.$message({
        message: '已确认收货',
        type: 'success',
        duration: '500',
        onClose: () => {
          this.$router.back(-1);
        }
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.enter-payment {
  padding: 26px 160px 0;
  .content {
    height: 645px;
    border: 1px solid #E6E6E6;
    padding-top: 40px;
    padding-left: 64px;
    .delivery-info {
      margin-bottom: 30px;
      .title {
        font-weight: 600;
        font-size: 18px;
        color: #313233;
        line-height: 40px;
      }
      .row {
        display: flex;
        .item {
          line-height: 50px;
          font-size: 14px;
          width: 400px;
          &:first-child {
            margin-right: 20px;
          }
          .label {
            display: inline-block;
            width: 100px;
            color: #969799;
          }
          .value {
            color: #313233;
          }
        }
      }
    }
    .bottom-button {
      margin-top: 10px;
      margin-left: 124px;
    }
  }
}
</style>
