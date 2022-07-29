<template>
  <div class="project-info">
    <div class="save-data">
      <div class="title">新增工程信息</div>
      <BaseForm class="form" :form="form" :rules="rules" :form-content="formContent" />
    </div>
    <div class="table-title">工程信息</div>
    <base-table
      class="contract-table"
      :need-index="true"
      :table-head="tableHead"
      :table-data="tableData"
      :operation-list="operationList"
      :total="100"
      :need-pagination="false"
      @tableButtonClick="tableButtonClick"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      formContent: {
        projectName: { prop: 'projectName', label: '工程名称', type: 'input', span: 12 },
        telephone: { prop: 'telephone', label: '联系电话', type: 'input', span: 12 },
        person: { prop: 'person', label: '工地联系人', type: 'input', span: 12 }
      },
      rules: {
        projectName: [
          { required: true, message: '请输入工程名称', trigger: 'change' }
        ],
        telephone: [
          { required: true, message: '请输入联系电话', trigger: 'change' }
        ],
        person: [
          { required: true, message: '请输入工地联系人', trigger: 'change' }
        ]
      },
      operationList: ['编辑', '删除'],
      tableData: [
        {
          name: '中国铁建大桥工程局集团有限公司',
          person: '何中',
          telephone: '15865442988'
        },
        {
          name: '中国铁建大桥工程局集团有限公司',
          person: '何中',
          telephone: '15865442988'
        }
      ],
      tableHead: [
        { prop: 'name', label: '工程名称', minWidth: '150' },
        { prop: 'person', label: '工地联系人', minWidth: '100' },
        { prop: 'telephone', label: '联系电话', minWidth: '150' }
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
    height: 240px;
    background-color: #fff;
    .title {
      margin-left: 30px;
      color: #ED702D;
      line-height: 100px;
      font-size: 18px;
    }
  }
  .table-title {
    height: 54px;
    line-height: 54px;
    padding-left: 12px;
    background: #fff;
    color: #313233;
    font-weight: 500;
    font-size: 16px;
    margin-top: 20px;
  }
}
</style>
