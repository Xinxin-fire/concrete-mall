<template>
  <div class="base-table">
    <el-table
      ref="baseTable"
      :data="tableData"
      :header-cell-style="headrCellStyle"
      :cell-style="cellStyle"
      :show-header="showHeader"
      :header-cell-class-name="headerCellClassName"
      :max-height="maxHeight"
      :show-summary="showSummary"
      :summary-method="summaryMethod"
      :span-method="spanMethod"
      :highlight-current-row="highlightCurrentRow"
      :row-class-name="rowClassName"
      @row-click="rowClick"
      @selection-change="selectChange"
      @filter-change="filterChange"
    >
      <el-table-column
        v-if="needIndex"
        type="index"
        width="60"
        label="序号"
        :index="indexMethod"
      />
      <el-table-column
        v-for="column in tableHead"
        :key="column.prop"
        :prop="column.prop"
        :label="column.label"
        :width="column.width"
        :min-width="column.minWidth"
      />
      <el-table-column v-if="operationList.length !== 0" label="操作" width="180">
        <template slot-scope="scope">
          <span v-for="item in operationList" :key="item">
            <el-button
              v-if="isShowButton(scope.row, item)"
              type="text"
              size="small"
              style="margin-left: 6px"
              @click="tableButtonClick(item, scope.row)"
            >{{ item }}</el-button>
          </span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="total !== 0 && needPagination"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      :total="total"
      :current-page="currentPage"
      layout="total, sizes, prev, pager, next, jumper"
      background
      class="base-pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  props: {
    tableHead: {
      type: Array,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    },
    // 操作按钮列表
    operationList: {
      type: Array,
      default: () => []
    },
    isShowButton: {
      type: Function,
      default: () => { return true; }
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    tableLoading: {
      type: Boolean,
      default: false
    },
    needOperations: {
      type: Boolean,
      default: true
    },
    needCheckout: {
      type: Boolean,
      default: false
    },
    highlightCurrentRow: {
      type: Boolean,
      default: false
    },
    needAddOperation: {
      type: Boolean,
      default: true
    },
    needUploadOperation: {
      type: Boolean,
      default: false
    },
    needPagination: {
      type: Boolean,
      default: true
    },
    showSummary: {
      type: Boolean,
      default: false
    },
    summaryMethod: {
      type: Function,
      default: param => {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '合计';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
          } else {
            sums[index] = '';
          }
        });
        return sums;
      }
    },
    summaryColumns: {
      type: Array,
      default: () => []
    },
    total: {
      type: Number,
      default: 0
    },
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 50, 100]
    },
    needMearge: {
      type: Boolean,
      default: false
    },
    spanMethod: {
      type: Function,
      default: () => {}
    },
    rowClassName: {
      type: Function,
      default: () => {}
    },
    checkSelectTable: {
      type: Function,
      default: () => {}
    },
    customOperationObj: {
      type: Object,
      default: () => {}
    },
    headerCellClassName: {
      type: Function,
      default: () => {}
    },
    needIndex: {
      type: Boolean,
      default: false
    },
    maxHeight: {
      type: Number || String,
      default: 660
    },
    operationWidth: {
      type: Number,
      default: 150
    }
  },
  data() {
    return {
      headrCellStyle: {
        height: '60px',
        background: '#F2F3F5',
        padding: '0 0 0 16px'
      },
      cellStyle: {
        height: '60px',
        padding: '0 0 0 16px'
      }
    };
  },
  methods: {
    indexMethod(index) {
      return (this.currentPage - 1) * this.pageSize + index + 1;
    },
    filterChange(filter) {
      this.$emit('filterChange', filter);
    },
    selectChange(selection) {
      this.$emit('selectChange', selection);
    },
    rowClick(row, column, event) {
      this.$emit('rowClick', row, column, event);
    },
    tableButtonClick(item, row) {
      this.$emit('tableButtonClick', item, row);
    },
    handleSizeChange(val) {
      this.$emit('sizeChange', val);
    },
    handleCurrentChange(val) {
      this.$emit('currentChange', val);
    }
  }
};
</script>

<style lang="scss" scoped>
.base-pagination {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 72px;
  margin-top: 20px;
  padding-right: 26px;
  background: #FFFFFF;
}
::v-deep .el-table .el-table__cell.gutter {
  background: #F2F3F5;
}
</style>
