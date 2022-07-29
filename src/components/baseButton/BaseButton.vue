<template>
  <div class="base-button">
    <el-button v-if="type === 'saveButton'" type="primary" class="define-button save-button" @click="buttonClick">{{ name }}</el-button>
    <el-button v-if="type === 'searchButton'" type="primary" class="define-button search-button" @click="buttonClick">{{ name }}</el-button>
    <el-button v-if="type === 'resetButton'" type="primary" class="define-button reset-button" @click="buttonClick">{{ name }}</el-button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'saveButton'
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
    buttonClick() {
      this.$emit('buttonClick');
    }
  }
};
</script>

<style lang='scss' scoped>
.base-button {
  display: inline-block;
}
.define-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0075FF;
}
.save-button {
  width: 173px;
  height: 32px;
}
.search-button {
  width: 80px;
  height: 42px;
  border: none;
}
.reset-button {
  width: 80px;
  height: 42px;
  background: #E7E7E7;
  color: rgba(0, 0, 0, 0.9);
  border: none;
}
</style>
