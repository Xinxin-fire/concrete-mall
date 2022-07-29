<template>
  <div class="layout">
    <Head />
    <Search v-if="path.indexOf('/personal') === -1" />
    <ProductCategory v-if="path.indexOf('/personal') === -1" />
    <router-view />
    <Bottom />
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
      path: ''
    };
  },
  mounted() {
    this.path = this.$route.path;
    console.log(this.$route);
    console.log(this.path);
  },
  updated() {
    this.path = this.$route.path;
    console.log(this.$route);
    console.log(this.path);
  }
};
</script>
<style lang="scss">

</style>

