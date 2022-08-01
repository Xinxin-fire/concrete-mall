<template>
  <div class="base-form">
    <el-form :model="form" :rules="rules" :label-width="labelWidth" :label-position="position">
      <div class="form-container">
        <el-col v-for="(item,index) in Object.keys(formContent)" :key="index" :span="formContent[item].span || 24">
          <el-form-item v-if="!formContent[item].needHide" :label="formContent[item].label" :prop="formContent[item].prop">
            <el-input
              v-if="formContent[item].type == 'input'"
              v-model="form[item]"
              :readonly="formContent[item].readOnly"
              :maxlength="formContent[item].maxlength"
              :disabled="formContent[item].disabled"
              :placeholder="formContent[item].placeholder || '请输入'"
              clearable
              style="width: 400px;"
            />
            <el-input
              v-if="formContent[item].type == 'textarea'"
              v-model="form[item]"
              type="textarea"
              :readonly="formContent[item].readOnly"
              :maxlength="formContent[item].maxlength"
              :disabled="formContent[item].disabled"
              :placeholder="formContent[item].placeholder || '请输入'"
              style="width: 400px;"
              clearable
            />
            <el-input
              v-if="formContent[item].type == 'password'"
              v-model="formContent[item]"
              show-password
              clearable
              autocomplete="new-password"
            />
            <el-select
              v-if="formContent[item].type == 'select'"
              v-model="form[item]"
              :disabled="formContent[item].disabled"
              :multiple="formContent[item].multiple ? formContent[item].multiple : false"
              filterable
              clearable
              style="width: 400px;"
              :placeholder="formContent[item].placeholder || '请选择'"
              @change="selectChange(item, $event)"
            >
              <el-option
                v-for="optionItem in formContent[item].options"
                :key="optionItem.id"
                :label="optionItem.name || optionItem[formContent[item].selectName]"
                :value="optionItem.id"
                :disabled="optionItem.disabled"
              />
            </el-select>
            <el-radio-group v-if="formContent[item].type == 'radio'" v-model="form[item]">
              <el-radio
                v-for="optionItem in formContent[item].options"
                :key="optionItem.id"
                :label="optionItem.id"
                @change="onRadioChange(formContent[item].prop, $event)"
              >
                {{ optionItem.name }}
              </el-radio>
            </el-radio-group>
            <el-date-picker
              v-if="formContent[item].type === 'date' || formContent[item].type === 'datetime'"
              v-model="form[item]"
              :type="formContent[item].type"
              :disabled="formContent[item].disabled"
              :format="formContent[item].type === 'datetime' ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd'"
              :value-format="formContent[item].type === 'datetime' ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd'"
              clearable
              suffix-icon="el-icon-date"
              style="width: 400px;"
              :placeholder="formContent[item].placeholder || '请选择'"
            />
            <el-switch
              v-if="formContent[item].type === 'switch'"
              v-model="form[item]"
              :disabled="formContent[item].disabled"
              :active-color="formContent[item].activeColor ? formContent[item].activeColor : '#13ce66'"
              :inactive-color="formContent[item].inactiveColor ? formContent[item].inactiveColor : '#d2d2d2'"
              :active-text="formContent[item].activeText"
              :active-value="formContent[item].activeValue ? formContent[item].activeValue : true"
              :inactive-value="formContent[item].inactiveValue ? formContent[item].inactiveValue : false"
              @change="switchChange(item, $event)"
            />
            <el-cascader
              v-if="formContent[item].type == 'cascader'"
              v-model="form[item]"
              :options="formContent[item].options"
              :props="formContent[item].props"
              filterable
              clearable
            />
            <span v-if="formContent[item].wordDesc" style="margin-left: 30px" class="word-desc">{{ formContent[item].wordDesc }}</span>
            <base-button
              v-if="formContent[item].buttonName"
              type="textButton"
              :name="formContent[item].buttonName"
              style="margin-left: 30px"
              @click="buttonClick"
            />
            <template v-if="formContent[item].type === 'custom'">
              <slot :name="formContent[item].customName" :props="form[item]" />
            </template>
          </el-form-item>
        </el-col>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'BaseForm',
  props: {
    form: {
      type: Object,
      default: () => {}
    },
    rules: {
      type: Object,
      default: () => {}
    },
    formContent: {
      type: Object,
      default: () => {}
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    position: {
      type: String,
      default: 'right'
    }
  },
  data() {
    return {
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    buttonClick() {
      this.$emit('buttonClick');
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    onRadioChange(val) {
      console.log(val);
    },
    selectChange(props, val) {
      this.$emit('selectChange', props, val);
    }
  }
};
</script>
<style lang="scss" scoped>
::v-deep .el-select{
  width: 100%;
}
.form-container {
  overflow: auto;
}
</style>
