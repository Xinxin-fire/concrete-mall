<template>
  <div class="my-statement">
    <base-search :search-content="searchContent" :search-query="searchQuery" />
    <base-table
      class="contract-table"
      :table-head-obj="tableHeadObj"
      :table-head="tableHead"
      :table-data="tableData"
      :operation-list="operationList"
      :cell-class-name="cellClassName"
      :is-show-button="isShowButton"
      :total="100"
      @tableButtonClick="tableButtonClick"
    />
    <el-dialog :visible.sync="visible" width="30%">
      <div slot="title" class="dialog-title">
        确认结算单
      </div>
      <div class="content">
        <span class="desc">确认结果</span>
        <el-radio v-model="radio" label="1">确认通过</el-radio>
        <el-radio v-model="radio" label="2">不通过</el-radio>
      </div>
      <div slot="footer" class="dialog-footer">
        <base-button type="cancelButton" name="取消" style="margin-right: 16px;" @click="visible = false" />
        <base-button type="confirmButton" name="确定" @click="visible = false" />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import BaseSearch from '@/components/baseSearch/BaseSearch.vue';
export default {
  components: { BaseSearch },
  data() {
    return {
      searchContent: {
        contract: { type: 'select', options: [], label: '合同', span: 8 },
        status: { type: 'select', options: [], label: '结算单状态', span: 8 },
        code: { type: 'input', label: '结算单号', span: 8 },
        time: { type: 'daterange', label: '下单日期', span: 10 },
        payment: { type: 'select', options: [], label: '支付类型', span: 10 }
      },
      searchQuery: {},
      tableHeadObj: {
        buttonList: ['导出'],
        openSettings: true
      },
      tableData: [
        {
          code: '结算单号: 34567890' + '\n' + '生成时间: 2022-12-20 12:34' + '\n' + '工程: 中国铁建大桥工程',
          site: '中国铁建大桥工程局集团有限公司',
          project: '总金额: 23523.00' + '\n' + '混凝土金额: 23423.00' + '\n' + '运费金额: 2344.00' + '\n' + '泵送费金额: 2344.00' + '\n' + '补差价金额: 2344.00',
          totalMount: '签收方量: 234.00' + '\n' + '结算方量: 234.50',
          paymentStatus: '未支付',
          status: '待客户确认'
        },
        {
          code: '结算单号: 34567890' + '\n' + '生成时间: 2022-12-20 12:34' + '\n' + '工程: 中国铁建大桥工程',
          site: '中国铁建大桥工程局集团有限公司',
          project: '总金额: 23523.00' + '\n' + '混凝土金额: 23423.00' + '\n' + '运费金额: 2344.00' + '\n' + '泵送费金额: 2344.00' + '\n' + '补差价金额: 2344.00',
          totalMount: '签收方量: 234.00' + '\n' + '结算方量: 234.50',
          paymentStatus: '未支付',
          status: '已确认'
        },
        {
          code: '结算单号: 34567890' + '\n' + '生成时间: 2022-12-20 12:34' + '\n' + '工程: 中国铁建大桥工程',
          site: '中国铁建大桥工程局集团有限公司',
          project: '总金额: 23523.00' + '\n' + '混凝土金额: 23423.00' + '\n' + '运费金额: 2344.00' + '\n' + '泵送费金额: 2344.00' + '\n' + '补差价金额: 2344.00',
          totalMount: '签收方量: 234.00' + '\n' + '结算方量: 234.50',
          paymentStatus: '未支付',
          status: '已确认'
        }
      ],
      operationList: ['结算详情', '确认'],
      tableHead: [
        { prop: 'code', label: '单据信息', minWidth: '200' },
        { prop: 'site', label: '站点', minWidth: '200' },
        { prop: 'project', label: '金额', minWidth: '150' },
        { prop: 'totalMount', label: '方量', minWidth: '140' },
        { prop: 'paymentStatus', label: '支付状态', minWidth: '100', fixed: 'right' },
        { prop: 'status', label: '状态', minWidth: '100', fixed: 'right' }
      ],
      visible: false,
      radio: '1'
    };
  },
  methods: {
    isShowButton(row, item) {
      if (row.status !== '待客户确认' && item === '确认') {
        return false;
      } else {
        return true;
      }
    },
    cellClassName({ row, column }) {
      if (column.label === '支付状态') {
        switch (row.paymentStatus) {
          case '未支付':
            return 'not-payment';
          case '部分支付':
            return 'part-payment';
          case '已支付':
            return 'paymented';
          default:
            return 'paymented';
        }
      }
      if (column.label === '状态') {
        switch (row.status) {
          case '待客户确认':
            return 'not-confirm';
          case '已确认':
            return 'confirmed';
          default:
            return 'confirmed';
        }
      }
    },
    tableButtonClick(item) {
      if (item === '结算详情') {
        this.$router.push('/personal/settle-center/statement-detail');
      } else {
        this.visible = true;
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.my-statement {
  margin-bottom: 70px;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #313233;
  .desc {
    margin-right: 16px;
  }
  ::v-deep .el-radio__label{
    font-size: 16px;
  }
}
::v-deep .not-payment .cell {
  width: 70px;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: center;
  background: #F9E0C7;
  color: #ED7B2F;
  border-radius: 3px;
}
::v-deep .paymented .cell {
  width: 70px;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: center;
  background: #E7E7E7;
  color: rgba(0, 0, 0, 0.9);
  border-radius: 3px;
}
::v-deep .part-payment .cell {
  width: 80px;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: center;
  background: #D4E3FC;
  color: #0052D9;
  border-radius: 3px;
}
::v-deep .not-confirm .cell {
  color: #FE4B4A;
}
::v-deep .confirmed .cell {
  color: #45C186;
}
</style>
