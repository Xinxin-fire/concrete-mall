<template>
  <div class="search">
    <div class="title">
      <SvgIcon icon-class="home-logo" class="project-logo" />
      <!-- <span class="project-name">砼易商城</span> -->
    </div>
    <el-input v-model="productName" placeholder="请输入商品名称、编号、规格等" class="search-input">
      <div slot="prepend">
        <span class="word">商品</span>
        <el-select v-model="select" placeholder="">
          <!-- <el-option label="混凝土" value="1" />
          <el-option label="砂浆" value="2" /> -->
        </el-select>
      </div>
      <el-button slot="append" icon="el-icon-search" />
    </el-input>
    <!-- <el-button class="user-button" @click="toUser">
      <div class="button-content">
        <SvgIcon class="icon-class" icon-class="user" />
        <span class="word-desc">用户中心</span>
      </div>
    </el-button> -->
  </div>
</template>

<script>

export default {
  name: 'SearchView',
  data() {
    return {
      productName: '',
      select: ''
    };
  },
  methods: {
    toUser() {
      this.$router.push('/personal');
    }
  }

};
</script>

<style lang="scss" scoped>
.search {
  padding: 0 160px;
  height: 194px;
  display: flex;
  align-items: center;
  .title {
    display: flex;
    align-items: center;
    .project-logo {
      width: 193px;
      height: 56px;
    }
    .project-name {
      font-size: 32px;
      color: var(--head-color);
    }
  }
  .search-input {
    width: 500px;
    height: 58px;
    margin-left: 400px;
    .word {
      font-weight: 600;
      font-size: 20px;
      color: var(--dark-text-color);
    }
    ::v-deep .el-input-group__prepend {
      width: 40px;
      background: #fff;;
      border-color: var(--primary-color);
    }
    ::v-deep .el-input-group__append {
      border-color: var(--primary-color);
      background: var(--primary-color);
    }
    ::v-deep .el-input__suffix {
      right: 40px;
    }
    ::v-deep .el-icon-search {
      color: #fff;
    }
    ::v-deep >.el-input__inner {
      height: 58px;
      border-left: 0;
      border-color: var(--primary-color);
    }
  }
  .user-button {
    width: 213px;
    height: 52px;
    text-align: center;
    .button-content {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .icon-class {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }
  }
}
</style>

