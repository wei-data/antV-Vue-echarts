<template>
  <div class="echarts" ref="my-chart" style="width: 100%;height:380px;"></div>
</template>

<script>
export default {
  name: 'evaluateEcharts',
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
        data: ['一般', '极好'],
        type: 'scroll',
        top: 10,
        icon: 'square',
        right: 30,
        // itemStyle: {
        //   color: 'rgba(255,255,255,0)',
        //   borderColor: 'rgba(255,255,255,0)'
        // },
        // icon: 'https://picnew12.photophoto.cn/20180816/caisejianbianyanse-duocaijianbian-bopuse-29754823_1.jpg',
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
          color: '#e05b5b'
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#e05b5b',
            width: 3
          }
        },
        axisLabel: {
          textStyle: {
            color: '#e05b5b'
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
          show: true
        },
        axisTick: {
          show: false
        },
        nameTextStyle: {
          color: '#000000'
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#000000',
            width: 3
          }
        }
      },
      // 数据
      series: [
        {
          data: [20, 26, 34, 40, 36, 30, 28, 24, 30, 28, 24, 21, 18, 25, 20],
          type: 'line',
          name: '一般',
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
                  color: 'rgba(72, 210, 175,0)'
                },
                {
                  offset: 0,
                  color: 'rgba(95,201,174,0.7)'
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
          data: [32, 28, 24, 20, 18, 24, 26, 24, 26, 20, 24, 28, 30, 35, 30],
          type: 'line',
          smooth: true,
          name: '极好',
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
                  color: 'rgba(82,119,232,0.7)'
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
  background-color: #ffffff;
  box-shadow: 0px 10px 16px 0px
  rgba(132, 132, 152, 0.34);
  border-radius: 10px;
  margin-top: 40px;
::v-deep >div:first-child{
  width: 100%!important;
canvas{
  width: 100%!important;
}
}
}

</style>
