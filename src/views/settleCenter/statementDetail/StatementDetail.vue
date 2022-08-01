<template>
  <div class="statement-detail">
    <base-back content="结算详情" />
    <div class="content">
      <base-table
        class="contract-table"
        :table-head="tableHead"
        :table-data="tableData"
        :headr-cell-style="headrCellStyle"
        :total="100"
        :need-pagination="false"
        @tableButtonClick="tableButtonClick"
      />
      <div class="remark">
        <div>
          <span class="title">平台留言</span>
          <span class="desc">非常棒的买家！</span>
        </div>
        <div>
          <span class="title">确认说明</span>
          <span class="desc">非常满意，谢谢，下次还买</span>
        </div>
      </div>
    </div>
    <div style="margin: 32px 0 82px;">
      <base-button type="cancelButton" name="取消" style="margin-right: 16px;" @click="goback" />
      <base-button type="confirmButton" name="确定" @click="confirm" />
    </div>
    <el-dialog :visible.sync="visible" width="30%">
      <div slot="title" class="dialog-title">
        确认结算单
      </div>
      <div class="dialog-content">
        <div class="select-radio">
          <span class="desc">确认结果</span>
          <el-radio v-model="radio" label="1">确认通过</el-radio>
          <el-radio v-model="radio" label="2">不通过</el-radio>
        </div>
        <BaseForm
          v-if="radio === '2'"
          class="form"
          :form="form"
          :rules="rules"
          :form-content="formContent"
          label-width="150px"
        />
      </div>
      <div slot="footer" class="dialog-footer">
        <base-button type="cancelButton" name="取消" style="margin-right: 16px;" @click="visible = false" />
        <base-button type="confirmButton" name="确定" @click="visible = false" />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import BaseForm from '@/components/baseForm/BaseForm';
export default {
  components: { BaseForm },
  data() {
    return {
      form: {
        pourSite: '',
        remark: ''
      },
      formContent: {
        pourSite: { prop: 'pourSite', label: '不通过原因', type: 'input' },
        remark: { prop: 'pourSite', label: '说明', type: 'input' }
      },
      headrCellStyle: {
        height: '30px',
        background: '#F2F3F5',
        padding: '0 0 0 16px'
      },
      tableData: [
        {
          code: 'YSDH00300988',
          time: '2355644690',
          site: '中国铁建大桥三一云都工程',
          project: '沣东站',
          totalMount: 'C30 P4 细沙',
          unit: '8',
          paymentStatus: '8',
          distance: '10',
          price1: '9',
          price2: '18',
          price3: '28',
          status: '8'
        },
        {
          code: 'YSDH00300988',
          time: '2355644690',
          site: '中国铁建大桥三一云都工程',
          project: '沣东站',
          totalMount: 'C30 P4 细沙',
          unit: '8',
          paymentStatus: '8',
          distance: '10',
          price1: '9',
          price2: '18',
          price3: '28',
          status: '8'
        },
        {
          code: 'YSDH00300988',
          time: '2355644690',
          site: '中国铁建大桥三一云都工程',
          project: '沣东站',
          totalMount: 'C30 P4 细沙',
          unit: '8',
          paymentStatus: '8',
          distance: '10',
          price1: '9',
          price2: '18',
          price3: '28',
          status: '8'
        },
        {
          code: 'YSDH00300988',
          time: '2355644690',
          site: '中国铁建大桥三一云都工程',
          project: '沣东站',
          totalMount: 'C30 P4 细沙',
          unit: '8',
          paymentStatus: '8',
          distance: '10',
          price1: '9',
          price2: '18',
          price3: '28',
          status: '8'
        }
      ],
      tableHead: [
        { prop: 'code', label: '运输单号', minWidth: '100' },
        { prop: 'time', label: '对应订单', minWidth: '150' },
        { prop: 'site', label: '工程名称', minWidth: '250' },
        { prop: 'project', label: '站别', minWidth: '150' },
        { prop: 'totalMount', label: '商品', minWidth: '150' },
        { prop: 'unit', label: '配送方量', minWidth: '150' },
        { prop: 'paymentStatus', label: '签收方量', minWidth: '150' },
        { prop: 'status', label: '结算方量', minWidth: '150' },
        { prop: 'distance', label: '运输距离(km)', minWidth: '150' },
        { prop: '', label: '销售价格', align: 'center', type: 'multiColumn', minWidth: '150', children: [
          { prop: 'price1', label: '混凝土价格', minWidth: '150' },
          { prop: 'price2', label: '运输价格', minWidth: '150' },
          { prop: 'price3', label: '泵送价格', minWidth: '150' }
        ] }
      ],
      visible: false,
      radio: '1'
    };
  },
  methods: {
    goback() {
      this.$router.back(-1);
    },
    confirm() {
      this.visible = true;
    }
  }
};
</script>

<style lang='scss' scoped>
.statement-detail {
  width: 100%;
  .content {
    margin-top: 20px;
    padding: 20px;
    background: #fff;
  }
  .remark {
    margin-top: 40px;
    margin-left: 80px;
    height: 80px;
    font-size: 14px;
    .title {
      line-height: 30px;
      color: #313233;
    }
    .desc {
      line-height: 30px;
      margin-left: 20px;
      color: #969799;;
    }
  }
}
.select-radio {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #313233;
  margin-bottom: 24px;
  margin-right: 40px;
  .desc {
    margin-right: 16px;
  }
  ::v-deep .el-radio__label{
    font-size: 16px;
  }
}
::v-deep .el-input {
  width: 248px !important;
}
</style>
