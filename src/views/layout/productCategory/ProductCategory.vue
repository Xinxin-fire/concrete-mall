<template>
  <div class="product-category">
    <el-popover
      v-model="isShowList"
      placement="bottom-start"
      trigger="manual"
      :visible-arrow="false"
      popper-class="popper"
    >
      <div class="popper-content">
        <div class="left">
          <div class="item">混凝土</div>
          <div class="item">砂浆</div>
        </div>
        <div class="right">
          <div v-for="(item, index) in categoryList" :key="index" class="sub-item">
            <div class="sub-left">
              {{ item.bigClass }}
            </div>
            <div class="sub-right">
              <div v-for="(subItem, inx) in item.subclassList" :key="inx" class="sub-content">
                {{ subItem }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div slot="reference">
        <div class="menu-left" @click="viewCategory('')">
          <SvgIcon class="menu" icon-class="menu" />
          产品分类
        </div>
        <el-button class="select-button" type="text" :style="getStyle('home')" @click="viewCategory('home')">首页</el-button>
        <el-button class="select-button" type="text" :style="getStyle('concrete')" @click="viewCategory('concrete')">混凝土</el-button>
        <el-button class="select-button" type="text" :style="getStyle('mortar')" @click="viewCategory('mortar')">砂浆</el-button>
      </div>
    </el-popover>
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon/index.vue';
export default {
  components: { SvgIcon },
  data() {
    return {
      isShowList: false,
      currentType: 'home',
      categoryList: []
    };
  },
  methods: {
    viewCategory(type) {
      if (type) {
        this.currentType = type;
      }
      if ((!type && this.isShowList) || type === 'home') {
        this.isShowList = false;
      } else {
        this.isShowList = true;
      }
      if (this.currentType === 'concrete') {
        this.categoryList = [
          {
            bigClass: '预拌系列',
            subclassList: ['c10', 'c15', 'c20', 'c25', 'c30', 'c35', 'c40', 'c45', 'c50', 'c55', 'c60', 'c65', 'c70', 'c75', 'c80', 'c85', 'c90', 'c95', 'c100']
          },
          {
            bigClass: '地面铺装系列',
            subclassList: ['c10', 'c15', 'c20', 'c25', 'c30', 'c35', 'c40', 'c45', 'c50', 'c55', 'c60', 'c65', 'c70', 'c75', 'c80', 'c85', 'c90', 'c95', 'c100']
          },
          {
            bigClass: '轻质保温系列',
            subclassList: ['c10', 'c15', 'c20', 'c25', 'c30', 'c35', 'c40', 'c45', 'c50', 'c55', 'c60', 'c65', 'c70', 'c75', 'c80', 'c85', 'c90', 'c95', 'c100']
          },
          {
            bigClass: '高性能系列',
            subclassList: ['c10', 'c15', 'c20', 'c25', 'c30', 'c35', 'c40', 'c45', 'c50', 'c55', 'c60', 'c65', 'c70', 'c75', 'c80', 'c85', 'c90', 'c95', 'c100']
          }
        ];
      } else if (this.currentType === 'mortar') {
        this.categoryList = [
          {
            bigClass: '干拌砂浆',
            subclassList: ['M5', 'M7.5', 'M10', 'M15', 'M25', 'M30']
          },
          {
            bigClass: '湿拌砂浆',
            subclassList: ['M5', 'M7.5', 'M10', 'M15', 'M25', 'M30']
          }
        ];
      }
    },
    getStyle(type) {
      if (type === this.currentType) {
        return {
          fontSize: '22px',
          fontWeight: 600,
          color: '#386BF5'
        };
      } else {
        return {
          fontSize: '22px',
          fontWeight: 600,
          color: '#1B1B1B'
        };
      }
    }
  }
};
</script>

<!-- 全局弹窗样式 -->
<style lang="scss">

</style>
<style lang="scss" scoped>
  @import './productCategory.scss';
</style>

