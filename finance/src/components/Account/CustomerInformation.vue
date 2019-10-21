<template>
  <div>
    <mt-header :title="title">
      <mt-button @click="$router.go(-1)" icon="back" slot="left"></mt-button>
      <mt-button v-if="!editModel" class="iconfont iconicon_duihao-xian" slot="right" @click="save"></mt-button>
      <mt-button v-else slot="right" @click="editModel=false">编辑</mt-button>
    </mt-header>

    <div class="information">
      <cell-input title="客户编号" :value="formData.number" :readonly="editModel"></cell-input>
      <cell-input title="公司名称" :value="formData.company" required="true" :readonly="editModel"></cell-input>
      <cell-input title="联系人" :value="formData.contacts" required="true" :readonly="editModel"></cell-input>
      <cell-input title="手机" :value="formData.phone" required="true" :readonly="editModel"></cell-input>
      <cell-input title="座机" :value="formData.landLine" :readonly="editModel"></cell-input>
      <cell-input title="邮箱" :value="formData.mail" :readonly="editModel"></cell-input>
      <cell-input title="送贷地址" :value="formData.address" :readonly="editModel"></cell-input>
      <cell-input title="备注" :value="formData.desc" :readonly="editModel"></cell-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerInformation',
  components: {
    cellInput: () => import('../common/cellInput')
  },
  data () {
    return {
      customerId: this.$route.query.id || '', // 连接中有id值则取该值没值赋空
      title: this.$route.query.id ? '客户信息' : '新增客户',
      editModel: !!this.$route.query.id , // 编辑模式,,,没有id可直接编辑，，有id的话不可直接编辑
      formData: {
        number: '',
        company: '',
        contacts: '',
        phone: '',
        landLine: '',
        mail: '',
        address: '',
        desc: ''
      }
    }
  },
  computed: {
  },
  mounted () {
    if (this.customerId) {
      this.getData()
    }
  },
  methods: {
    // 保存方法
    save: function (tabIndex) {
      let params = Object.assign({}, this.formData)
      // 发送ajax
    },
    // 获取客户信息方法
    getData () {
      // 发送ajax获取，，，现在为模拟假方法
      this.formData = {
        number: 'KH121346545613164646',
        company: '某慕某某公司名称',
        contacts: '某客户',
        phone: '6545613164646',
        landLine: '6545613164646',
        mail: '132131454@163.com',
        address: '上海市某某区..',
        desc: '备注'
      }
    }
  }
}
</script>

<style scoped>
  .information{ padding: 1rem;}
</style>
