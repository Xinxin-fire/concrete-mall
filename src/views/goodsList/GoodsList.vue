<template>
  <div class="goods-list">
    <div class="img-container">
      <img class="bread-crumb" src="./assets/bread-crumb.png" alt="bread-crumb">
    </div>
    <div>
      <img class="head-filter" src="./assets/head-filter.png" alt="head-filter">
    </div>
    <div class="goods-container" @click="toDetail">
      <img
        v-for="(goods, index) in imageList"
        :key="index"
        class="goods-image"
        :src="goods.url"
        alt="goods-image"
      >
    </div>
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
export default {
  data() {
    return {
      total: 100,
      pageSize: 10,
      currentPage: 1,
      imageList: [
        { url: require('@/views/home/images/c10.png') },
        { url: require('@/views/home/images/c10.png') },
        { url: require('@/views/home/images/c15.png') },
        { url: require('@/views/home/images/c15.png') },
        { url: require('@/views/home/images/c20.png') },
        { url: require('@/views/home/images/c25.png') },
        { url: require('@/views/home/images/c30.png') },
        { url: require('@/views/home/images/c35.png') },
        { url: require('@/views/home/images/c40.png') },
        { url: require('@/views/home/images/c45.png') }
      ]
    };
  },
  methods: {
    toDetail() {
      this.$router.push('/detail');
    }
  }
};
</script>

<style lang='scss' scoped>
.goods-list {
  background: #f6f7f8;
  padding: 0 160px 56px;
  .img-container {
    height: 60px;
    display: flex;
    align-items: center;
  }
  .bread-crumb {
    width: 139.3px;
    height: 26px;
  }
  .head-filter {
    width: 100%;
    height: 68px;
  }
  .goods-container {
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 20px;
    .goods-image {
      width: 280px;
      flex: 1;
      height: 425px;
      margin-right: 20px;
      margin-bottom: 20px;
      border: 1px solid transparent;
      cursor: pointer;
      &:nth-child(5n) {
        margin-right: 0;
      }
      &:hover {
        border: 1px solid #386BF5;
      }
    }
  }
}
.base-pagination {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 72px;
  margin-top: 20px;
  padding-right: 26px;
  background: #FFFFFF;
}
</style>
