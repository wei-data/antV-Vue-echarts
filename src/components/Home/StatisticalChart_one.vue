<template>
  <div class="echarts" ref="my-chart" style="width: 100%;height:100%;"></div>
</template>

<script>
export default {
  name: 'StatisticalChart_one',
  mounted () {
    // 初始化 echarts 实例
    const myChart = this.$echarts.init(this.$refs['my-chart'])
    window.addEventListener('resize', function () {
      myChart.resize()
    })
    const symbolSize = 15
    const option = {
      title: {
        text: '数据总览',
        top: '20px',
        left: '30px',
        textStyle: {
          fontSize: 18,
          fontWeight: 500
        }
      },
      // 位置
      grid: {
        top: '70',
        bottom: '10%',
        right: '3%',
        left: '2%',
        containLabel: true
      },
      legend: {
        data: ['去年', '今年'],
        type: 'scroll',
        top: 10,
        right: 30,
        itemStyle: {
          color: 'rgba(255,255,255,0)',
          borderColor: 'rgba(255,255,255,0)'
        },
        // icon:"image:https://img0.baidu.com/it/u=1487799431,376049746&fm=253&fmt=auto&app=138&f=JPEG?w=870&h=473",
        lineStyle: {
          width: 1.5
        },
        textStyle: {
          color: '#133bc9',
          fontWeight: 600,
          fontSize: '14px'
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      // x轴
      xAxis: {
        show: true,
        type: 'category',
        axisTick: {
          show: false
        },
        nameTextStyle: {
          color: '#2d95ff'
        },
        axisLine: {
          lineStyle: {
            color: '#2d95ff',
            width: 3
          }
        },
        axisLabel: {
          textStyle: {
            color: 'black'
          }
        },
        splitLine: {
          show: false
        },
        boundaryGap: false,
        data: ['08-01', '08-02', '08-03', '08-04', '08-05', '08-06', '08-07', '08-08', '08-09', '08-10', '08-11', '08-12', '08-13', '08-14', '08-15']
      },
      // y轴
      yAxis: {
        type: 'value',
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        nameTextStyle: {
          color: '#2d95ff'
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#2d95ff',
            width: 3
          }
        }
      },
      // 数据
      series: [
        {
          data: [600, 800, 600, 350, 800, 550, 800, 500, 600, 500, 500, 300, 600, 1000, 600],
          type: 'line',
          name: '去年',
          top: 0,
          smooth: true,
          symbol: 'circle',
          symbolSize: symbolSize,
          lineStyle: {
            color: '#18ffe9'
          },
          areaStyle: {
            symbolSize: symbolSize,
            textStyle: {
              // 文字颜色
              color: '#30ceee',
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
                  offset: 1,
                  color: 'rgba(72, 210, 175,.1)'
                },
                {
                  offset: 0,
                  color: 'rgba(72, 210, 175,.7)'
                }
              ],
              global: false // 缺省为 false
            }
          },
          itemStyle: {
            color: '#19ffeb',
            borderWidth: 2,
            borderColor: '#fff'
          }
        },

        {
          data: [800, 700, 1000, 200, 500, 650, 1000, 600, 500, 500, 700, 700, 600, 500, 500],
          type: 'line',
          smooth: true,
          name: '今年',
          symbol: 'circle',
          symbolSize: symbolSize,
          lineStyle: {
            color: '#355eed'
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
                  offset: 1,
                  color: 'rgba(55, 102, 243,0)'
                },
                {
                  offset: 0,
                  color: 'rgba(55, 102, 243,.7)'
                }
              ],

              global: false // 缺省为 false
            }
          },
          itemStyle: {
            color: '#355eed',
            borderWidth: 1,
            borderColor: '#fff'
          }
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
  ::v-deep >div:first-child{
    width: 100%!important;
    canvas{
      width: 100%!important;
    }
  }
}
</style>
