<template>
  <ul class="data">
    <li>
      <p class="top">出货数据（月）</p>
      <h1>21534</h1>
      <p class="bottom">较昨日<a-icon type="caret-up" />10</p>
    </li>
    <li>
      <p class="top">出货数据（月）</p>
      <h1>21534</h1>
      <p class="bottom">较昨日<a-icon type="caret-up" />10</p>
    </li>
    <li>
      <p class="top">出货数据（月）</p>
      <h1>21534</h1>
      <p class="bottom">较昨日<a-icon type="caret-up" />10</p>
    </li>
    <li>
      <p class="top">出货数据（月）</p>
      <h1>21534</h1>
      <p class="bottom">较昨日<a-icon type="caret-up" />10</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'DataAnalysis'
}
</script>

<style lang="scss" scoped>
//数据分类样式
.data {
  display: flex;
  justify-content: space-between;

li {
  width: 22%;
  height: 171px;
  box-shadow: 0px 10px 16px 0px rgba(132, 132, 152, 0.34);
  border-radius: 15px;

&:nth-child(1) {
   background: linear-gradient(to bottom right, orange, yellow)
 }

&:nth-child(2) {
   background: linear-gradient(to bottom right, #d04a4a, pink)
 }

&:nth-child(3) {
   background: linear-gradient(to bottom right, #61c43a, #a8d214)
 }

&:nth-child(4) {
   background: linear-gradient(to bottom right, #3bde69, #18d9d3)
 }

.top {
  height: 50px;
  line-height: 50px;
  padding-left: 20px;
  box-sizing: border-box;
  margin: 0;
}

h1 {
  margin: 0;
  text-align: center;
  font-size: 40px;
}

.bottom {
  margin: 15px 0 0;
  float: right;
  box-sizing: border-box;
  padding-right: 20px;
}
}
}

</style>
