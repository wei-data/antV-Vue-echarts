<template>
  <div class="box">
<!--    <p>{{this.$store.getters.completedItems}}</p>-->
    <a-table style="height: 100%;width: 100%" :columns="columns" :data-source="data" :scroll="{ y: 600 }" :row-selection="rowSelection">
      <template slot="name" slot-scope="record">
        <img :src="name" alt="">{{record}}
      </template>
      <template
        v-for="col in ['name', 'commodity', 'price', 'quantity', 'amount', 'state', 'CreationTime']"
        :slot="col"
        slot-scope="text, record"
      >
        <div :key="col">
          <a-input
            v-if="record.editable"
            style="margin: -5px 0"
            :value="text"
            @change="e => handleChange(e.target.value, record.key, col)"
          />
          <template v-else>
            {{ text }}
          </template>
        </div>
      </template>
      <template slot="operation" slot-scope="text, record">
        <div class="editable-row-operations">
          <a-row type="flex" justify="space-between">
            <a-col>
             <span  v-if="record.editable"  style="margin-right: 10px">
              <a-button type="danger" @click="() => save(record.key)">确认</a-button>
            </span>
              <span v-else>
                <a-button type="danger" :disabled="editingKey !== ''" @click="() => edit(record.key)">编辑</a-button>
            </span>
            </a-col>
            <a-col><a-button type="danger" @click="onDelete(record.key)">删除</a-button></a-col>
          </a-row>
        </div>
      </template>
    </a-table>
  </div>
</template>

<script>
const columns = [
  {
    title: '订单编号',
    dataIndex: 'key',
    width: '10%'
  },
  {
    title: '商品',
    dataIndex: 'commodity',
    width: '10%',
    scopedSlots: { customRender: 'commodity' }
  },
  {
    title: '单价',
    dataIndex: 'price',
    width: '10%',
    scopedSlots: { customRender: 'price' }
  },
  {
    title: '数量',
    dataIndex: 'quantity',
    width: '10%',
    scopedSlots: { customRender: 'quantity' }
  },
  {
    title: '金额',
    dataIndex: 'amount',
    width: '10%',
    scopedSlots: { customRender: 'amount' }
  },
  {
    title: '状态',
    dataIndex: 'state',
    width: '10%',
    scopedSlots: { customRender: 'state' }
  },
  {
    title: '创建时间',
    dataIndex: 'CreationTime',
    width: '20%',
    scopedSlots: { customRender: 'CreationTime' }
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    width: '15%',
    scopedSlots: { customRender: 'operation' }
  }
]

export default {
  name: 'OrderTable',
  data () {
    // this.cacheData = data.map(item => ({ ...item }))
    return {
      from: {
        name: '',
        sort: ''
      },
      search: '',
      visible: false,
      data: this.$store.getters.completedItems,
      columns,
      editingKey: '',
      cacheData: ''
    }
  },
  methods: {
    showModal () {
      this.visible = true
    },
    hideModal () {
      this.visible = false
      console.log(this.from)
      this.$notification.success({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
      })
    },
    // // 搜索事件
    // onSearch () {
    //   this.data = this.data.filter(item => item.name === this.search)
    // },
    // // 添加事件
    // onAdd () {
    // },
    // 修改文本框
    edit (key) {
      this.cacheData = this.data.map(item => ({ ...item }))
      console.log(this.cacheData)
      const newData = [...this.data]
      const target = newData.find(item => key === item.key)
      this.editingKey = key
      if (target) {
        target.editable = true
        this.data = newData
      }
    },
    // 确认修改
    save (key) {
      const newData = [...this.data]
      const newCacheData = [...this.cacheData]
      const target = newData.find(item => key === item.key)
      const targetCache = newCacheData.find(item => key === item.key)
      if (target && targetCache) {
        delete target.editable
        this.data = newData
        Object.assign(targetCache, target)
        this.cacheData = newCacheData
      }
      this.editingKey = ''
    },
    // 输入框发生变化时触发此事件
    handleChange (value, key, column) {
      console.log(value, key, column)
      const newData = [...this.data]
      const target = newData.find(item => key === item.key)
      if (target) {
        target[column] = value
        this.data = newData
      }
    },
    cancel (key) {
      const newData = [...this.data]
      const target = newData.find(item => key === item.key)
      this.editingKey = ''
      if (target) {
        Object.assign(target, this.cacheData.find(item => key === item.key))
        delete target.editable
        this.data = newData
      }
    },
    // 删除事件
    onDelete (key) {
      console.log(key)
      const data = [...this.data]
      this.data = data.filter(item => item.key !== key)
    }
  },
  created () {
    this.$store.dispatch('request')
  },
  mounted () {
    console.log(this.$route.meta.module)
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
  }
}
</script>

<style lang="scss" scoped>
//隐藏滚动条样式
::-webkit-scrollbar {
  width: 0;
  height: 8px;
}
.ant-table-wrapper {
  //height: 500px;
  overflow-y: scroll;
}
.box {
  height: 600px;
  overflow: hidden;
  border-radius: 10px;
  margin-top: 20px;
}
::v-deep .ant-row-flex-space-between{
  justify-content: center;
  .ant-col{
    margin: 0 10px;
  }
}
</style>
