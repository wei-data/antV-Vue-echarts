<template>
<!--  搜索表单块-->
  <a-form class="ant-advanced-search-form" :form="form" @submit="handleSearch">
    <a-row :gutter="24">
      <a-col :span="7">
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
      <a-col :span="7">
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
      <a-col  :span="6">
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
      <a-col :span="4">
        <a-row type="flex" justify="space-around">
          <a-button type="danger" html-type="submit">
            搜索
          </a-button>
          <a-button type="danger" :style="{ marginLeft: '8px' }" @click="handleReset">
            重置
          </a-button>
        </a-row>
      </a-col>
    </a-row>
  </a-form>
</template>

<script>
// 引入时间格式插件
import moment from 'moment'
export default {
  name: 'OrderSearch',
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
  //justify-content: space-around;
  .ant-calendar-picker-input.ant-input{
    width: 100%;
  }
}
</style>
