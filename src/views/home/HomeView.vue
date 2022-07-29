<template>
  <div class="home">
    <Swipper />
    <div class="main-content">
      <DataAnalysis />
      <Goods title="混凝土" :big-class="concreteBigClassList" :image-list="concreteImageList" />
      <Goods title="砂浆" :big-class="mortarBigClassList" :image-list="concreteImageList" />
    </div>
  </div>
</template>

<script>
import DataAnalysis from '@/views/home/components/DataAnalysis.vue';
import Goods from '@/views/home/components/goods/Goods.vue';
import Swipper from '@/views/home/components/Swipper.vue';
undefined;
export default {
  name: 'HomeView',
  components: { DataAnalysis, Goods, Swipper },
  data() {
    return {
      concreteImageList: [
        { url: require('@/views/home/images/c10.png') },
        { url: require('@/views/home/images/c15.png') },
        { url: require('@/views/home/images/c20.png') },
        { url: require('@/views/home/images/c25.png') },
        { url: require('@/views/home/images/c30.png') },
        { url: require('@/views/home/images/c35.png') },
        { url: require('@/views/home/images/c40.png') },
        { url: require('@/views/home/images/c45.png') }
      ],
      concreteBigClassList: ['预拌系列', '地面铺装系列', '轻质保温系列', '高性能系列'],
      mortarBigClassList: ['干拌砂浆', '湿拌砂浆']
    };
  },
  methods: {
    toLogin() {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.main-content {
  padding: 0 160px 70px 160px;
  background: #F6F7F8;
}
</style>
