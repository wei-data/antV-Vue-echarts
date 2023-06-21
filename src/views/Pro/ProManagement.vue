<template>
 <div>
   <H1_>
      <template v-slot:title>商品管理</template>
     <template v-slot:subheading></template>
   </H1_>
   <DataAnalysis></DataAnalysis>
   <a-row style="height: 30px;margin: 20px 0">
     <a-col :span="3">
       <p style="text-align: center; line-height: 30px">商品分类</p>
     </a-col>
     <a-col :span="8">
       <a-input placeholder="输入商品名" v-model="search"/>
     </a-col>
     <a-col :span="4" offset="1">
       <a-row type="flex" justify="space-between">
         <a-button type="danger" @click="onSearch">搜索</a-button>
         <a-button type="danger" @click="showModal">添加</a-button>
       </a-row>
     </a-col>
   </a-row>
   <a-table style="height: 500px" :columns="columns" :data-source="data" :row-selection="rowSelection">
     <template slot="name" slot-scope="record">
       <img :src="name" alt="">{{record}}
     </template>
     <template
       v-for="col in ['name', 'price', 'num', 'style']"
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
              <a-button type="danger" @click="() => save(record.key)">Save</a-button>
            </span>
             <span v-else>
                <a-button type="danger" :disabled="editingKey !== ''" @click="() => edit(record.key)">Edit</a-button>
              </span>
           </a-col>
           <a-col><a-button type="danger" @click="onDelete(record.key)">Delete</a-button></a-col>
         </a-row>
       </div>
     </template>
   </a-table>
   <a-modal v-model="visible" title="Modal" ok-text="确认" cancel-text="取消" @ok="hideModal">
        <div>商品名称：<a-input type="text" v-model.lazy="from.name"/></div>
        <div>商品分类：<a-input type="text" v-model.lazy="from.sort"/></div>
   </a-modal>
 </div>
</template>

<script>
import DataAnalysis from '@/components/DataAnalysis.vue'
import H1_ from '@/components/H1.vue'
const columns = [
  {
    title: '编号',
    dataIndex: 'key',
    width: '10%'
  },
  {
    title: '商品名称',
    dataIndex: 'name',
    width: '20%',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: '商品价格（元）',
    dataIndex: 'price',
    width: '20%',
    scopedSlots: { customRender: 'price' }
  },
  {
    title: '已售数量（个）',
    dataIndex: 'num',
    width: '15%',
    scopedSlots: { customRender: 'num' }
  },
  {
    title: '商品风格',
    dataIndex: 'style',
    width: '15%',
    scopedSlots: { customRender: 'style' }
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    width: '20%',
    scopedSlots: { customRender: 'operation' }
  }
]

export default {
  name: 'ProManagement',
  components: {
    DataAnalysis,
    H1_
  },
  data () {
    // this.cacheData = data.map(item => ({ ...item }))
    return {
      from: {
        name: '',
        sort: ''
      },
      search: '',
      visible: false,
      data: [],
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
    // 搜索事件
    onSearch () {
      this.data = this.data.filter(item => item.name === this.search)
    },
    // 添加事件
    onAdd () {
    },
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
  async created () {
    const { data: { data } } = await this.$http.get('/json/tsconfig.json')
    this.data = data
    console.log(data)
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
  height: 500px;
  overflow-y: scroll;
}
</style>
