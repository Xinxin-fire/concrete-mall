<template>
  <div class="project-info">
    <div class="save-data">
      <div class="title">{{ title }}</div>
      <BaseForm class="form" :form="form" :rules="rules" :form-content="formContent">
        <div slot="person" class="mutilSelect">
          <el-select v-model="form.provice" placeholder="请选择">
            <el-option
              v-for="item in proviceList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-select v-model="form.city" placeholder="请选择">
            <el-option
              v-for="item in cityList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-select v-model="form.county" placeholder="请选择">
            <el-option
              v-for="item in countyList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </BaseForm>
      <div class="bottom-button">
        <el-checkbox v-model="checked" class="checked">设为默认地址</el-checkbox>
        <div>
          <base-button class="save-button" />
        </div>
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
      title: '新增收货地址',
      proviceList: [{ label: '陕西省', value: '陕西省' }],
      cityList: [{ label: '西安市', value: '西安市' }],
      countyList: [{ label: '蓝天县', value: '蓝天县' }],
      form: { },
      formContent: {
        projectName: { prop: 'projectName', label: '收货人', type: 'input', span: 12 },
        telephone: { prop: 'telephone', label: '联系电话', type: 'input', span: 12 },
        provice: { prop: 'provice', label: '所在地区', type: 'custom', customName: 'person', span: 14 },
        adress: { prop: 'adress', label: '详细地址', type: 'textarea', span: 14, placeholder: '请输入详细地址信息，如街道、门牌号、小区、楼栋号、单元' }
      },
      rules: {
        projectName: { required: true, message: '请输入收货人', trigger: 'change' },
        telephone: { required: true, message: '请输入联系电话', trigger: 'change' },
        provice: { required: true, message: '请输入所在地区', trigger: 'change' },
        adress: { required: true, message: '请输入详细地址', trigger: 'change' }
      },
      operationList: ['编辑', '删除'],
      tableData: [
        {
          name: '唐宜豪',
          person: '陕西省 西安市',
          adress: '西安市蓝天县小返乡水沟村采薇庄园',
          telephone: '15865442988'
        },
        {
          name: '唐宜豪',
          person: '陕西省 西安市',
          adress: '西安市蓝天县小返乡水沟村采薇庄园',
          telephone: '15865442988'
        },
        {
          name: '唐宜豪',
          person: '陕西省 西安市',
          adress: '西安市蓝天县小返乡水沟村采薇庄园',
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
      if (item === '编辑') {
        this.title = '编辑收货地址';
        this.form = {
          provice: '陕西省',
          city: '西安市',
          county: '蓝天县',
          telephone: '15865442988',
          adress: '西安市蓝天县小返乡水沟村采薇庄园',
          projectName: '唐宜豪'
        };
      } else {
        this.$confirm('确定删除该条地址吗？', '删除地址', {
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
      .save-button {
        ::v-deep .main-button {
          width: 173px;
        }
      }
      .checked {
        margin: 20px 0 30px;
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
