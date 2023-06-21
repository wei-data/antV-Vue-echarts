<template>
<div class="container">
  <a-radio-group v-model="value" @change="onChange" style="display: flex">
    <a-radio :style="radioStyle" value="全部订单">
      <span class="span">全部订单</span>
      <div class="image">
        <img v-if="value!=='全部订单'" src="/img/FullOrder.png" alt="111">
        <img v-else src="/img/FullOrder-active.png" alt="222">
      </div>
    </a-radio>
    <a-radio :style="radioStyle" value="待付款">
      <span class="span">待付款</span>
      <div class="image">
        <img v-if="value!=='待付款'" src="/img/due.png" alt="111">
        <img v-else src="/img/due-active.png" alt="222">
      </div>
    </a-radio>
    <a-radio :style="radioStyle" value="代发货">
      <span class="span">代发货</span>
      <div class="image">
        <img v-if="value!=='代发货'" src="/img/stayDeliver.png" alt="111">
        <img v-else src="/img/stayDeliver-active.png" alt="222">
      </div>
    </a-radio>
    <a-radio :style="radioStyle" value="已发货">
      <span class="span">已发货</span>
      <div class="image">
        <img v-if="value!=='已发货'" src="/img/hasDeliver.png" alt="111">
        <img v-else src="/img/hasDeliver-active.png" alt="222">
      </div>
    </a-radio>
    <a-radio :style="radioStyle" value="已完成">
      <span class="span">已完成</span>
      <div class="image">
        <img v-if="value!=='已完成'" src="/img/complete.png" alt="111">
        <img v-else src="/img/complete-active.png" alt="222">
      </div>
    </a-radio>
    <a-radio :style="radioStyle" value="已取消">
      <span class="span">已取消</span>
      <div class="image">
        <img v-if="value!=='已取消'" src="/img/Cancel.png" alt="111">
        <img v-else src="/img/Cancel-active.png" alt="222">
      </div>
    </a-radio>
  </a-radio-group>
</div>
</template>

<script>
export default {
  name: 'singleChoice',
  data () {
    return {
      value: this.$store.state.sort,
      radioStyle: {
        height: '150px',
        width: '160px'
      }
    }
  },
  methods: {
    onChange (e) {
      console.log('radio checked', e.target.value)
      this.$store.commit('alter', this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.image{
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.span{
  margin-left: 10px;
}
::v-deep.ant-radio-wrapper {
  box-shadow: 0 0 5px #808080;
  border-radius: 5px;
}
::v-deep .ant-radio{
  margin-left: 20px;
  margin-top: 10px;
}
::v-deep.ant-radio-wrapper{
  margin-right: 20px;
}
::v-deep.ant-radio-group{
  justify-content: center;
}
</style>
