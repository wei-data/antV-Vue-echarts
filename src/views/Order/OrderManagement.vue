<template>
  <div>
    <H1_>
      <template v-slot:title>订单管理</template>
      <template v-slot:subheading>-商品订单</template>
    </H1_>
    <OrderSearch></OrderSearch>
    <singleChoice></singleChoice>
    <OrderTable></OrderTable>
  </div>
</template>

<script>
import H1_ from '@/components/H1.vue'
import OrderSearch from '@/components/Order/OrderSearch.vue'
import singleChoice from '@/components/Order/OrderA/singleChoice.vue'
import OrderTable from '@/components/Order/OrderA/OrderTable.vue'
export default {
  name: 'OrderManagement',
  components: {
    OrderTable,
    OrderSearch,
    H1_,
    singleChoice
  }
}
</script>

<style scoped>

</style>
