<template>
<div>
  <a-table style="margin-bottom: 20px;height: 350px" :scroll="{ y: 300 }" :columns="columns" :row-selection="rowSelection"  :data-source="data"  :pagination="false">
    <div slot="action" slot-scope="record"><a-button type="link">审核</a-button><a-button type="link" @click="onDelete(record.ID)">删除</a-button></div>
  </a-table>
</div>
</template>

<script>
const columns = [
  { title: '员工编号', dataIndex: 'ID', key: 'ID', width: '10%' },
  { title: '评价内容', dataIndex: 'content', key: 'content' },
  { title: '商品名称', dataIndex: 'name', key: 'name' },
  { title: '审核状态', dataIndex: 'state', key: 'state' },
  { title: '会员', dataIndex: 'member', key: 'member' },
  { title: '发布时间', dataIndex: 'time', key: 'time' },
  { title: '操作', scopedSlots: { customRender: 'action' } }
]

export default {
  name: 'tableEvaluate',
  data () {
    return {
      data: [],
      columns
    }
  },
  methods: {
    onDelete (key) {
      console.log(key)
      const dataSource = [...this.data]
      console.log(dataSource)
      this.data = dataSource.filter(item => item.ID !== key)
    }
  },
  computed: {
    rowSelection () {
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
        },
        getCheckboxProps: record => ({
          props: {
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name
          }
        })
      }
    }
  },
  async mounted () {
    const { data: { data } } = await this.$http.get('json/evaluate.json')
    console.log(data)
    this.data = data
  }
}
</script>

<style lang="scss" scoped>

</style>
