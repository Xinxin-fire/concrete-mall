<template>
  <div class="my-statement">
    <base-search :search-content="searchContent" :search-query="searchQuery" />
    <base-tabs
      :title-list="titleList"
      :active-index="activeIndex"
      style="margin-bottom: 20px;"
      @select="handleSelect"
    />
    <base-table
      class="contract-table"
      :table-head-obj="tableHeadObj"
      :table-head="tableHead"
      :table-data="tableData"
      :cell-class-name="cellClassName"
      :total="100"
      @headButtonClick="headButtonClick"
    />
  </div>
</template>

<script>
import BaseTabs from '@/components/baseTabs/BaseTabs.vue';
import BaseSearch from '@/components/baseSearch/BaseSearch.vue';
export default {
  components: { BaseSearch, BaseTabs },
  data() {
    return {
      searchContent: {
        contract: { type: 'select', options: [], label: '合同', span: 8 },
        status: { type: 'select', options: [], label: '状态', span: 8 },
        code: { type: 'input', label: '单号', span: 8 },
        time: { type: 'daterange', label: '付款日期', span: 10 }
      },
      searchQuery: {},
      activeIndex: '1',
      titleList: [
        {
          id: '1',
          name: '全部'
        },
        {
          id: '2',
          name: '待确认'
        },
        {
          id: '3',
          name: '已确认'
        },
        {
          id: '4',
          name: '已驳回'
        }
      ],
      tableHeadObj: {
        buttonList: ['导出', '录入付款信息']
      },
      tableData: [
        {
          code: 'SJDW0030',
          time: '付款时间: 2022-10-20 12:34:21' + '\n' + '付款人: 中国铁建大桥工程局集团有限公司' + '\n' + '付款金额: 10000.00元',
          site: '收款账号: 29990984877523' + '\n' + '收款户名: 砼易商城有限公司' + '\n' + '开户行: 中国银行深圳清湖支行',
          project: '三一云都工程: 23455565  本次支付金额: 500.00' + '\n' + '三一云都工程: 23455565  本次支付金额: 500.00' + '\n' + '三一云都工程: 23455565 本次支付金额: 500.00',
          totalMount: require('../assets/payOrder.png'),
          status: '待平台确认'
        },
        {
          code: 'SJDW0030',
          time: '付款时间: 2022-10-20 12:34:21' + '\n' + '付款人: 中国铁建大桥工程局集团有限公司' + '\n' + '付款金额: 10000.00元',
          site: '收款账号: 29990984877523' + '\n' + '收款户名: 砼易商城有限公司' + '\n' + '开户行: 中国银行深圳清湖支行',
          project: '三一云都工程: 23455565  本次支付金额: 500.00' + '\n' + '三一云都工程: 23455565  本次支付金额: 500.00' + '\n' + '三一云都工程: 23455565 本次支付金额: 500.00',
          totalMount: require('../assets/payOrder.png'),
          status: '已确认'
        },
        {
          code: 'SJDW0030',
          time: '付款时间: 2022-10-20 12:34:21' + '\n' + '付款人: 中国铁建大桥工程局集团有限公司' + '\n' + '付款金额: 10000.00元',
          site: '收款账号: 29990984877523' + '\n' + '收款户名: 砼易商城有限公司' + '\n' + '开户行: 中国银行深圳清湖支行',
          project: '三一云都工程: 23455565 本次支付金额: 500.00' + '\n' + '三一云都工程: 23455565  本次支付金额: 500.00' + '\n' + '三一云都工程: 23455565 本次支付金额: 500.00',
          totalMount: require('../assets/payOrder.png'),
          status: '已驳回'
        }
      ],
      tableHead: [
        { prop: 'code', label: '编号', minWidth: '100' },
        { prop: 'time', label: '付款信息', minWidth: '260' },
        { prop: 'site', label: '收款账户信息', minWidth: '200' },
        { prop: 'project', label: '对应结算单', minWidth: '300' },
        { prop: 'totalMount', label: '付款凭证', type: 'img', minWidth: '100' },
        { prop: 'status', label: '状态', minWidth: '100' }
      ]
    };
  },
  methods: {
    cellClassName({ row, column }) {
      if (column.label === '状态') {
        return 'status-cell';
      }
    },
    headButtonClick(item) {
      if (item === '录入付款信息') {
        this.$router.push('/personal/settle-center/enter-payment');
      }
    },
    handleSelect(key) {
      this.activeIndex = key;
    }
  }
};
</script>

<style lang='scss' scoped>
::v-deep .status-cell .cell {
  font-size: 14px;
  color: #FE4B4A;
}
</style>
