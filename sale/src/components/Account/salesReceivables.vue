<template>
  <div>

    <mt-header title="销售单">
      <mt-button @click="$router.go(-1)" icon="back" slot="left"></mt-button>
    </mt-header>
    <div class="information">
      <ul>
        <li>
          <span>销售单号</span>
          <div class="text">KH121346545613164646</div>
        </li>
        <li>
          <span>日期<i></i></span>
          <div class="text">某慕某某公司名称</div>
        </li>
        <li>
          <span>客户<i>*</i></span>
          <div class="text">某客户</div>
        </li>
        <li>
          <span>商品<i>*</i></span>
          <div class="text">6545613164646</div>
        </li>
      </ul>
      <div class="salesslip">
        <img src="../../assets/images/account/pic.png">
        <div class="content">
          <p>*****产品</p>
          <p class="text"><span>数量：<u>20</u></span><span>仓库：<u>20</u></span></p>
          <p class="text"><span>单价：<i>20</i></span><span>金额：<i>￥400.00</i></span></p>
        </div>
      </div>
      <div class="salesslip noborder" style="border-top: none;" >
        <img src="../../assets/images/account/pic.png">
        <div class="content">
          <p>*****产品</p>
          <p class="text"><span>数量：<u>20</u></span><span>仓库：<u>20</u></span></p>
          <p class="text"><span>单价：<i>20</i></span><span>金额：<i>￥400.00</i></span></p>
        </div>
      </div>

      <ul>
        <li>
          <span>合计金额</span>
          <div class="text">KH121346545613164646</div>
        </li>
        <li>
          <span>优惠率<i></i></span>
          <div class="text">某慕某某公司名称</div>
        </li>
        <li>
          <span>优惠金额<i></i></span>
          <div class="text">某客户</div>
        </li>
        <li>
          <span>其他费用</span>
          <div class="text">6545613164646</div>
        </li>
        <li>
          <span>备注</span>
          <div class="text">备注备注</div>
        </li>
        <li>
          <span>己收金额</span>
          <div class="text">65456</div>
        </li>
        <li>
          <span>未收金额</span>
          <div class="text">654561</div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
    export default {
        name: 'salesReceivables',
        data () {
            return {

            }
        },
        created () {

        },
        mounted () {
            // console.log(this.$route.query.tab)
            // if () {}
        },
        methods: {
            tabsSwitch: function (tabIndex) {

            }
        }
    }
</script>

<style scoped>
  .noborder{ border-top:none;}
  .salesslip{ display: flex; border: 1px solid #E6E6E6; border-left: none; border-right: none; padding-top: 1.1rem; }
  .salesslip img{ width: 9rem; height: 9rem;}
  .salesslip .content{ flex: 1; font-size: 1.2rem; color: #666666; padding-left: 2rem; }
  .salesslip .content p.text{ display: flex; justify-content: space-between; padding-right:2rem;}
  .salesslip .content p.text i{ font-style: normal; }
  .receivables{ padding:0 1rem; height: 3.5rem; align-items: center; display: flex; justify-content: space-between; font-size: 1.4rem;}
  .receivables button{ width: 8rem; height: 3.5rem; outline: none; color: #ffffff; background: #33CBCC; border: none;}


  .information{ padding: 0 1rem;}
  .information ul,.information li{ padding: 0; margin: 0}
  .information ul{ padding-top: 0.7rem;}
  .information li{ display: flex; padding: 0.8rem 0; align-items: center; justify-content: center;  font-size: 1.4rem; }
  .information li span{ color: #333333; padding: 0 1.1rem 0; vertical-align: middle; width: 10rem; }
  .information li i{ color:red;}
  .information li .text{flex: 1; font-size:1.2rem; color: #999999; border-bottom: #33CBCC solid 1px; padding-left: 0.9rem;}



</style>
