<template>
  <div class="home" style="background: #fff;">
    <DataAnalysis></DataAnalysis>
    <Broken></Broken>
    <div class="footer">
      <BarChart></BarChart>
      <PieChart></PieChart>
    </div>
  </div>
</template>

<script>
import Broken from '@/views/Home/Broken.vue'
import BarChart from '@/views/Home/BarChart.vue'
import PieChart from '@/views/Home/PieChart.vue'
import DataAnalysis from '@/components/DataAnalysis.vue'

export default {
  name: 'Home_',
  components: {
    Broken,
    BarChart,
    PieChart,
    DataAnalysis
  }
}
</script>

<style lang="scss" scoped>
//隐藏滚动条样式
::-webkit-scrollbar {
  width: 0;
  height: 8px;
}
//主体
.home {
  height: 100%;
  overflow-y: scroll;

  //  底部图标样式
  .footer {
    width: 100%;
    //height: 418px;
    //border: 1px solid #cccccc;
    margin-top: 50px;
    margin-bottom: 30px;
    //border-radius: 15px;
    //overflow: hidden;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }
}
</style>
