<template>
<div>
  <H1_><template v-slot:title>平台管理</template></H1_>
  <a-row>
    <a-col :span="22">
      <a-row type="flex">
        <p style="height: 30px;line-height: 30px;margin: 0 10px">分类名称</p>
        <a-input class="ipt" placeholder="Basic usage" />
        <a-button style="margin-left: 30px" type="danger">搜索</a-button>
      </a-row>
    </a-col>
    <a-col :span="2">
      <a-button type="danger">添加</a-button>
    </a-col>
  </a-row>
  <TablePlatform></TablePlatform>
  <div class="bottom">
    <PieEcharts></PieEcharts>
    <pieEchartsA></pieEchartsA>
  </div>
</div>
</template>

<script>
import H1_ from '@/components/H1.vue'
import TablePlatform from '@/components/platform/tablePlatfrom.vue'
import PieEcharts from '@/components/platform/PieEcharts.vue'
import PieEchartsA from '@/components/platform/pieEchartsA.vue'
export default {
  name: 'platformPage',
  components: {
    TablePlatform,
    PieEcharts,
    PieEchartsA,
    H1_
  },
  methods: {
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep.ant-advanced-search-form .ant-form-item{
  display: flex;
}
::v-deep.ant-form-item-children{
  display: flex;
}
.ipt{
  width: 200px;
}
.bottom{
  display: flex;
  justify-content: space-between;
}
</style>
