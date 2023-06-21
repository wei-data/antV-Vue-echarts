<template>
  <div ref="my-chart"
       id="essentialInformation"
       style="width: 27%; height: 310px">
  </div>
</template>

<script>
export default {
  name: 'StatisticalA',
  methods: {
    echartsF () {
      const myChart = this.$echarts.init(this.$refs['my-chart'])
      window.addEventListener('resize', function () {
        myChart.resize()
      })
      // const symbolSize = 15
      const option = {
        title: {
          text: '访问记录',
          left: '20px',
          top: 10,
          textStyle: {
            fontWeight: 500,
            fontSize: 18
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '6%',
          right: '4%',
          bottom: '3%',
          // width:"30px",
          containLabel: true
        },
        xAxis: [
          {
            show: true,
            splitLine: {
              show: false
            },
            type: 'category',
            data: ['一', '二', '三', '四', '五', '六', '七'],
            axisLabel: {
              show: true
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            label: {
              show: true,
              position: 'top'
            },
            data: [10, 52, 70, 34, 90, 30, 20],
            barWidth: 17,
            itemStyle: {
              normal: {
                // 这里设置柱形图圆角 [左上角，右上角，右下角，左下角]
                barBorderRadius: [10, 10, 10, 10]
              }
            }
          }
        ]
      }
      myChart.setOption(option)
    }
  },
  mounted () {
    this.echartsF()
  }
}
</script>

<style lang="scss" scoped>
#essentialInformation{
  box-shadow: 0px 10px 16px 0px
  rgba(132, 132, 152, 0.34);
  border-radius: 10px;
::v-deep >div:first-child{
  width: 100%!important;
canvas{
  width: 100%!important;
}
}
}
</style>
