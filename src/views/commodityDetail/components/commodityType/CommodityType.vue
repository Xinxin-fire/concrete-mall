<template>
  <div class="commodity-type">
    <div class="left">
      <div class="big-image">
        <img class="goods-image" src="../../images/goods1.png" alt="goods-image">
      </div>
      <div class="image-container">
        <img
          v-for="(item, index) in imageList"
          :key="index"
          class="small-image"
          :src="item.url"
          alt="goods-image"
        >
      </div>
    </div>
    <div class="right">
      <div class="commodity-name">C10 预拌混凝土</div>
      <div class="desc">品种/等级: C10</div>
      <div class="desc">用途：用于大跨度结构，要求耐久性高的结构、预制构件等</div>
      <div class="price">
        <span class="desc1">市场价</span>
        <span class="desc2">550.00</span>
        <span class="desc3">元/方</span>
      </div>
      <commodity-radio
        v-for="(item, index) in selectArr"
        :key="index"
        :label="item"
        :title="item.title"
        :select-list="item.selectList"
        class="select"
      />
      <div class="quenty">
        <div class="quenty-desc">购买方量</div>
        <el-input-number
          v-model="num"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CommodityRadio from '../commodityRadio/CommodityRadio.vue';

export default {
  name: 'DetailView',
  components: { CommodityRadio },
  data() {
    return {
      imageList: [
        { url: require('../../images/goods2.png') },
        { url: require('../../images/goods3.png') },
        { url: require('../../images/goods4.png') },
        { url: require('../../images/goods5.png') }
      ],
      value: '无要求',
      num: 7,
      selectArr: [
        {
          title: '抗渗等级',
          selectList: ['无要求', 'p4', 'p5', 'p6', 'p7']
        },
        {
          title: '浇筑方式',
          selectList: ['自卸', '人工转运', '自备泵', '泵车', '车载泵', '砂浆泵']
        },
        {
          title: '特殊要求',
          selectList: ['无要求', '水下', '细石', '早强', '膨胀']
        },
        {
          title: '坍落度',
          selectList: ['80±20mm', '100±20mm', '150±20mm', '180±20mm', '200±20mm', '220±20mm']
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import './commodityType.scss'
</style>

