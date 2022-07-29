<template>
  <div class="my-order">
    <base-search :search-content="searchContent" :search-query="searchQuery" />
  </div>
</template>

<script>
import BaseSearch from '@/components/baseSearch/BaseSearch.vue';
export default {
  components: { BaseSearch },
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
      }
    };
  }
};
</script>

<style lang='scss' scoped>
.my-order {
  width: 100%;
}
</style>
