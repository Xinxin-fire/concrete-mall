<template>
  <div class="evaluate">
    <base-head title="评价商品" />
    <div class="content">
      <!-- <div class="input-textarea">你对本次购物满意么？写点什么与大家分享吧。</div> -->
      <el-input
        v-model="content"
        type="textarea"
        :rows="2"
        placeholder="你对本次购物满意么？写点什么与大家分享吧。"
      />
      <div class="bottom">
        <div class="title">动态评分</div>
        <div class="left">
          <div class="row">
            <div class="desc">宝贝与描述相符</div>
            <el-rate
              v-model="rate"
              :colors="colors"
            />
          </div>
          <div class="row">
            <div class="desc">宝贝与描述相符</div>
            <el-rate
              v-model="rate"
              :colors="colors"
            />
          </div>
          <div class="row">
            <div class="desc">宝贝与描述相符</div>
            <el-rate
              v-model="rate"
              :colors="colors"
            />
          </div>
        </div>
      </div>
    </div>
    <base-button class="mainButton" type="mainButton" name="发表评价" @click="submit" />
  </div>
</template>

<script>
import BaseHead from '@/components/baseHead/BaseHead.vue';
export default {
  name: 'EvaluateCommodity',
  components: { BaseHead },
  data() {
    return {
      content: '',
      rate: ''
    };
  },
  methods: {
    submit() {
      this.$message({
        message: '提交成功',
        type: 'success',
        duration: '500',
        onClose: () => {
          this.$router.back(-1);
        }
      });
    }
  }
};
</script>

<style lang='scss' scoped>
  @import './evaluate.scss';
</style>
