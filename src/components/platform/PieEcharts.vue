<template>
  <div class="echarts" ref="my-chart" style="width: 55%;height:380px;"></div>
</template>

<script>
export default {
  name: 'PieEcharts',
  mounted () {
    // 初始化 echarts 实例
    const myChart = this.$echarts.init(this.$refs['my-chart'])
    window.addEventListener('resize', function () {
      myChart.resize()
    })
    const option = {
      title: {
        text: '数据分析.前四名',
        top: '5%',
        left: '5%',
        textStyle: {
          fontWeight: 500
        }
      },
      graphic: [
        {
          type: 'text',
          left: 'center',
          top: '45%',
          z: 10,
          style: {
            text: '商品种类',
            font: '500 40px Microsoft YaHei',
            fill: '#d93c3c'
          }
        },
        {
          type: 'text',
          left: 'center',
          top: '58%',
          z: 10,
          style: {
            text: '数据分析',
            font: '500 12px Microsoft YaHei',
            fill: '#999'
          }
        }
      ],
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['50%', ' 70%'],
          data: [
            { value: 350, name: '沙发', itemStyle: { color: '#e84242' } },
            { value: 160, name: '床', itemStyle: { color: '#fd5353' } },
            { value: 150, name: '电视柜', itemStyle: { color: '#fa7777' } },
            { value: 140, name: '椅子', itemStyle: { color: '#fb9c9c' } }
          ],
          label: {
            alignTo: 'edge',
            formatter: function (params) {
              const sum = 1000
              // for (let i = 0; i < option.series[0].data.length; i++) {
              //   sum += option.series[0].data[i].value;
              // }
              const percentage = ((params.value / sum) * 100).toFixed(2)
              return `${params.name}   ${percentage}%`
            },
            edgeDistance: 70,
            rich: {
              time: {
                fontSize: 5,
                color: '#999'
              }
            }
          },
          labelLine: {
            length: 0,
            length2: 0,
            maxSurfaceAngle: 80
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
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
}

</style>
