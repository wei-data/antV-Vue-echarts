<template>
  <div class="box">
    <div class="present">当月</div>
    <div class="echarts" ref="my-chart">
    </div>
  </div>
</template>

<script>
export default {
  name: 'pieEchartsA',
  mounted () {
    // 初始化 echarts 实例
    const myChart = this.$echarts.init(this.$refs['my-chart'])
    window.addEventListener('resize', function () {
      myChart.resize()
    })
    const option = {
      title: {
        text: '数据分析',
        top: '8%',
        left: '8%',
        textStyle: {
          fontWeight: 500,
          fontSize: 18,
          color: '#000000'
        }
      },
      legend: {
        top: '30%',
        left: '10%',
        itemGap: 40,
        icon: 'square',
        data: [
          '家具种类占比',
          '商品种类占比'
        ],
        orient: 'vertical',
        formatter: function (name) {
          const sum = 1000
          if (name === '家具种类占比') {
            const percentage = ((568 / sum) * 100).toFixed(2)
            return '{a|' + name + '}\n{b|' + percentage + '%}'
          } else {
            const percentage = ((432 / sum) * 100).toFixed(2)
            return '{a|' + name + '}\n{b|' + percentage + '%}'
          }
        },
        textStyle: {
          rich: {
            a: {
              color: '#878787',
              fontWeight: '400',
              fontSize: 12
            },
            b: {
              color: '#000000',
              fontWeight: '300',
              fontSize: 18,
              lineHeight: 40
            }
          }
        }
      },
      series: [
        {
          name: 'Access From',
          right: '-30%',
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '60%'],
          label: {
            position: 'inner',
            fontSize: 10,
            color: '#ffffff',
            fontWeight: 500,
            formatter: function (params) {
              const sum = 1000
              // for (let i = 0; i < option.series[0].data.length; i++) {
              //   sum += option.series[0].data[i].value;
              // }
              const percentage = ((params.value / sum) * 100).toFixed(2)
              return `${percentage}%\n${params.name}`
            }
          },
          labelLine: {
            show: false
          },
          data: [
            {
              value: 568,
              name: '家具种类占比',
              itemStyle: {
                color: '#d83030'
              }
            },
            {
              value: 432,
              name: '商品种类占比',
              itemStyle: {
                color: '#5b78ff'
              }
            }
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
}
.box{
  width: 43%;
  height:380px;
  position: relative;
  background-color: #ffffff;
  box-shadow: 0px 10px 16px 0px
  rgba(132, 132, 152, 0.34);
  border-radius: 10px;
  margin-top: 40px;
  .present {
    position: absolute;
    top: 20px;
    right: 30px;
    padding: 2px 10px;
    background: #eef2ff;
    border: 1px solid #d0c9c9;
    color: #4d72d7;
  }
  .echarts {
    width: 100%;
    height: 100%;
  }
}
</style>
