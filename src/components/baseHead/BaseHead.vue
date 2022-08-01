<template>
  <div class="base-head">
    <div class="evaluate">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
    };
  }
};
</script>

<style lang='scss' scoped>
.base-head {
  height: 54px;
  background: #EFEFEF;
  border-bottom: solid 3px #EC5328;
  .evaluate {
    width: 200px;
    line-height: 54px;
    text-align: center;
    background: #EC5328;
    color: #FFFFFF;
  }
}
</style>
