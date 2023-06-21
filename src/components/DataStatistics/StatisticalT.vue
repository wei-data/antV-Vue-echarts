<template>
  <div class="box">
    <div class="make">
      <div class="makeBox">
        <div class="leftContent">
          <p>当天成交 <span>21</span>更多</p >
          <p>当月成交 <span>32</span><small>+16.1%</small></p >
        </div>
        <div class="dealNumber">
          <h4>当天成交量</h4>
          <div class="day">
            <p><small></small></p ><span>21</span>
          </div>
          <h4>当月成交量</h4>
          <div class="mouth">
            <p><small></small></p ><span>32</span>
          </div>
        </div>
      </div>
    </div>
    <div ref="my-chart"
         id="essentialInformation"
         style="width: 60%; height: 310px">
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatisticalT',
  methods: {
    echartsF () {
      const myChart = this.$echarts.init(this.$refs['my-chart'])
      window.addEventListener('resize', function () {
        myChart.resize()
      })
      // const symbolSize = 15
      const option = {
        title: {
          text: '成交量',
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
            show: false,
            splitLine: {
              show: false
            },
            type: 'category',
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
            show: false,
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
            data: [10, 52, 70, 34, 90, 30, 52, 70, 34, 20, 52, 70, 34, 90, 30, 90, 30, 52, 70, 34, 20, 52, 52, 70, 90, 30, 52, 70, 34, 20, 52, 70, 34, 20],
            barWidth: 10,
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
.box {
  width: 68%;
  height: 310px;
  box-shadow: 0px 10px 16px 0px
  rgba(132, 132, 152, 0.34);
  border-radius: 10px;
  position: relative;
}
.make {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 140px;
  margin: 2px 0 0 2px;

.makeBox {
  color: #d83030;
  width: 100%;
  padding: 16px 43px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

.leftContent {
  width: 160px;
  display: flex;
  flex-direction: column;

span {
  margin: 0 5px;
  color: black;
}

small {
  color: green;
}
}

.dealNumber {

h4 {
  font-size: 14px;
  color: black;
}

.day {
  width: 175px;
  display: flex;
  justify-content: space-between;

p {
  position: relative;
  width: 125px;
  height: 6px;
  background: #e2f0ff;
  border-radius: 5px;

small {
  position: absolute;
  top: 0;
  left: 0;
  width: 104px;
  height: 6px;
  background: #4f82f9;
}
}

span {
  position: relative;
  top: -27px;
  left: 75%;
  color: black;
}
}

.mouth {
  width: 175px;
  display: flex;
  justify-content: space-between;

p {
  position: relative;
  width: 125px;
  height: 6px;
  background: #e2f0ff;
  border-radius: 5px;

small {
  position: absolute;
  top: 0;
  left: 0;
  width: 75px;
  height: 6px;
  background: #a295f6;
}
}

span {
  position: relative;
  top: -27px;
  left: 75%;
  color: black;
}
}
}
}
}

</style>
