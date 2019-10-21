<template>
  <div>

    <mt-header title="收款">
      <mt-button @click="$router.go(-1)" icon="back" slot="left"></mt-button>
    </mt-header>
    <div class="information">
      <ul>
        <li>
          <span>供应商</span>
          <div class="text">**********公司</div>
        </li>
        <li>
          <span>应收金额<i></i></span>
          <div class="text">666.00</div>
        </li>
        <li>
          <span>结算账户<i></i></span>
          <div class="text">
            <select v-model="productType">
            <option value="1">现金</option>
            <option value="2">银行卡</option>
            <option value="3">Opel</option>
            <option value="4">Audi</option>
          </select>
          </div>
        </li>
        <li>
          <span>账目类型<i></i></span>
          <div class="text">6545613164646</div>
        </li>
      </ul>


      <ul>
        <li>
          <span>优惠金额</span>
          <div class="text">100.00</div>
        </li>
        <li>
          <span>其他费用<i></i></span>
          <div class="text">10.00</div>
        </li>
        <li>
          <span>本次收款<i></i></span>
          <div class="text">111</div>
        </li>
        <li>
          <span>备注</span>
          <div class="text">备注备注</div>
        </li>
      </ul>
    </div>
<div class="receivables">
      <button >确认收款</button>
</div>

  </div>
</template>

<script>
    export default {
        name: 'SalesSlip',
        data () {
            return {
              productType: 1 // 头部的选择框

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
  select{  width: 100%; height: 2.4rem; border: 1px solid #fff; border-radius: 0.5rem; outline: none; color: #999999;}
  .noborder{ border-top:none;}
  .salesslip{ display: flex; border: 1px solid #E6E6E6; border-left: none; border-right: none; padding-top: 1.1rem; }
  .salesslip img{ width: 9rem; height: 9rem;}
  .salesslip .content{ flex: 1; font-size: 1.2rem; color: #666666; padding-left: 2rem; }
  .salesslip .content p.text{ display: flex; justify-content: space-between; padding-right:2rem;}
  .salesslip .content p.text i{ font-style: normal; }
  .receivables{ padding:0 1rem; margin-top: 2rem; }
  .receivables button{ border-radius: 5px; font-size: 1.4rem; width: 100%; height: 3.5rem; outline: none; color: #ffffff; background: #33CBCC; border: none;}


  .information{ padding: 0 1rem;}
  .information ul,.information li{ padding: 0; margin: 0}
  .information ul{ padding-top: 0.7rem;}
  .information li{ display: flex; padding: 0.8rem 0; align-items: center; justify-content: center;  font-size: 1.4rem; }
  .information li span{ color: #333333; padding: 0 1.1rem 0; vertical-align: middle; width: 10rem; }
  .information li i{ color:red;}
  .information li .text{flex: 1; font-size:1.2rem; color: #999999; border-bottom: #33CBCC solid 1px; padding-left: 0.9rem;}



</style>
