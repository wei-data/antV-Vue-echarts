<template>
  <div class="broken">
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1">
      <span slot="tab">
        交易数据
      </span>
        <BrokenLineOne></BrokenLineOne>
      </a-tab-pane>
      <a-tab-pane key="2">
      <span slot="tab">
        浏览数据
      </span>
        <BrokenLineTwo></BrokenLineTwo>
      </a-tab-pane>
      <a-tab-pane key="3">
      <span slot="tab">
        收入数据
      </span>
        <BrokenLineThree></BrokenLineThree>
      </a-tab-pane>
      <a-tab-pane key="4">
      <span slot="tab">
        用户活跃
      </span>
        <BrokenLineFour></BrokenLineFour>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import BrokenLineOne from '@/components/Home/StatisticalChart_one.vue'
import BrokenLineTwo from '@/components/Home/StatisticalChart_two.vue'
import BrokenLineThree from '@/components/Home/StatisticalChart_three.vue'
import BrokenLineFour from '@/components/Home/StatisticalChart_four.vue'
export default {
  name: 'Broken_',
  components: {
    BrokenLineOne,
    BrokenLineTwo,
    BrokenLineThree,
    BrokenLineFour
  },
  methods: {
    callback (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.broken{
  position: relative;
  width: 100%;
  height: 410px;
  background-color: #ffffff;
  box-shadow: 0px 10px 16px 0px
  rgba(132, 132, 152, 0.34);
  border-radius: 10px;
  box-sizing: border-box;
  opacity: 0.7;
  ::v-deep .ant-tabs{
    .ant-tabs-bar {
      position: absolute;
      z-index: 1000;
      top: 20px;
      margin: 0;
      left: 200px;
      .ant-tabs-nav .ant-tabs-tab{
        margin: 0;
        padding: 3px 8px;
        font-size: 18px;
      }
      //.ant-tabs-nav .ant-tabs-tab:hover{
      //  color: white;
      //}
      //.ant-tabs-nav .ant-tabs-tab:hover {
      //  color: white;
      //  background: #d83030;
      //}
      .ant-tabs-nav .ant-tabs-tab-active {
        color: white;
        background: #d83030;
      }
    }
    .ant-tabs-nav-wrap{
      border-radius: 5px;
      border: 1px solid #cecece;
      .ant-tabs-tab{
        border-right: 1px solid #cccccc;
        &:last-child{
          border-right: 0;
        }
      }
    }
  }
}
//导航条，隐藏
::v-deep .ant-tabs-ink-bar{
  display: none!important;
}
::v-deep .ant-tabs{
  overflow: visible!important;
  height: 100%;
}
::v-deep .ant-tabs .ant-tabs-top-content, .ant-tabs .ant-tabs-bottom-content{
  height: 410px;
}
</style>
