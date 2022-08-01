<template>
  <div class="enter-payment">
    <base-head title="录入付款信息" />
    <div class="content">
      <BaseForm
        class="form"
        :form="form"
        :rules="rules"
        :form-content="formContent"
        @buttonClick="buttonClick"
        @selectChange="selectChange"
      >
        <template #paymentInfo>
          <div class="title">付款信息</div>
        </template>
        <template #voucher>
          <div class="title">支付凭证</div>
          <!-- <base-button type="mainButton" name="点击上传" /> -->
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </template>
        <template #collection>
          <div class="title">收款账户信息</div>
        </template>
      </BaseForm>
      <div class="bottom-button">
        <base-button type="cancelButton" name="取消" style="margin-right: 16px;" @click="goback" />
        <base-button type="confirmButton" name="确定" @click="confirmEnter" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseHead from '@/components/baseHead/BaseHead.vue';
import dayjs from 'dayjs';
export default {
  components: { BaseHead },
  data() {
    return {
      form: {
        adress: '958954654524545',
        pourSite: '林克',
        bank: '中国银行龙华支行',
        startTime: '',
        contract: 1
      },
      formContent: {
        paymentInfo: { type: 'custom', customName: 'paymentInfo' },
        startTime: { prop: 'startTime', label: '付款日期', type: 'datetime' },
        projectName: { prop: 'projectName', label: '付款金额', type: 'input' },
        contract: { prop: 'contract', label: '选择合同', type: 'select', options: [{ id: 1, name: '杏花村项目BT597970770' }] },
        voucher: { type: 'custom', customName: 'voucher' },
        collection: { type: 'custom', customName: 'collection' },
        adress: { prop: 'adress', label: '收款账号', type: 'input', disabled: true },
        pourSite: { prop: 'pourSite', label: '收款户名', type: 'input', disabled: true },
        bank: { prop: 'bank', label: '收款开户行', type: 'input', disabled: true }
      },
      rules: {
        projectName: { required: true, message: '请选择付款金额', trigger: 'change' },
        contract: { required: true, message: '请选择合同', trigger: 'change' },
        startTime: { required: true, message: '请选择付款日期', trigger: 'change' }
      },
      fileList: [
        { name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' },
        { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }
      ]
    };
  },
  mounted() {
    const time = dayjs().format('YYYY-MM-DD HH:mm:ss');
    this.form.startTime = time;
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
      console.log(this.fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    goback() {
      this.$router.back(-1);
    },
    confirmEnter() {
      this.$message({
        message: '录入成功',
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
.enter-payment {
  padding: 26px 160px 0;
  .content {
    height: 645px;
    border: 1px solid #E6E6E6;
    padding-top: 40px;
    padding-left: 64px;
    .title {
      display: inline-block;
      color: #313233;
      font-weight: 600;
      font-size: 16px;
      margin-left: -80px;
      margin-right: 20px;
    }
    .bottom-button {
      margin-top: 10px;
      margin-left: 30px;
    }
  }
}
</style>
