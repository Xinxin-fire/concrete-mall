<template>
  <div class="my-transport">
    <base-tabs
      :title-list="titleList"
      :active-index="activeIndex"
      style="margin-bottom: 20px;"
      @select="handleSelect"
    />
    <div v-if="activeIndex === '2' || activeIndex === '1'" class="map-container">
      <img class="transport-detail" src="../assets/transport-detail.png" alt="transport-detail">
      <base-button type="openButton" name="展开地图" class="show-map" />
      <el-button
        type="primary"
        plain
        class="open-button"
        @click="buttonClick"
      >
        展开地图
        <i :class="[showMap ? 'el-icon-arrow-up' : 'el-icon-arrow-down', 'el-icon--right']" />
      </el-button>
      <div v-show="showMap" class="transport-map">
        <img class="map" src="../assets/map.png" alt="map">
      </div>
    </div>
    <div v-if="activeIndex !== '2'">
      <transform-item v-for="(item, index) in orderList" :key="index" :active-index="activeIndex" :item-obj="item" />
    </div>
  </div>
</template>

<script>
import BaseTabs from '@/components/baseTabs/BaseTabs.vue';
import TransformItem from '../components/transformItem/TransformItem.vue';
export default {
  components: { BaseTabs, TransformItem },
  data() {
    return {
      activeIndex: '2',
      showMap: false,
      titleList: [
        {
          id: '1',
          name: '全部'
        },
        {
          id: '2',
          name: '配送中'
        },
        {
          id: '3',
          name: '待签收'
        },
        {
          id: '4',
          name: '已签收'
        },
        {
          id: '5',
          name: '已退货'
        }
      ],
      orderList: [
        {
          operationButton1: '确认收货',
          operationButton2: '申请退货'
        },
        {
          operationButton1: '确认收货',
          operationButton2: '申请退货'
        }
      ],
      total: 100,
      pageSize: 10,
      currentPage: 1,
      pageSizes: [10, 20, 50, 100]
    };
  },
  methods: {
    buttonClick() {
      this.showMap = !this.showMap;
    },
    handleSelect(key) {
      this.activeIndex = key;
    }
  }
};
</script>

<style lang='scss' scoped>
.my-transport {
  padding-bottom: 59px;
  .map-container {
    position: relative;
    margin-bottom: 16px;
  }
  .transport-detail {
    width: 100%;
    height: 299px;
  }
  .transport-map {
    width: 100%;
    height: 635px;
    margin-top: -10px;
    padding: 20px 20px 0 20px;
    background: #FFFFFF;
    box-sizing: border-box;
  }
  .map {
    width: 100%;
    height: 595px;
  }
  .open-button {
    position: absolute;
    top: 22px;
    right: 24px;
    border: 1px solid #386BF5;
    border-radius: 10px;
    color: #386BF5;
    background: #FFFFFF;
  }
}
</style>
