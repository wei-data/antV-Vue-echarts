import * as echarts from 'echarts'
export default function DisplayEC (ref, value) {
  // 通过ref属性来获取图表的实例
  const myChart = echarts.init(ref)
  window.addEventListener('resize', function () {
    myChart.resize()
  })
  let option
  if (value === 'a') {
    option = {
      title: {
        text: '全部订单',
        left: '20px',
        top: 10,
        textStyle: {
          fontWeight: 500,
          fontSize: 18
        }
      },
      grid: {
        top: '50px',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['35%', '50%'],
          data: [
            {
              value: 8170,
              name: '已处理',
              itemStyle: { color: '#3f75e2' }
            },
            {
              value: 4000,
              name: '已取消',
              itemStyle: { color: '#3784ff' }
            },
            {
              value: 2180,
              name: '待处理',
              itemStyle: { color: '#5a9eff' }
            },
            {
              value: 2314,
              name: '退款中',
              itemStyle: { color: '#76c1fd' }
            }
          ],
          label: {
            formatter: function (params) {
              // 计算占比
              const percent = ((params.value / 16340) * 100).toFixed(2)
              return percent + '%' + '：' + params.name
            },
            position: 'outside',
            fontSize: 14
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ],
      graphic: [
        {
          type: 'text',
          left: 'center',
          top: '45%',
          z: 10,
          style: {
            text: '16340',
            font: '500 22px Microsoft YaHei',
            fill: '#5f89e6'
          }
        },
        {
          type: 'text',
          left: 'center',
          top: '55%',
          z: 10,
          style: {
            text: '全部订单',
            font: 'bold 12px Microsoft YaHei',
            fill: '#999'
          }
        }
      ]
    }
  } else if (value === 'b') {
    option = {
      title: {
        text: '全部订单',
        left: '20px',
        top: 10,
        textStyle: {
          fontWeight: 500,
          fontSize: 18
        }
      },
      grid: {
        top: '50px',
        left: '20%'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['35%', '50%'],
          data: [
            {
              value: 30000,
              name: '已处理',
              itemStyle: { color: '#3f75e2' }
            },
            {
              value: 16000,
              name: '已取消',
              itemStyle: { color: '#3784ff' }
            },
            {
              value: 10000,
              name: '待处理',
              itemStyle: { color: '#5a9eff' }
            },
            {
              value: 6000,
              name: '退款中',
              itemStyle: { color: '#76c1fd' }
            }
          ],
          label: {
            formatter: function (params) {
              // 计算占比
              const percent = ((params.value / 66340) * 100).toFixed(2)
              return percent + '%' + '：' + params.name
            },
            position: 'outside',
            fontSize: 14
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ],
      graphic: [
        {
          type: 'text',
          left: 'center',
          top: '45%',
          z: 10,
          style: {
            text: '16340',
            font: '500 22px Microsoft YaHei',
            fill: '#5f89e6'
          }
        },
        {
          type: 'text',
          left: 'center',
          top: '55%',
          z: 10,
          style: {
            text: '全部订单',
            font: 'bold 12px Microsoft YaHei',
            fill: '#999'
          }
        }
      ]
    }
  } else if (value === 'c') {
    option = {
      title: {
        text: '全部订单',
        left: '20px',
        top: 10,
        textStyle: {
          fontWeight: 500,
          fontSize: 18
        }
      },
      grid: {
        top: '50px',
        left: '20%'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['35%', '50%'],
          data: [
            {
              value: 130000,
              name: '已处理',
              itemStyle: { color: '#3f75e2' }
            },
            {
              value: 20480,
              name: '已取消',
              itemStyle: { color: '#3784ff' }
            },
            {
              value: 5000,
              name: '待处理',
              itemStyle: { color: '#5a9eff' }
            },
            {
              value: 5000,
              name: '退款中',
              itemStyle: { color: '#76c1fd' }
            }
          ],
          label: {
            formatter: function (params) {
              // 计算占比
              const percent = ((params.value / 166340) * 100).toFixed(2)
              return percent + '%' + '：' + params.name
            },
            position: 'outside',
            fontSize: 14
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ],
      graphic: [
        {
          type: 'text',
          left: 'center',
          top: '45%',
          z: 10,
          style: {
            text: '166340',
            font: '500 22px Microsoft YaHei',
            fill: '#5f89e6'
          }
        },
        {
          type: 'text',
          left: 'center',
          top: '55%',
          z: 10,
          style: {
            text: '全部订单',
            font: 'bold 12px Microsoft YaHei',
            fill: '#999'
          }
        }
      ]
    }
  }
  myChart.setOption(option)
}
