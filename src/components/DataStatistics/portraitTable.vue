<template>
  <a-table :columns="columns" :data-source="data">
  </a-table>
</template>

<script>
export default {
  name: 'portraitTable',
  data () {
    return {
      columns: [
        { key: 'name', dataIndex: 'name', title: '姓名' },
        { key: 'age', dataIndex: 'age', title: '年龄' },
        { key: 'address', dataIndex: 'address', title: '地址' }
      ],
      data: [
        { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' },
        { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' },
        { key: '3', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park' },
        { key: '4', name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
