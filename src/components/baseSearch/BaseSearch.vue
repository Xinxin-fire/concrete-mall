<template>
  <div class="base-search">
    <div class="left">
      <el-form :label-width="labelWidth" :label-position="position">
        <el-col v-for="(item,index) in Object.keys(searchContent)" :key="index" :span="searchContent[item].span || 12">
          <el-form-item :label="searchContent[item].label" class="search-item">
            <el-input
              v-if="searchContent[item].type == 'input'"
              v-model="searchQuery[item]"
              :placeholder="searchContent[item].placeholder || '请输入'"
              clearable
            />
            <el-select
              v-if="searchContent[item].type == 'select'"
              v-model="searchQuery[item]"
              filterable
              clearable
              :placeholder="searchContent[item].placeholder || '请选择'"
              style="width: 100%;"
            >
              <el-option
                v-for="optionItem in searchContent[item].options"
                :key="optionItem.id"
                :label="optionItem.name || optionItem[searchContent[item].selectName]"
                :value="optionItem.id"
              />
            </el-select>
            <el-date-picker
              v-if="searchContent[item].type === 'date' || searchContent[item].type === 'datetime'"
              v-model="searchQuery[item]"
              :type="searchContent[item].type"
              :format="searchContent[item].type === 'datetime' ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd'"
              :value-format="searchContent[item].type === 'datetime' ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd'"
              clearable
              suffix-icon="el-icon-date"
              :placeholder="searchContent[item].placeholder || '请选择'"
              style="width: 100%;"
            />
            <el-date-picker
              v-if="searchContent[item].type === 'daterange' || searchContent[item].type === 'datetimerange'"
              v-model="searchQuery[item]"
              :type="searchContent[item].type"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :format="searchContent[item].type === 'datetimerange' ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd'"
              :value-format="searchContent[item].type === 'datetimerange' ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd'"
              clearable
              suffix-icon="el-icon-date"
              :placeholder="searchContent[item].placeholder || '请选择'"
              style="width: 100%;"
            />
          </el-form-item>
        </el-col>
      </el-form>
    </div>
    <div class="right">
      <base-button type="mainButton" name="查询" />
      <base-button type="minorButton" name="重置" class="minor-button" />
    </div>
  </div>
</template>

<script>
import BaseButton from '../baseButton/BaseButton.vue';
export default {
  components: { BaseButton },
  props: {
    labelWidth: {
      type: String,
      default: '100px'
    },
    position: {
      type: String,
      default: 'right'
    },
    searchQuery: {
      type: Object,
      default: () => {}
    },
    searchContent: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
    };
  }
};
</script>

<style lang='scss' scoped>
.base-search {
  display: flex;
  justify-content: space-between;
  .left {
    flex: 1
  }
  .right {
    width: 280px;
    .minor-button {
      margin-left: 20px;
    }
  }
}
.search-item {
  margin-right: 20px;
}
::v-deep .el-input__inner {
  height: 42px !important;
}
</style>
