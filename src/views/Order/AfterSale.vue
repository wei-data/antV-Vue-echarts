<template>
<div>
  <H1_>
    <template v-slot:title>订单管理</template>
    <template v-slot:subheading>-售后管理</template>
  </H1_>
  <OrderSearch></OrderSearch>
  <div class="echarts_">
    <OrderEcharts></OrderEcharts>
    <discounting></discounting>
  </div>
  <OrderList></OrderList>
</div>
</template>

<script>
import H1_ from '@/components/H1.vue'
import OrderSearch from '@/components/Order/OrderSearch.vue'
import OrderEcharts from '@/components/Order/OrderEcharts.vue'
import OrderList from '@/components/Order/OrderList.vue'
import discounting from '@/components/Order/discounting.vue'
export default {
  name: 'AfterSale',
  components: {
    OrderSearch,
    OrderEcharts,
    OrderList,
    discounting,
    H1_
  }
}
</script>

<style lang="scss" scoped>
  .echarts_ {
    display: flex;
    justify-content: space-between;
  }
</style>
