<template>
  <div class="contract">
    <img class="contract-state" src="../assets/contract-state.png" alt="contract-state">
    <base-table
      class="contract-table"
      :need-index="true"
      :table-head="tableHead"
      :table-data="tableData"
      :operation-list="operationList"
      :total="100"
      :is-show-button="isShowButton"
      @tableButtonClick="tableButtonClick"
    />
  </div>
</template>

<script>
import BaseTable from '@/components/baseTable/BaseTable.vue';
export default {
  name: 'ContractView',
  components: { BaseTable },
  data() {
    return {
      operationList: ['详情', '完结', '对应订单'],
      tableData: [
        {
          code: 'SJDW0030',
          name: '中国铁建大桥工程局集团有限公司',
          time: '2022-01-01 至 2025-01-01',
          status: '已通过',
          file: '新华村合同GT3453569306.pdf'
        },
        {
          code: 'SJDW0030',
          name: '中国铁建大桥工程局集团有限公司',
          time: '2022-01-01 至 2025-01-01',
          status: '完结',
          file: '新华村合同GT3453569306.pdf'
        },
        {
          code: 'SJDW0030',
          name: '中国铁建大桥工程局集团有限公司',
          time: '2022-01-01 至 2025-01-01',
          status: '已通过',
          file: '新华村合同GT3453569306.pdf'
        },
        {
          code: 'SJDW0030',
          name: '中国铁建大桥工程局集团有限公司',
          time: '2022-01-01 至 2025-01-01',
          status: '已通过',
          file: '新华村合同GT3453569306.pdf'
        },
        {
          code: 'SJDW0030',
          name: '中国铁建大桥工程局集团有限公司',
          time: '2022-01-01 至 2025-01-01',
          status: '已通过',
          file: '新华村合同GT3453569306.pdf'
        },
        {
          code: 'SJDW0030',
          name: '中国铁建大桥工程局集团有限公司',
          time: '2022-01-01 至 2025-01-01',
          status: '已通过',
          file: '新华村合同GT3453569306.pdf'
        },
        {
          code: 'SJDW0030',
          name: '中国铁建大桥工程局集团有限公司',
          time: '2022-01-01 至 2025-01-01',
          status: '已通过',
          file: '新华村合同GT3453569306.pdf'
        },
        {
          code: 'SJDW0030',
          name: '中国铁建大桥工程局集团有限公司',
          time: '2022-01-01 至 2025-01-01',
          status: '已通过',
          file: '新华村合同GT3453569306.pdf'
        },
        {
          code: 'SJDW0030',
          name: '中国铁建大桥工程局集团有限公司',
          time: '2022-01-01 至 2025-01-01',
          status: '已通过',
          file: '新华村合同GT3453569306.pdf'
        },
        {
          code: 'SJDW0030',
          name: '中国铁建大桥工程局集团有限公司',
          time: '2022-01-01 至 2025-01-01',
          status: '已通过',
          file: '新华村合同GT3453569306.pdf'
        }
      ],
      tableHead: [
        { prop: 'code', label: '合同编号', minWidth: '100' },
        { prop: 'name', label: '工程名称', minWidth: '200' },
        { prop: 'time', label: '有效期', minWidth: '150' },
        { prop: 'status', label: '合同状态', minWidth: '80' },
        { prop: 'file', label: '合同文件', minWidth: '180' }
      ]
    };
  },
  methods: {
    isShowButton(row, item) {
      if (row.status === '完结' && item === '完结') {
        return false;
      } else {
        return true;
      }
    },
    tableButtonClick(item, row) {
      console.log(item, row);
      if (item === '详情') {
        this.$router.push('/personal/personalInfo/contract-detail');
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.contract {
  .contract-state {
    width: 100%;
    height: 85px;
    margin-bottom: 20px;
  }
  .contract-table {
    margin-bottom: 54px;
  }
}
</style>
