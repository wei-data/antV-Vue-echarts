<template>
  <div class="echarts" ref="my-chart" style="width: 23%;height:418px;"></div>
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
      title: {
        text: '订单中心',
        top: 20,
        left: 20,
        textStyle: {
          fontSize: '25px',
          fontWeight: 500
        }
      },
      grid: {
        bottom: '5%'
      },
      tooltip: {
        trigger: 'item'
      },
      graphic: [{ // 环形图中间添加文字
        type: 'text', // 通过不同top值可以设置上下显示
        left: '44%',
        top: '50%',
        // transform: 'translate(-50%,-50%)',
        style: {
          text: '96%',
          textAlign: 'center',
          fill: '#2b5fe3', // 文字的颜色
          fontSize: 30,
          // color: '#2b5fe3'
          lineHeight: 16
        }
      }],
      legend: {
        bottom: '5%',
        left: 'center',
        icon: 'circle',
        formatter: function (name) {
          if (name === '已处理') {
            return '{a|' + name + '}\n{b|10086168}'
          } else {
            return '{a|' + name + '}\n{b|789999}'
          }
        },
        textStyle: {
          rich: {
            a: {
              color: '#0c0c0c',
              fontWeight: 'bold',
              fontSize: 16
            },
            b: {
              color: '#878787',
              fontWeight: 'bold',
              fontSize: 14
            }
          }
        }
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          startAngle: 60, // 设置起始角度为 90 度
          radius: ['60%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 30,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 200, name: '未处理', itemStyle: { color: '#4dcfae' } },
            { value: 1700, name: '已处理', itemStyle: { color: '#2b5fe3' } }
          ]
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
