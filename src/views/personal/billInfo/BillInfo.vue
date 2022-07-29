<template>
  <div class="project-info">
    <div class="save-data">
      <div class="title">新增发票抬头</div>
      <BaseForm class="form" :form="form" :rules="rules" :form-content="formContent" />
      <div class="save-button">
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
      form: { projectName: '1' },
      formContent: {
        projectName: { prop: 'projectName', label: '开票类型', type: 'radio', options: [{ id: '1', name: '普通发票' }, { id: '2', name: '增值专用发票' }], span: 12 },
        telephone: { prop: 'telephone', label: '公司名称', type: 'input', span: 12 },
        person: { prop: 'person', label: '公司税号', type: 'input', span: 12, placeholder: '选填' },
        adress: { prop: 'adress', label: '公司地址', type: 'input', span: 12, placeholder: '选填' },
        phone: { prop: 'phone', label: '公司电话', type: 'input', span: 12, placeholder: '选填' },
        bank: { prop: 'bank', label: '开户银行', type: 'input', span: 12, placeholder: '选填' },
        blank: { prop: 'blank', label: '银行账号', type: 'input', span: 12, placeholder: '选填' }
      },
      rules: {
        projectName: { required: true, message: '请输入工程名称', trigger: 'change' },
        telephone: { required: true, message: '请输入联系电话', trigger: 'change' }
      },
      operationList: ['编辑', '删除'],
      tableData: [
        {
          name: '中国铁建大桥工程局集团有限公司' + '\n' + '268513844984859870',
          telephone: '西安市莲湖区丰禾路与西二环路交汇处东北角太奥广场F1' + '\n' + '0755-7867332',
          bank: '268513844984859870' + '\n' + '深圳龙华观澜支行',
          person: '专票'
        },
        {
          name: '中国铁建大桥工程局集团有限公司' + '\n' + '268513844984859870',
          telephone: '西安市莲湖区丰禾路与西二环路交汇处东北角太奥广场F1' + '\n' + '0755-7867332',
          bank: '268513844984859870' + '\n' + '深圳龙华观澜支行',
          person: '专票'
        },
        {
          name: '中国铁建大桥工程局集团有限公司' + '\n' + '268513844984859870',
          telephone: '西安市莲湖区丰禾路与西二环路交汇处东北角太奥广场F1' + '\n' + '0755-7867332',
          bank: '268513844984859870' + '\n' + '深圳龙华观澜支行',
          person: '专票'
        }
      ],
      tableHead: [
        { prop: 'name', label: '公司名称税号', minWidth: '150' },
        { prop: 'person', label: '类型', minWidth: '60' },
        { prop: 'telephone', label: '公司地址电话', minWidth: '250' },
        { prop: 'bank', label: '客户银行账号及开户行', minWidth: '150' }
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
    .save-button {
      margin-left: 126px;
    }
  }
}
::v-deep .el-table .cell {
  white-space: pre-line !important;
}
</style>
