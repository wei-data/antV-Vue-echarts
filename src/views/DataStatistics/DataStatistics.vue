<template>
  <div class="box">
    <DiscountedGraph></DiscountedGraph>
    <div class="center" style="margin: 20px 0">
      <Statistical></Statistical>
      <StatisticalT></StatisticalT>
    </div>
    <portraitTable></portraitTable>
  </div>
</template>

<script>
import DiscountedGraph from '@/components/DataStatistics/DiscountedGraph.vue'
import Statistical from '@/components/DataStatistics/Statistical.vue'
import StatisticalT from '@/components/DataStatistics/StatisticalT.vue'
import portraitTable from '@/components/DataStatistics/portraitTable.vue'
export default {
  name: 'DataStatistics',
  components: {
    StatisticalT,
    DiscountedGraph,
    portraitTable,
    Statistical
  }
}
</script>

<style lang="scss" scoped>
//隐藏滚动条样式
::-webkit-scrollbar {
  width: 0;
  height: 8px;
}
.box{
  height: 100%;
  overflow-y: scroll;
}
.center {
  display: flex;
  justify-content: space-between
}
</style>
