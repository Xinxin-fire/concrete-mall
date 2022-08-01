<template>
  <div class="personal-info">
    <div>
      <div class="title">我的账号</div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        background-color="transparent"
        text-color="#333333"
        active-text-color="#386BF5"
        :router="true"
        @select="handleSelect"
      >
        <el-menu-item index="1" route="/personal/personalInfo/base-info">基本信息</el-menu-item>
        <el-menu-item index="2" route="/personal/personalInfo/contract">我的合同</el-menu-item>
        <el-menu-item index="3" route="/personal/personalInfo/project-info">我的工程</el-menu-item>
        <el-menu-item index="4" route="/personal/personalInfo/bill-info">开票信息</el-menu-item>
        <el-menu-item index="5" route="/personal/personalInfo/harvest-address">收货地址</el-menu-item>
      </el-menu>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang='scss' scoped>
.personal-info {
  margin-top: 32px;
  background: #F8F8F8;
  padding: 0 160px;
  display: flex;
  .title {
    font-weight: 600;
    font-size: 21px;
    color: #333333;
    line-height: 54px;
    border-bottom: 1px solid #E6E6E6;
    width: 240px;
  }
}
::v-deep .el-menu {
  width: 240px;
  border: none;
}
</style>
