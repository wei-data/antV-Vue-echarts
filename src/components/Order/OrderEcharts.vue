<template>
  <div class="box">
<!--    antDesignVue radio 组件的使用-->
    <a-radio-group v-model="value" default-value="a" button-style="solid" @change="onChange">
      <a-radio-button value="a">
        本月
      </a-radio-button>
      <a-radio-button value="b">
        季度
      </a-radio-button>
      <a-radio-button value="c">
        今年
      </a-radio-button>
    </a-radio-group>
<!--  echarts图表 -->
    <div ref="my-chart"
         id="essentialInformation"
         style="width: 100%; height: 246px">
    </div>
  </div>
</template>

<script>
import FEcharts from '@/components/Order/echarts'
export default {
  name: 'OrderEcharts',
  methods: {
    onChange () {
      // 获取节点
      const ref = this.$refs['my-chart']
      // 获取点击的对应的值
      const value = this.value
      FEcharts(ref, value)
    }
  },
  data () {
    return {
      value: 'a'
    }
  },
  mounted () {
    this.onChange()
    console.log(this.value)
  }
}
</script>

<style lang="scss" scoped>
.box{
  position: relative;
  width: 35%;
  height: 246px;
  background-color: #ffffff;
  box-shadow: 0px 10px 16px 0px
  rgba(132, 132, 152, 0.34);
  border-radius: 10px;
  #essentialInformation{
  }
  ::v-deep .ant-radio-group {
    position: absolute;
    top: 10px;
    right: 20px;
    z-index: 100;
    .ant-radio-button-wrapper{
      height: 20px;
      padding: 0 10px;
      line-height: 20px;
      font-size: 12px;
    }
  }
}

</style>
