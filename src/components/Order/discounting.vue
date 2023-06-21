<template>
  <div ref="my-chart"
       id="essentialInformation"
       style="width: 60%; height: 246px">
  </div>
</template>

<script>

export default {
  name: 'discounting_',
  methods: {
    echartsF () {
      const myChart = this.$echarts.init(this.$refs['my-chart'])
      window.addEventListener('resize', function () {
        myChart.resize()
      })
      const option = {
        title: {
          top: '10%',
          left: '3%',
          text: '全部订单',
          textStyle: {
            // 文字颜色
            color: 'black',
            // 字体大小
            fontSize: 18,
            fontWeight: 500
          }
        },
        grid: {
          top: '90',
          bottom: '5%',
          right: '5%',
          left: '5%',
          containLabel: true
        },
        legend: {
          show: true,
          top: '10%',
          icon: 'square'
        },
        xAxis: {
          type: 'category',
          axisTick: {
            show: false
          },
          // axis
          nameTextStyle: {
            color: 'white'
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#999999'
            }
          },
          splitLine: {
            show: false
          },
          boundaryGap: false,
          data: ['', '已处理', '已取消', '待处理', '退款中', '']
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed'
            }
          },
          splitNumber: 3,
          axisLine: {
            lineStyle: {
              color: 'black'
            }
          }
        },
        series: [
          {
            data: [0, 23, 30, 26, 30, 0],
            name: '昨日',
            type: 'line',
            top: 0,
            smooth: true,
            symbolSize: 0,
            lineStyle: {
              color: 'rgba(75, 206, 175,0.8)'
            },
            areaStyle: {
              // symbolSize:symbolSize ,
              textStyle: {
                // 文字颜色
                color: '#4bceaf',
                // 字体大小
                fontSize: 18,
                fontWeight: 500
              },
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(73, 206, 177,1)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(73, 206, 177,1)'
                  }
                ],
                global: false // 缺省为 false
              }
            }
          },

          {
            data: [0, 20, 15, 30, 15, 0],
            type: 'line',
            name: '今日',
            smooth: true,
            symbolSize: 0,
            lineStyle: {
              color: 'rgba(51, 92, 236,0.8)'
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(51, 92, 236,1)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(51, 92, 236,1)'
                  }
                ],
                global: false // 缺省为 false
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
