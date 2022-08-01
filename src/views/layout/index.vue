<template>
  <div class="layout">
    <Head />
    <Search v-if="path.indexOf('/personal') === -1" />
    <ProductCategory v-if="path.indexOf('/personal') === -1" />
    <router-view />
    <Bottom v-if="isShowBottom" />
  </div>
</template>

<script>
import Head from '@/views/layout/Head';
import Search from '@/views/layout/Search';
import ProductCategory from '@/views/layout/productCategory/ProductCategory';
import Bottom from '@/views/layout/Bottom';
export default {
  name: 'LayoutComponent',
  components: { Head, Search, ProductCategory, Bottom },
  data() {
    return {
      path: '',
      isShowBottom: true
    };
  },
  mounted() {
    this.path = this.$route.path;
  },
  updated() {
    const nameList = ['evaluate', 'enterPayment', 'takeDelivery'];
    this.isShowBottom = !nameList.includes(this.$route.name);
    this.path = this.$route.path;
  }
};
</script>
<style lang="scss">

</style>

