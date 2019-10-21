<template>
    <div>
      <mt-header title="*****公司">
        <mt-button @click="$router.go(-1)" icon="back" slot="left"></mt-button>
      </mt-header>

      <!--这儿是页面切换按钮-->
      <div data-am-widget="tabs" class="am-tabs am-tabs-default tabWarp" style="margin: 0;">
        <div class="am-padding-horizontal-sm am-padding-top-sm">
          <ul class="am-tabs-nav am-cf">
            <li @click="tabIndex = 1" :class="{'am-active': tabIndex === 1}">
              <a>全部单据</a>
            </li>
            <li class="" @click="tabIndex = 2" :class="{'am-active': tabIndex === 2}">
              <a>欠款单据</a>
            </li>
            <li class="" @click="tabIndex = 3" :class="{'am-active': tabIndex === 3}">
              <a>欠款单据</a>
            </li>
          </ul>
        </div>
        <div class="am-tabs-bd">
          <div data-tab-panel-0 class="am-tab-panel" v-show="tabIndex === 1" :class="{'am-active': tabIndex === 1}">
            <!--第一个切换框-->
            <!--选择时间-->
            <div class="choiceTime am-text-center am-padding-vertical-xs">
              <span class="am-text-primary">2019-9-18</span>
              <span class="am-padding-horizontal">至</span>
              <span class="am-text-primary">2019-9-18</span>
            </div>
            <!--付款金额-->
            <div class="payMoney am-margin-horizontal-sm">
              <div class="item">
                <p>应付：6000.00</p>
                <p>实付：6000.00</p>
              </div>
              <div class="item">
                <p>应付余额：<span class="am-text-warning">6000.00</span></p>
              </div>
            </div>
            <!--款项条目-->
            <div class="payDetailItem">
              <ul class="am-list">
                <li class="am-g">
                  <div class="text">
                    <p>2019-9-18</p>
                    <p>操作人：<span class="am-text-dark">某某某</span></p>
                    <p>单号：CG123123123123</p>
                    <p>应付金额：<span class="am-text-dark">1200.00</span></p>
                    <p>实付金额：<span class="am-text-dark">1200.00</span></p>
                    <p>应付余额：<span class="am-text-danger">0</span></p>
                  </div>
                  <div class="link"><a href="#" class="iconfont iconqianwang"></a></div>
                </li>
                <li class="am-g">
                  <div class="text">
                    <p>2019-9-18</p>
                    <p>操作人：<span class="am-text-dark">某某某</span></p>
                    <p>单号：CG123123123123</p>
                    <p>应付金额：<span class="am-text-dark">1200.00</span></p>
                    <p>实付金额：<span class="am-text-dark">1200.00</span></p>
                    <p>应付余额：<span class="am-text-danger">200.00</span></p>
                  </div>
                  <div class="link"><a href="#" class="iconfont iconqianwang"></a></div>
                </li>
              </ul>
            </div>
          </div>
          <div data-tab-panel-1 class="am-tab-panel " v-show="tabIndex === 2" :class="{'am-active': tabIndex === 2}">
            <!--第二个切换-->
            2
          </div>
          <div data-tab-panel-2 class="am-tab-panel " v-show="tabIndex === 3" :class="{'am-active': tabIndex === 3}">
            <!--第三个切换-->
            3
          </div>
        </div>
      </div>

    </div>
</template>

<script>
export default {
  name: 'vendorReconciliation',
  data () {
    return {
      tabIndex: 1,
      msg: '121212'
    }
  },
  methods: {
    tabsSwitch: function (tabIndex) {

    }
  }
}
</script>
<style scoped>

  .am-header { width: 100%; height: 4.9rem; line-height: 4.9rem; background: #33CBCC;}
  .am-header-default .am-header-icon{ font-size: 2rem;}
  .am-text-primary{ color: #33CBCC; font-weight: normal; font-size: 1.2rem;}
  .am-tabs-default .am-tabs-nav > .am-active a{ background:#33CBCC; }

  /*切换按钮样式supplierComparing*/
  .am-tabs-nav .am-active a{ color: #fff!important;}
  .tabWarp .am-tabs-bd{ border: 0;}
  .tabWarp .am-tabs-bd .am-tab-panel{ padding: 0;}
  .tabWarp .am-tabs-nav{ border-radius: 5px; overflow: hidden; background-color: #fff; border: 1px solid #33cbcc; font-size: 1.4rem; }
  .tabWarp .am-tabs-nav li:nth-child(2){ border-right: 1px solid #33cbcc; font-size: 1.4rem; border-left: 1px solid #33cbcc;}
  .tabWarp .am-tabs-nav a{ line-height: 3.2rem; color: #33cbcc;}

  /*付款金额supplierComparing*/
  .payMoney{ color: #999; display: flex; border-top: 1px solid #e6e6e6; padding: 5px 0; font-size: 1.2rem;}
  .payMoney .item{ flex: 1;}
  .payMoney .item p{ margin: 0; line-height: 3rem;}

  /*款项条目supplierComparing*/
  .payDetailItem{ border-top: 5px solid #e6e6e6;}
  .payDetailItem .am-list>li{ border-color: #e6e6e6; padding: 1rem; display: flex; align-items: center;}
  .payDetailItem .am-list>li .text{ flex: 5;}
  .payDetailItem .am-list>li .text p{ margin: 0; line-height: 2.4rem; color: #999; font-size: 1.2rem;}
  .payDetailItem .am-list>li .link{ flex: 1; font-size: 1.6rem; text-align: right; }
  .payDetailItem .am-list>li .link a{ color: #999; }

  .am-tabs-bd .am-tab-panel *{font-size: 1.2rem; line-height: 3rem;}

</style>
