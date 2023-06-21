<template>
  <a-table :columns="columns" :data-source="data" bordered>
    <template
      v-for="col in ['name', 'age', 'address','num']"
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
        <span v-if="record.editable">
          <a @click="() => save(record.key)">Save</a>
          <a-popconfirm title="Sure to cancel?" @confirm="() => cancel(record.key)">
            <a>Cancel</a>
          </a-popconfirm>
        </span>
        <span v-else>
          <a :disabled="editingKey !== ''" @click="() => edit(record.key)">Edit</a>
        </span>
      </div>
    </template>
  </a-table>
</template>
<script>
const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    width: '25%',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: 'age',
    dataIndex: 'age',
    width: '15%',
    scopedSlots: { customRender: 'age' }
  },
  {
    title: 'address',
    dataIndex: 'address',
    width: '40%',
    scopedSlots: { customRender: 'address' }
  },
  {
    title: 'num',
    dataIndex: 'num',
    width: '20%',
    scopedSlots: { customRender: 'num' }
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' }
  }
]

const data = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    num: 20,
    address: `London Park no. ${i}`
  })
}
export default {
  name: 'abc_',
  data () {
    this.cacheData = data.map(item => ({ ...item }))
    return {
      data,
      columns,
      editingKey: ''
    }
  },
  methods: {
    handleChange (value, key, column) {
      const newData = [...this.data]
      const target = newData.find(item => key === item.key)
      if (target) {
        target[column] = value
        this.data = newData
      }
    },
    edit (key) {
      const newData = [...this.data]
      const target = newData.find(item => key === item.key)
      this.editingKey = key
      if (target) {
        target.editable = true
        this.data = newData
      }
    },
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
    cancel (key) {
      const newData = [...this.data]
      const target = newData.find(item => key === item.key)
      this.editingKey = ''
      if (target) {
        Object.assign(target, this.cacheData.find(item => key === item.key))
        delete target.editable
        this.data = newData
      }
    }
  }
}
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>

<!--<a-table :columns="columns" :data-source="data" :row-selection="rowSelection">-->
<!--<template slot="name" slot-scope="record">-->
<!--  <img :src="record" alt="">-->
<!--</template>-->
<!--<template-->
<!--  v-for="col in ['key', 'name', 'price', 'num', 'style']"-->
<!--  :slot="col"-->
<!--  slot-scope="text, record"-->
<!--&gt;-->
<!--  <div :key="col">-->
<!--    <a-input-->
<!--      v-if="record.editable"-->
<!--      style="margin: -5px 0"-->
<!--      :value="text"-->
<!--      @change="e => handleChange(e.target.value, record.key, col)"-->
<!--    />-->
<!--    <template v-else>-->
<!--      {{ text }}-->
<!--    </template>-->
<!--  </div>-->
<!--</template>-->
<!--<template slot="operation" slot-scope="text, record">-->
<!--  <div class="editable-row-operations">-->
<!--    <a-row type="flex" justify="space-between">-->
<!--      <a-col>-->
<!--             <span  v-if="record.editable"  style="margin-right: 10px">-->
<!--              <a-button type="danger" @click="() => save(record.key)">Save</a-button>-->
<!--            </span>-->
<!--        <span v-else>-->
<!--                <a-button type="danger" :disabled="editingKey !== ''" @click="() => edit(record.key)">Edit</a-button>-->
<!--              </span>-->
<!--      </a-col>-->
<!--      <a-col><a-button type="danger" @click="onDelete(record.key)">Delete</a-button></a-col>-->
<!--    </a-row>-->
<!--  </div>-->
<!--</template>-->
<!--</a-table>-->
<!--const columns = [-->
<!--{-->
<!--title: '编号',-->
<!--dataIndex: 'key',-->
<!--width: '10%',-->
<!--scopedSlots: { customRender: 'name' }-->
<!--},-->
<!--{-->
<!--title: '商品名称',-->
<!--dataIndex: 'name',-->
<!--width: '25%',-->
<!--scopedSlots: { customRender: 'age' }-->
<!--},-->
<!--{-->
<!--title: '商品价格（元）',-->
<!--dataIndex: 'price',-->
<!--width: '20%',-->
<!--scopedSlots: { customRender: 'address' }-->
<!--},-->
<!--{-->
<!--title: '已售数量（个）',-->
<!--dataIndex: 'num',-->
<!--width: '15%',-->
<!--scopedSlots: { customRender: 'age' }-->
<!--},-->
<!--{-->
<!--title: '商品风格',-->
<!--dataIndex: 'style',-->
<!--width: '15%',-->
<!--scopedSlots: { customRender: 'age' }-->
<!--},-->
<!--{-->
<!--title: 'operation',-->
<!--dataIndex: 'operation',-->
<!--width: '13%',-->
<!--scopedSlots: { customRender: 'operation' }-->
<!--}-->
<!--]-->
