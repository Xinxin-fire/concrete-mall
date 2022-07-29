<template>
  <div class="project-info">
    <div class="save-data">
      <div class="title">新增收货地址</div>
      <BaseForm class="form" :form="form" :rules="rules" :form-content="formContent">
        <div slot="person" class="mutilSelect">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </BaseForm>
      <div class="bottom-button">
        <el-checkbox v-model="checked" class="checked">设为默认地址</el-checkbox>
        <base-button />
      </div>
    </div>
    <base-table
      class="contract-table"
      :need-index="true"
      :table-head="tableHead"
      :table-data="tableData"
      :operation-list="operationList"
      :total="100"
      @tableButtonClick="tableButtonClick"
    />
  </div>
</template>

<script>
import BaseButton from '@/components/baseButton/BaseButton.vue';
export default {
  components: { BaseButton },
  data() {
    return {
      form: { },
      formContent: {
        projectName: { prop: 'projectName', label: '收货人', type: 'input', span: 12 },
        telephone: { prop: 'telephone', label: '联系电话', type: 'input', span: 12 },
        person: { prop: 'person', label: '所在地区', type: 'custom', customName: 'person', span: 14 },
        adress: { prop: 'adress', label: '详细地址', type: 'textarea', span: 14, placeholder: '请输入详细地址信息，如街道、门牌号、小区、楼栋号、单元' }
      },
      rules: {
        projectName: { required: true, message: '请输入收货人', trigger: 'change' },
        telephone: { required: true, message: '请输入联系电话', trigger: 'change' },
        person: { required: true, message: '请输入所在地区', trigger: 'change' },
        adress: { required: true, message: '请输入详细地址', trigger: 'change' }
      },
      operationList: ['编辑', '删除'],
      tableData: [
        {
          name: '唐宜豪',
          person: '山西省 太原市',
          adress: '太原市杏花岭区小返乡水沟村采薇庄园',
          telephone: '15865442988'
        },
        {
          name: '唐宜豪',
          person: '山西省 太原市',
          adress: '太原市杏花岭区小返乡水沟村采薇庄园',
          telephone: '15865442988'
        },
        {
          name: '唐宜豪',
          person: '山西省 太原市',
          adress: '太原市杏花岭区小返乡水沟村采薇庄园',
          telephone: '15865442988'
        }
      ],
      tableHead: [
        { prop: 'name', label: '收货人', minWidth: '100' },
        { prop: 'person', label: '所在地区', minWidth: '150' },
        { prop: 'adress', label: '详细地址', minWidth: '200' },
        { prop: 'telephone', label: '电话', minWidth: '150' }
      ]
    };
  },
  methods: {
    tableButtonClick(item, row) {
      console.log(item, row);
    }
  }
};
</script>

<style lang='scss' scoped>
.project-info {
  margin-bottom: 80px;
  .save-data {
    height: 448px;
    background-color: #fff;
    margin-bottom: 20px;
    .title {
      margin-left: 30px;
      color: #ED702D;
      line-height: 100px;
      font-size: 18px;
    }
    .bottom-button {
      margin-left: 126px;
      .checked {
        margin: 20px 0 40px;
      }
    }
  }
}
.mutilSelect {
  display: flex;
  .el-select {
    margin-right: 30px;
    &:last-child {
      margin-right: 0;
    }
  }
}
::v-deep .el-textarea{
  width: 100% !important;
}
</style>
