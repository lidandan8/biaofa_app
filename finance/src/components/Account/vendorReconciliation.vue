<template>
  <div>
    <mt-header title="供应商对账">
      <mt-button @click="$router.go(-1)" icon="back" slot="left"></mt-button>
    </mt-header>
    <!--对应供应商内容部分-->
    <div class="Reconciliation">
      <div class="search">
        <img src="../../assets/images/account/search.png"/>
        <input type="text" name="" id="" placeholder="搜索公司、手机号" v-model="search"/>
      </div>
      <div class="arrears">
        <div class="text">
          <p>欠款笔数</p>
          <p><span>2</span></p>
        </div>
        <div class="text">
          <p>欠款金额</p>
          <p><span>5444</span></p>
        </div>
        <div class="" style="width: 35vw">
          <span style="font-size: 1.2rem;">仅看欠款</span>
          <mt-switch v-model="value"></mt-switch>
        </div>
      </div>
      <ul>
        <li>
          <div class="text">
            <router-link to="/CompanyReconciliation"><p>********公司</p></router-link>
            <p><span>欠款笔数：2</span></p>
          </div>
          <div class="number red">￥1231.00</div>

        </li>
        <li>
          <div class="text">
            <router-link to="/CompanyReconciliation"><p>********公司</p></router-link>
            <p><span>欠款笔数：0</span></p>
          </div>
          <div class="number">￥1231.00</div>

        </li>
        <li>
          <div class="text">
            <router-link to="/CompanyReconciliation"><p>********公司</p></router-link>
            <p><span>欠款笔数：0</span></p>
          </div>
          <div class="number">￥1231.00</div>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vendorReconciliation',
  data () {
    return {
      search: '',
      value: true
    }
  },
  methods: {
    tabsSwitch: function (tabIndex) {

    }
  }
}
</script>

<style scoped>
  /*!*头部公用样式*!*/
  /*/deep/ .mint-header{ height: 46px; background: #33CBCC;}*/
  /*/deep/ .mint-header h1{ height: 46px;  margin-top: 1em; line-height: 46px; font-size: 16px;}*/
  .am-header { width: 100%; height: 4.9rem; line-height: 4.9rem; background: #33CBCC;}
  .am-header-default .am-header-icon{ font-size: 2rem;}
  .Reconciliation .arrears{ display: flex; justify-content: center; align-items: center; font-size: 1.3rem; color:#999999; padding:7px 0}
  .Reconciliation .arrears .text{ flex: 1; text-align: center;}
  .Reconciliation .arrears .text span{ color: #33CBCC; font-size:1.5rem;}

  .Reconciliation{ padding: 0 1rem}
  .Reconciliation .search{ background: #F2F2F2; color: #999999; font-size: 1.3rem; border-radius: 5px; margin: 1.1rem 0; padding: 0.9rem 0; display: flex; justify-content: center; align-items: center;}
  .Reconciliation .search input{ border: none; outline: none; background: none; align-items: center; padding:0 0  2px 3px;}
  .Reconciliation .search img{ width: 1.6rem; height: 1.6rem; margin-right: 3px; }
  .Reconciliation ul,.Reconciliation li{ margin: 0; padding: 0;}
  .Reconciliation li{ padding: 1rem 0;}
  .Reconciliation p{ margin: 0; padding: 0}
  .Reconciliation li{ border-bottom: #E6E6E6 solid 1px; display: flex; align-items: center;}
  .Reconciliation li .text{ flex: 1; }
  .Reconciliation li .red{ color:#FF7360}
  .Reconciliation li .number{ float: right; font-size: 1.4rem;}
  .Reconciliation li .text p{color: #333333; font-size: 1.3rem; line-height: 2.2rem;}
  .Reconciliation li .text p span{ color: #999999; font-size: 1.2rem;}

  /deep/ .mint-switch{ display: inline; top:0.8rem; left: 0.6rem}

</style>
