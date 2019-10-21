<template>
  <div>
    <mt-header title="客户管理">
      <mt-button @click="$router.go(-1)" icon="back" slot="left"></mt-button>
      <mt-button class="iconfont iconjia" slot="right" @click.native="goAddPage"></mt-button>
    </mt-header>
    <search-input class="am-margin-sm" title="输入客户名称、电话查找" @search="search"></search-input>
    <!--对应供应商内容部分-->
    <div class="Reconciliation">
      <ul class="am-padding-0">
        <!--点击跳转到详情页，传参数id-->
        <li v-for="item in lists" :key="item.id" @click="$router.push(`/CustomerInformation?id=${item.id}`)">
          <div class="text">
            <router-link to="CustomerInformation"><p>{{item.name}}</p></router-link>
            <p><span>编号：{{item.number}}</span></p>
            <p><span>公司：{{item.company}}</span></p>
          </div>
          <div class="number red">￥{{item.price}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerReconciliation',
  components: {
    searchInput: () => import('../common/searchInput')
  },
  data () {
    return {
      pageData: {

      },
      lists: [{
        id: 1,
        name: '某客户',
        number: 2,
        company: '某某某公司',
        price: '1231.00'
      }, {
        id: 2,
        name: '某客户',
        number: 2,
        company: '某某某公司',
        price: '1231.00'
      }, {
        id: 3,
        name: '某客户',
        number: 2,
        company: '某某某公司',
        price: '1231.00'
      }]
    }
  },
  methods: {
    goAddPage: function () {
      this.$router.push('/CustomerInformation')
    },
    // 搜索钩子函数
    search (data) {

    }
  }
}
</script>

<style scoped>
  .Reconciliation .search{ background: #F2F2F2; color: #999999; font-size: 1.3rem; border-radius: 5px; margin: 1.1rem 0; padding: 0.9rem 0; display: flex; justify-content: center; align-items: center;}
.Reconciliation .search input{ border: none; outline: none; background: none; align-items: center; padding:0 0  2px 3px;}
.Reconciliation .search img{ width: 1.6rem; height: 1.6rem; margin-right: 3px; }

  .Reconciliation{ padding: 0 1rem;}
  .Reconciliation .search{ background: #F2F2F2; color: #999999; font-size: 1.3rem; border-radius: 5px; margin: 1.1rem 0; padding: 0.9rem 0; display: flex; justify-content: center; align-items: center;}
  .Reconciliation .search input{ border: none; outline: none; background: none; align-items: center; padding:0 0  2px 3px;}
  .Reconciliation .search img{ width: 1.6rem; height: 1.6rem; margin-right: 3px; }
  .Reconciliation li{ padding: 1rem 0;}
  .Reconciliation p{ margin: 0; padding: 0}
  .Reconciliation li{ border-bottom: #E6E6E6 solid 1px; display: flex; align-items: center;}
  .Reconciliation li .text{ flex: 1; }
  .Reconciliation li .red{ color:#FF7360}
  .Reconciliation li .number{ float: right;}
  .Reconciliation li .text p{color: #333333; font-size: 1.3rem; line-height: 2.2rem;}
  .Reconciliation li .text p span{ color: #999999; font-size: 1.2rem;}

</style>
