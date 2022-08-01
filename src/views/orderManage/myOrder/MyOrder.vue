<template>
  <div class="my-order">
    <base-search :search-content="searchContent" :search-query="searchQuery" />
    <base-tabs :title-list="titleList" />
    <img class="table-head" src="../assets/table-head.png" alt="table-head">
    <div class="page-button">
      <base-button type="whiteButton" name="下一页" style="margin-left: 20px;" />
      <base-button type="whiteButton" name="上一页" />
    </div>
    <order-item v-for="(item, index) in orderList" :key="index" :item-obj="item" />
    <el-pagination
      v-if="total !== 0"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      :total="total"
      :current-page="currentPage"
      layout="total, sizes, prev, pager, next, jumper"
      background
      class="base-pagination"
    />
  </div>
</template>

<script>
import BaseSearch from '@/components/baseSearch/BaseSearch.vue';
import BaseTabs from '@/components/baseTabs/BaseTabs.vue';
import OrderItem from '../components/orderItem/OrderItem.vue';
export default {
  components: { BaseSearch, BaseTabs, OrderItem },
  data() {
    return {
      searchContent: {
        type: { type: 'input', label: '订单类型' },
        code: { type: 'select', options: [], label: '合同编号' },
        time: { type: 'daterange', label: '下单日期' }
      },
      searchQuery: {
        type: '',
        code: '',
        time: ''
      },
      titleList: [
        {
          id: '1',
          name: '全部'
        },
        {
          id: '2',
          name: '待支付'
        },
        {
          id: '3',
          name: '待分配供应商'
        },
        {
          id: '4',
          name: '待确认'
        },
        {
          id: '5',
          name: '已确认'
        },
        {
          id: '6',
          name: '供货中'
        },
        {
          id: '7',
          name: '已完结'
        },
        {
          id: '8',
          name: '已取消'
        }
      ],
      orderList: [
        {
          type: 'temp',
          status: '等待买家付款',
          statusButton1: '订单详情',
          operationButton1: '立即付款',
          operationButton2: '取消订单',
          src: require('../assets/td2-1.png')
        },
        {
          type: 'contract',
          status: '已确认',
          statusButton1: '订单详情',
          operationButton2: '取消订单',
          src: require('../assets/td2-1.png')
        },
        {
          type: 'contract',
          status: '待确认',
          statusButton1: '订单详情',
          src: require('../assets/td2-1.png')
        },
        {
          type: 'contract',
          status: '供货中',
          statusButton1: '订单详情',
          statusButton2: '查看物流',
          operationButton1: '完结',
          src: require('../assets/td2-2.png')
        },
        {
          type: 'contract',
          status: '已完结',
          statusButton1: '订单详情',
          statusButton2: '查看物流',
          operationButton1: '评价',
          src: require('../assets/td2-3.png')
        },
        {
          type: 'contract',
          status: '已完结',
          statusButton1: '订单详情',
          statusButton2: '查看评价',
          src: require('../assets/td2-3.png')
        },
        {
          type: 'contract',
          status: '待分配供应商',
          statusButton1: '订单详情',
          statusButton2: '查看物流',
          operationButton2: '取消订单',
          src: require('../assets/td2-1.png')
        },
        {
          type: 'contract',
          status: '已取消',
          statusButton1: '订单详情',
          src: require('../assets/td2-1.png')
        }
      ],
      total: 100,
      pageSize: 10,
      currentPage: 1,
      pageSizes: [10, 20, 50, 100]
    };
  }
};
</script>

<style lang='scss' scoped>
.my-order {
  width: 100%;
}
.table-head {
  width: 100%;
  height: 60px;
  margin-top: 28px;
}
.page-button {
  margin: 14px 0;
  display: flex;
  flex-direction: row-reverse;
}
.base-pagination {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 72px;
  margin-top: 20px;
  padding-right: 26px;
  background: #FFFFFF;
  margin-bottom: 56px;
}
</style>
