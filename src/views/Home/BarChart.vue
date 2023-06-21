<template>
  <div class="echarts" ref="my-chart" style="width: 75%;height:418px;"></div>
</template>

<script>
export default {
  name: 'BarChart',
  mounted () {
    // 初始化 echarts 实例
    const myChart = this.$echarts.init(this.$refs['my-chart'])
    window.addEventListener('resize', function () {
      myChart.resize()
    })
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        top: 20,
        left: 100,
        icon: 'circle', // 设置为菱形形状
        data: ['总收入（元）', '总支出（元）'],
        formatter: function (name) {
          if (name === '总收入（元）') {
            return '{b|10086168}\n{a|' + name + '}'
          } else {
            return '{b|789999}\n{a|' + name + '}'
          }
        },
        textStyle: {
          rich: {
            a: {
              color: '#8f8f8f',
              fontWeight: 'bold',
              fontSize: 14
            },
            b: {
              color: '#0f0f0f',
              fontWeight: 'bold',
              fontSize: 18
            }
          }
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            show: false
          },
          axisLine: {
            show: false

          },
          axisLabel: {
            show: true,
            margin: 25
          },
          data: [{
            value: '一月',
            textStyle: {
              color: 'rgba(232, 9, 9, 1)'
            }
          }, {
            value: '二月',
            textStyle: {
              color: 'rgba(232, 9, 9, 1)'
            }
          }, {
            value: '三月',
            textStyle: {
              color: 'rgba(232, 9, 9, 1)'
            }
          }, {
            value: '四月',
            textStyle: {
              color: 'rgba(232, 9, 9, 1)'
            }
          }, {
            value: '五月',
            textStyle: {
              color: 'rgba(232, 9, 9, 1)'
            }
          }, {
            value: '六月',
            textStyle: {
              color: 'rgba(232, 9, 9, 1)'
            }
          }, {
            value: '七月',
            textStyle: {
              color: 'rgba(232, 9, 9, 1)'
            }
          }, {
            value: '八月',
            textStyle: {
              color: 'rgba(232, 9, 9, 1)'
            }
          }, {
            value: '九月',
            textStyle: {
              color: 'rgba(232, 9, 9, 1)'
            }
          }, {
            value: '十月',
            textStyle: {
              color: 'rgba(232, 9, 9, 1)'
            }
          }, {
            value: '十一月',
            textStyle: {
              color: 'rgba(232, 9, 9, 1)'
            }
          }, {
            value: '十二月',
            textStyle: {
              color: 'rgba(232, 9, 9, 1)'
            }
          }]
        }
      ],
      yAxis: [
        {
          show: false
        }
      ],
      series: [
        {
          name: '总收入（元）',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 330, 310, 182, 191, 234, 290, 330]
        },
        {
          name: '总支出（元）',
          type: 'bar',
          stack: 'Ad',
          itemStyle: {
            // 设置边框圆角
            borderRadius: [10, 10, 0, 0]
          },
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 90, 150, 140, 132, 101, 134, 90, 150]
        }
      ]
    }
    // 使用刚指定的配置项和数据显示图表。.
    myChart.setOption(option)
  }
}

</script>

<style lang="scss" scoped>
.echarts{
  box-shadow: 0px 10px 16px 0px
  rgba(132, 132, 152, 0.68);
  opacity: 0.9;
  border-radius: 15px;
  ::v-deep >div:first-child{
    width: 100%!important;
    canvas{
      width: 100%!important;
    }
  }
}
</style>
