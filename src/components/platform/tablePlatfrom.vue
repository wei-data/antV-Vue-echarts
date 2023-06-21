<template>
<div>
  <a-table :scroll="{ y: 260 }" style="margin: 20px 0" :columns="columns" :row-selection="rowSelection"  :data-source="data"  :pagination="false">
    <div slot="action" slot-scope="record"><a-button type="link">审核</a-button><a-button type="link" @click="onDelete(record.ID)">删除</a-button></div>
  </a-table>
</div>
</template>

<script>
const columns = [
  { title: '编号', dataIndex: 'ID', key: 'ID', width: '10%' },
  { title: '分类名称', dataIndex: 'name', key: 'name' },
  { title: '添加者', dataIndex: 'additive', key: 'additive' },
  { title: '添加时间', dataIndex: 'time', key: 'time' },
  { title: '操作', scopedSlots: { customRender: 'action' } }
]

export default {
  name: 'tablePlatform',
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
    const { data: { list } } = await this.$http.get('json/evaluate.json')
    this.data = list
  }
}
</script>

<style lang="scss" scoped>

</style>
