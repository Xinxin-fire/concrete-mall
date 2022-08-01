<template>
  <div class="contract">
    <img class="contract-state" src="../assets/contract-state.png" alt="contract-state">
    <base-table
      class="contract-table"
      :need-index="true"
      :table-head="tableHead"
      :cell-class-name="cellClassName"
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
    cellClassName({ row, column }) {
      if (column.label === '合同状态') {
        switch (row.status) {
          case '已通过':
            return 'pass-cell';
          case '供货中':
            return 'supply-cell';
          case '完结':
            return 'end-cell';
          case '已终止':
            return 'termination-cell';
          default:
            return 'end-cell';
        }
      }
    },
    isShowButton(row, item) {
      if (row.status === '完结' && item === '完结') {
        return false;
      } else {
        return true;
      }
    },
    tableButtonClick(item, row) {
      if (item === '详情') {
        this.$router.push('/personal/personalInfo/contract-detail');
      } else if (item === '完结') {
        this.$confirm('完结后，将不能继续使用该合同下单，确定完结吗？', '完结合同', {
          confirmButtonText: '确认完结',
          cancelButtonText: '我再想想',
          type: 'warning'
        }).then(() => {
          console.log('完结');
        });
      } else {
        this.$router.push('/personal/order-manage/my-order');
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
::v-deep .pass-cell .cell {
  width: 70px;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: center;
  background: #D4E3FC;
  color: #0052D9;
  border-radius: 3px;
}
::v-deep .end-cell .cell {
  width: 70px;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: center;
  background: #BCEBDC;
  color: #00A870;
  border-radius: 3px;
}
::v-deep .supply-cell .cell {
  width: 70px;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: center;
  background: #F9E0C7;
  color: #ED7B2F;
  border-radius: 3px;
}
::v-deep .termination-cell .cell {
  width: 70px;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: center;
  background: #E7E7E7;
  color: rgba(0, 0, 0, 0.9);
  border-radius: 3px;
}
</style>
