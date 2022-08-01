<template>
  <div class="project-info">
    <div class="save-data">
      <div class="title">{{ title }}</div>
      <BaseForm class="form" :form="form" :rules="rules" :form-content="formContent" />
      <div>
        <base-button class="save-button" @click="saveData" />
      </div>
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
      title: '新增工程信息',
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
    saveData() {
      this.$message.success('保存成功');
    },
    tableButtonClick(item, row) {
      if (item === '编辑') {
        this.title = '编辑工程信息';
        this.form = {
          projectName: '中国铁建大桥工程局集团有限公司',
          telephone: '何中',
          person: '15865442988'
        };
      } else {
        this.$confirm('确定删除该工程信息吗？', '删除工程信息', {
          confirmButtonText: '确认删除',
          cancelButtonText: '我再想想',
          type: 'warning'
        }).then(() => {
          console.log('删除');
        });
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.project-info {
  margin-bottom: 80px;
  .save-data {
    height: 305px;
    background-color: #fff;
    .save-button {
      margin-left: 126px;
      ::v-deep .main-button {
        width: 173px;
      }
    }
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
