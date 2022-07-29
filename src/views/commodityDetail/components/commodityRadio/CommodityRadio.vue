<template>
  <div class="commodity-radio">
    <div class="select-desc">{{ title }}</div>
    <div class="select">
      <el-radio-group v-model="value">
        <el-radio-button v-for="(item, index) in selectList" :key="index" :label="item" />
      </el-radio-group>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CommodityRadio',
  props: {
    title: {
      type: String,
      default: ''
    },
    selectList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      value: ''
    };
  }
};
</script>
<style lang="scss" scoped>
@import './commodityRadio.scss'
</style>

