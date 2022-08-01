<template>
  <div class="payment-info">
    <BaseForm
      class="form"
      :form="form"
      :rules="rules"
      :form-content="formContent"
      @buttonClick="buttonClick"
      @selectChange="selectChange"
    />
    <img class="account-details" src="../../assets/account-details.png" alt="account-details">
    <div class="account-desc">该金额是根据当前的价格和订单方量预估的金额，实际结算金额会根据运输单发货时的价格和实际签收方量计算，平台价格可在个人中心查看。</div>
    <div class="submit">
      <div class="left">
        <span style="font-weight: 600;font-size: 25px;color: #ED702D; margin-left: 10px;">7400.00元</span>
        应付总额:
      </div>
      <div class="right">
        <el-button class="submit-buttom" @click="submitOrder">提交订单</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseForm from '@/components/baseForm/BaseForm';
import dayjs from 'dayjs';
export default {
  components: { BaseForm },
  data() {
    return {
      form: {
        startTime: '',
        projectName: '',
        adress: ''
      },
      formContent: {
        contract: { prop: 'contract', label: '选择合同', type: 'select', options: [{ id: 1, name: '杏花村项目BT597970770' }], wordDesc: '没有或未选择合同则必须付现款' },
        projectName: { prop: 'projectName', label: '工程名称', disabled: true, type: 'input' },
        adress: { prop: 'adress', label: '收货地址', type: 'input', buttonName: '管理收货地址' },
        startTime: { prop: 'startTime', label: '开盘时间', type: 'datetime' },
        pourSite: { prop: 'pourSite', label: '浇筑部位', type: 'input' },
        remark: { prop: 'remark', label: '备注', type: 'textarea', placeholder: '其它要求请再次留言给商家' }
      },
      rules: {
        projectName: [
          { required: true, message: '请选择工程名称', trigger: 'change' }
        ],
        adress: [
          { required: true, message: '请选择收货地址', trigger: 'change' }
        ],
        startTime: [
          { required: true, message: '请选择开盘时间', trigger: 'change' }
        ]
      }
    };
  },
  mounted() {
    const time = dayjs().add(1, 'hour').format('YYYY-MM-DD HH:mm:ss');
    this.form.startTime = time;
  },
  methods: {
    submitOrder() {
      console.log(this.form.contract);
      this.$router.push({
        path: '/payment',
        query: {
          contract: this.form.contract
        }
      });
    },
    buttonClick() {
      this.$router.push('/personal/personalInfo/harvest-address');
    },
    selectChange(prop, val) {
      if (val) {
        this.form.projectName = '西安杏花村建筑工程';
        this.form.adress = '西安市杏花岭区小返乡水沟村采薇庄园';
      } else {
        this.form.projectName = '';
        this.form.adress = '';
      }
    }
  }
};
</script>

<style lang='scss' scoped>
@import './paymentInfo.scss'
</style>
