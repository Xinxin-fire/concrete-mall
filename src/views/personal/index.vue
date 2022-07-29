<template>
  <div class="personal">
    <div class="nav">
      <div class="title">
        <SvgIcon icon-class="project-logo" class="project-logo" />
        <span class="project-name">个人中心</span>
      </div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#414146"
        text-color="#FFFFFF"
        active-text-color="#C9D8FF"
        :router="true"
        @select="handleSelect"
      >
        <el-menu-item index="1" route="/personal/personalInfo/base-info">我的账号</el-menu-item>
        <el-menu-item index="2" route="/personal/order-manage/my-order">订单管理</el-menu-item>
        <el-menu-item index="3" route="/personal/settle-center/my-statement">结算中心</el-menu-item>
      </el-menu>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'PersonalView',
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
.personal {
  background: #F8F8F8;
  // padding: 0 160px;
  .nav {
    display: flex;
    background: #414146;
    align-items: center;
    padding: 0 160px;
    height: 96px;
    .title {
      display: flex;
      align-items: center;
      margin-right: 200px;
      .project-logo {
        width: 44px;
        height: 56px;
        margin-right: 6px;
      }
      .project-name {
        font-size: 32px;
        color: #FFFFFF;
      }
    }
  }
}
::v-deep .el-menu-item {
  font-size: 22px;
  margin-right: 80px;
}
::v-deep .el-menu.el-menu--horizontal {
  border-bottom: 0;
}
</style>
