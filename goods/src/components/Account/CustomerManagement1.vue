<template>
  <div>
    <mt-header title="客户管理">
      <mt-button @click="$router.go(-1)" icon="back" slot="left"></mt-button>
      <mt-button class="iconfont icon-iconfontadd
" slot="right" @click.native="goAddPage"></mt-button>
    </mt-header>

    <!--对应供应商内容部分-->
    <div class="Reconciliation">
      <div class="search">
        <img src="../../assets/images/account/search.png"/>
        <input type="text" name="" id="" placeholder="搜索公司、手机号" v-model="search"/>
      </div>

      <ul>
        <li>
          <div class="text">
            <router-link to="customer"><p>某客户</p></router-link>
            <p><span>编号：2</span></p>
            <p><span>公司：某某某公司</span></p>
          </div>
          <div class="number red">￥1231.00</div>
        </li>
        <li>
          <div class="text">
            <router-link to="customer"><p>某客户</p></router-link>
            <p><span>编号：2</span></p>
            <p><span>公司：某某某公司</span></p>
          </div>
          <div class="number">￥1231.00</div>
        </li>
        <li>
          <div class="text">
            <router-link to="customer"><p>某客户</p></router-link>
            <p><span>编号：2</span></p>
            <p><span>公司：某某某公司</span></p>
          </div>
          <div class="number">￥1231.00</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'company-reconciliation1',
    data () {
      return {
        msg: '121212'
      }
    },
    methods: {
      goAddPage: function () {
        this.$router.push('/CustomerInformation1')
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
  .Reconciliation ul,.Reconciliation li{ margin: 0; padding: 0;}
  .Reconciliation li{ padding: 1rem 0;}
  .Reconciliation p{ margin: 0; padding: 0}
  .Reconciliation li{ border-bottom: #E6E6E6 solid 1px; display: flex; align-items: center;}
  .Reconciliation li .text{ flex: 1; }
  .Reconciliation li .red{ color:#FF7360}
  .Reconciliation li .number{ float: right;}
  .Reconciliation li .text p{color: #333333; font-size: 1.3rem; line-height: 2.2rem;}
  .Reconciliation li .text p span{ color: #999999; font-size: 1.2rem;}

</style>
