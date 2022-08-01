<template>
  <div class="personal">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#fff"
      text-color="#333333"
      active-text-color="#2D68FF"
      @select="handleSelect"
    >
      <el-menu-item v-for="item in titleList" :key="item.id" :index="item.id">{{ item.name }}</el-menu-item>
    </el-menu>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'PersonalView',
  props: {
    titleList: {
      type: Array,
      default: () => []
    },
    activeIndex: {
      type: String,
      default: '1'
    }
  },
  data() {
    return {
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$emit('select', key, keyPath);
    }
  }
};
</script>

<style lang='scss' scoped>
.personal {
  background: #F8F8F8;
  // padding: 0 160px;
}
::v-deep .el-menu-item {
  font-size: 22px;
  margin-right: 30px;
  line-height: 85px;
  height: 85px;
}
::v-deep .el-menu.el-menu--horizontal {
  width: 100%;
  height: 85px;
  border-bottom: 0;
  padding-left: 30px;
  box-sizing: border-box;
}
</style>
