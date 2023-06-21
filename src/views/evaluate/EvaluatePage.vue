<template>
<div>
  <H1_><template v-slot:title>评价管理</template></H1_>
  <a-form class="ant-advanced-search-form" :form="form" @submit="handleSearch">
    <a-row :gutter="24">
      <a-col :span="4">
        <a-form-item label="审核状态">
          <a-select style="width: 120px" v-decorator="[
                `state`,
                {
                  rules: [
                    {
                      required: true,
                      message: 'Input something!',
                    },
                  ],
                },
              ]">
            <a-select-option value="审核通过">
              审核通过
            </a-select-option>
            <a-select-option value="未审核">
              未审核
            </a-select-option>
            <a-select-option value="审核中">
              审核中
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col  :span="5">
        <a-form-item  label="创建时间">
          <a-date-picker
            format="YYYY-MM-DD HH:mm:ss"
            v-decorator="[
                `time`,
                {
                  rules: [
                    {
                      required: true,
                      message: 'Input something!',
                    },
                  ],
                },
              ]">
          </a-date-picker>
        </a-form-item>
      </a-col>
      <a-col :span="5">
        <a-form-item label="编号">
          <a-input
            v-decorator="[
                `ID`,
                {
                  rules: [
                    {
                      required: true,
                      message: 'Input something!',
                    },
                  ],
                },
              ]"
          />
        </a-form-item>
      </a-col>
      <a-col :span="5">
        <a-form-item  label="商品名称">
          <a-input
            v-decorator="[
                `proName`,
                {
                  rules: [
                    {
                      required: true,
                      message: 'Input something!',
                    },
                  ],
                },
              ]"
          />
        </a-form-item>
      </a-col>
      <a-col :span="5">
        <a-row type="flex" justify="space-around">
          <a-button type="danger" html-type="submit">
            搜索
          </a-button>
          <a-button type="danger" ghost :style="{ margin: '0 8px' }" @click="handleReset">
            清空
          </a-button>
          <a-button type="danger">
            删除
          </a-button>
        </a-row>
      </a-col>
    </a-row>
  </a-form>
  <tableEvaluate></tableEvaluate>
  <evaluateEcharts></evaluateEcharts>
</div>
</template>

<script>
import moment from 'moment/moment'
import H1_ from '@/components/H1.vue'
import tableEvaluate from '@/components/evaluate/tableEvaluate.vue'
import evaluateEcharts from '@/components/evaluate/evaluateEcharts.vue'

export default {
  name: 'EvaluatePage',
  components: { H1_, tableEvaluate, evaluateEcharts },
  data () {
    return {
      expand: false,
      form: this.$form.createForm(this, { name: 'advanced_search' })
    }
  },
  methods: {
    handleSearch (e) {
      e.preventDefault()
      // 内置的方法来制动的获取数据
      this.form.validateFields((error, values) => {
        // values
        // 如果有时间数据的话就执行下面代码
        if (values.time) {
          // 格式时间插件引用
          // eslint-disable-next-line no-undef
          values.time = moment(values.time._d).format('YYYY-MM-DD HH:mm:ss')
        }
        // 当数据没有或null的时候就执行这句（不能没有）
        console.log('error', error)
        console.log('成功的数据 ', values)
      })
    },
    handleReset () {
      this.form.resetFields()
    }
  },
  mounted () {
    // console.log(this.form)
  }
}
</script>

<style lang="scss" scoped>
::v-deep.ant-advanced-search-form .ant-form-item{
  display: flex;
}
//::v-deep.ant-input{
//  margin: 0!important;
//  width: 70px!important;
//}
//::v-deep.ant-calendar-picker-input{
//  width: 100px!important;
//}
</style>
