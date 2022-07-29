<template>
  <div class="goods">
    <div class="head">
      {{ title }}
    </div>
    <div class="content">
      <div class="left">
        <div v-for="(item, index) in bigClass" :key="index" class="item">
          {{ item }}
        </div>
      </div>
      <div class="right">
        <div v-for="(goods, index) in imageList" :key="index" class="item" @click="toDetail">
          <img class="goods-image" :src="goods.url" alt="goods-image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsView',
  props: {
    title: {
      type: String,
      default: ''
    },
    bigClass: {
      type: Array,
      default: () => []
    },
    imageList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    toDetail() {
      this.$router.push('/detail');
    }
  }
};
</script>

<style lang="scss" scoped>
@import './goods.scss';

</style>
