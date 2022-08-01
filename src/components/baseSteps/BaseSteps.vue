<template>
  <div>
    <el-steps :active="currStep">
      <!-- :finish-status="finishStatus" -->
      <slot>
        <el-step
          v-for="(item, index) in titleDict"
          :key="index"
          :title="item.dictLabel"
          :description="
            (data.find((i) => i.titleCode === item.dictCode) &&
              data.find((i) => i.titleCode === item.dictCode).description) ||
              ''
          "
          :status="
            statusEnum[
              data.find((i) => i.titleCode === item.dictCode) &&
              data.find((i) => i.titleCode === item.dictCode).status
            ]
          "
          :style="{ '--lineMarginLeft': 60 + 14 * item.dictLabel.length + 'px' }"
        >
          <!-- :status="
            statusEnum[
              data.find((i) => i.titleCode === item.dictCode) &&
                data.find((i) => i.titleCode === item.dictCode).status
            ]
          " -->
        </el-step>
      </slot>
    </el-steps>
  </div>
</template>
<script>
export default {
  props: {
    /**
     * 步骤标题
     * 例子
     * [{
     * dictCode: '1',
     * dictLabel: '步骤1'
     * }]
     */
    titleDict: {
      type: Array,
      required: true,
      default: () => []
    },
    /**
     * 属性配置
     * 例子
     * [{
     * titleCode: '1'...,
     * description: '2022-07-11',
     * status: wait / process / finish / error / success
     * }]
     */
    data: {
      type: Array,
      default: () => [
        {
          titleCode: '1',
          description: '2022-07-11',
          status: 3
        }
      ]
    },
    /**
     * 设置当前激活步骤
     */
    active: {
      type: Number,
      default: 0
    },
    /**
     * 设置结束步骤的状态
     * wait / process / finish / error / success
     */
    finishStatus: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      statusEnum: {
        0: 'wait',
        1: 'process',
        2: 'finish',
        3: 'error',
        4: 'success'
      }
    };
  },
  computed: {
    currStep() {
      return this.active;
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../../assets/styles/element-variables.scss';
.base-info-title {
  font-size: 16px;
  font-weight: 500;
  color: #313233;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 24px;
}
::v-deep .el-tag {
  height: 22px;
  line-height: 20px;
  font-size: 12px;
}
::v-deep {
  .el-step__main {
    margin-top: -30px;
    margin-left: 40px;
  }
  .el-step.is-horizontal .el-step__line {
    margin-left: var(--lineMarginLeft);
  }
  .el-step__description {
    color: rgba(0, 0, 0, 0.6);
  }
  .el-step__head.is-success {
    color: #386bf5;
    border-color: #386bf5;
    .el-step__line {
      border-color: #386bf5;
    }
  }
  .el-step__title.is-success {
    color: rgba(0, 0, 0, 0.9);
  }
}
</style>
