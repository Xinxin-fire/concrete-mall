<template>
  <div class="base-button">
    <!-- 主按钮+辅按钮 用于查询重置等 height:43px-->
    <el-button v-if="type === 'mainButton'" type="primary" class="main-button" @click="click">{{ name }}</el-button>
    <el-button v-else-if="type === 'minorButton'" type="primary" class="minor-button" @click="click">{{ name }}</el-button>
    <!-- 确定取消按钮  height: 32px -->
    <el-button v-else-if="type === 'confirmButton'" type="primary" class="confirm-button" @click="click">{{ name }}</el-button>
    <el-button v-else-if="type === 'cancelButton'" type="primary" class="cancel-button" @click="click">{{ name }}</el-button>
    <!-- 对比色按钮 用于表格内点击 height: 36px;-->
    <el-button v-else-if="type === 'contrastButton'" type="primary" class="contrast-button" @click="click">{{ name }}</el-button>
    <!-- 文本按钮 用于表格内点击 -->
    <el-button v-else-if="type === 'textButton'" type="text" class="text-button" @click="click">{{ name }}</el-button>
    <el-button v-else-if="type === 'minortextButton'" type="text" class="minor-text-button" @click="click">{{ name }}</el-button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'mainButton'
    },
    name: {
      type: String,
      default: '保存'
    }
  },
  data() {
    return {
    };
  },
  methods: {
    click() {
      this.$emit('click');
    }
  }
};
</script>

<style lang='scss' scoped>
  @import './baseButton.scss'
</style>
