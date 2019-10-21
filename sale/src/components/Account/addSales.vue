<template>
  <div>
    <mt-header title="销售单">
      <mt-button @click="$router.push('/account?tab=toExamine')" icon="back" slot="left"></mt-button>
      <mt-button class="iconfont iconchahao" slot="right"></mt-button>
    </mt-header>

    <!--    <mt-field label="username*" placeholder="Input username" v-model="username"></mt-field>-->

    <div class="information">
      <ul>
        <li>
          <span>销售单号</span>
          <div class="text"><input v-model="formData.saleNumber"/></div>
        </li>
        <li>
          <span>日期<i></i></span>
          <div class="text"><input v-model="formData.date"/></div>
        </li>
        <li>
          <span>客户<i>*</i></span>
          <div class="text"><input v-model="formData.customer"/></div>
        </li>
        <li>
          <span>商品<i>*</i></span>
          <div class="text"><input v-model="formData.good"/></div>
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
          <div class="text"><input v-model="formData.totalPrice"/></div>
        </li>
        <li>
          <span>优惠率<i></i></span>
          <div class="text"><input v-model="formData.discount"/></div>
        </li>
        <li>
          <span>优惠金额<i></i></span>
          <div class="text"><input v-model="formData.discountPrice"/></div>
        </li>
        <li>
          <span>其他费用</span>
          <div class="text"><input v-model="formData.otherPrice"/></div>
        </li>
        <li>
          <span>备注</span>
          <div class="text"><input v-model="formData.desc"/></div>
        </li>
      </ul>
    </div>
    <div class="receivables am-margin-top-lg am-margin-bottom-sm">

      <button>提交</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'addSales',
    data() {
      return {
        formData: {
          saleNumber: 'KH121346545613164646',
          date: '2019-10-11',
          customer: '某客户',
          good: '6545613164646',
          totalPrice: '10000',
          discount: '10%', // 优惠率
          discountPrice: '100', // 优惠率
          otherPrice: '100', // 优惠率
          desc: '备注'
        }
      }
    },
    created() {

    },
    mounted() {
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
  .salesslip img{ width: 8rem; height: 8rem;}
  .salesslip .content{ flex: 1; font-size: 1.2rem; color: #666666; padding-left: 2rem; }
  .salesslip .content p.text{ display: flex; justify-content: space-between; padding-right:2rem;}
  .salesslip .content p.text i{ font-style: normal; }

  .receivables{ padding:0 1rem; height: 3.5rem; align-items: center; display: flex; justify-content: space-between; font-size: 1.4rem;}
  .receivables button{ width: 100%; height: 3.5rem; outline: none; color: #ffffff; background: #33CBCC; border: none;}


  .information{ padding: 0 1rem;}
  .information ul{ padding-top: 0.7rem;}
  .information li{ display: flex; padding: 0.5rem 0; align-items: center; justify-content: center;  font-size: 1.4rem; }
  .information li span{ color: #333333; vertical-align: middle; width: 8rem; }
  .information li i{ color:red;}
  .information li .text{ flex: 1; color: #999999; border-bottom: #33CBCC solid 1px;  height: 2.6rem;}
  .information li .text input{ width: 100%; border: 0; outline: 0; line-height: 2.4rem; font-size: 1.4rem; height: 2.4rem;}
</style>
