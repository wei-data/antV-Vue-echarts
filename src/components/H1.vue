<template>
<div class="h1">
  <h1><slot name="title">标题</slot><span><slot name="subheading"></slot></span></h1>
</div>
</template>

<script>
export default {
  name: 'H1_'
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 25px;
  height: 50px;
  line-height: 50px;
  border-left: 10px solid #d83030;
  padding-left: 15px;
  span {
    font-size: 18px;
  }
}
</style>
