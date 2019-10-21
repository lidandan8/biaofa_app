<template>
  <div>
    <div class="header">
      <mt-header class="whiteHeader"title=" 帐户信息">
        <router-link to="/account?tab=manager" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header></div>
    <div class="Middle">
      <ul class="Middle_one">
        <li class="Middle_two"><span>采购单号</span><div class="input_one">&nbsp;&nbsp;{{data.Purchase}}</div></li>
        <li class="Middle_two"><span>日期</span><div class="input_one">&nbsp;&nbsp;{{data.date}}</div></li>
        <li class="Middle_two"><span>商品 <span>*</span> <img src="../../images/扫一扫 (1).png" alt=""></span><div class="input_one">&nbsp;&nbsp;{{data.commodity}}</div></li>
        <li class="Middle_two">
          <ul>
            <li v-for="item in data.start":key="item" style="padding:10px 0;clear:both;overflow:hidden;border-bottom: 1px solid #E6E6E6;font-size: 1.2rem">
              <div style="float: left;width: 20%;"><img src="../../images/pic.png" alt=""></div>
              <div style="float: right;width:70%;">
                <ul>
                  <li>{{item.name}}</li>
                  <li style="margin:4% 0;"><div style="float: left; width: 50%;"><span style="width: 40%;display: inline-block;">数量：</span><span  style="width: 40%;display: inline-block;text-align: center;border-bottom:1px solid #33CBCC;">{{item.Number}}</span></div><div><span style="width: 20%;display: inline-block;">仓库：</span><span  style="width: 30%;display: inline-block;text-align: center;border-bottom:1px solid #33CBCC;">{{item.Warehouse}}</span></div></li>
                  <li><div style="float: left;width: 50%;"><span>单价：</span><span  style="width: 40%;display: inline-block;text-align: center;">{{item.Price}}</span></div><div><span  style="width: 20%;">金额：</span><span   style="width: 30%;display: inline-block;text-align: center;">{{item.money}}</span></div></li>
                </ul>
              </div>
            </li>
          </ul>
        </li>      <li class="Middle_two"><span>合计金额</span><div class="input_one">&nbsp;&nbsp;{{data.zong}}</div></li>
        <li class="Middle_two"><span>优惠率</span><div class="input_one">&nbsp;&nbsp;{{data.zong}}</div></li>
        <li class="Middle_two"><span>优惠金额</span><div class="input_one">&nbsp;&nbsp;{{data.zong}}</div></li>
        <li class="Middle_two"><span>其他费用</span><div class="input_one">&nbsp;&nbsp;{{data.zong}}</div></li>
        <li class="Middle_two"><span>备注</span><div class="input_one">&nbsp;&nbsp;{{data.zong}}</div></li>
      </ul>
    </div>
    <div class="bottom">
      <div style="width:100%;position:fixed;bottom:0">
        <div style="width: 50%;height: 100%;float: left;text-align:center;background:rgba(255,255,255,1);border-top:1px solid rgba(230,230,230,1);"><span style="font-size:18px;display: inline-block;padding: 2.5% 0;color:rgba(51,51,51,1);"><span>总金额：</span>{{data.zong}}</span></div>
        <div style="width: 25%;height: 100%;float: right;background:rgba(237,173,0,1);text-align:center;"><span style="font-size:18px;color:rgba(255,255,255,1);display: inline-block;padding: 5% 0;">不通过</span></div>
        <div style="width: 25%;height: 100%;float: right;background:rgba(51,203,204,1);text-align:center;"><span style="font-size:18px;color:rgba(255,255,255,1);display: inline-block;padding: 5% 0;" @click="payment">通过</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  import http from '../../Api/http.js'
  import Api from '../../Api/api.js'

  export default {
    name: 'again1',
    data() {
      return {
        data: {},
        Discount: '',
        Discount_one: '',
        Discount_two: '',
        Discount_zor: ''
      }
    },
    beforeCreate() {
      http(Api.sendDATA)
        .then((res) => {
          console.log(res)
          this.data = res.data.startDate
          console.log(this.data)
        }, (error) => {
          console.log(error)
        })
    },
    methods: {
      payment: function () {
        this.$router.push('/payment')
      }
    }

  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .Middle {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 15%;
  }

  .Middle_two {
    margin-top: 2%;

  }

  .Middle_one {
    font-size: 1.4rem;
  }

  .Middle_two > span {
    font-size: 1.4rem;
    color: rgba(51, 51, 51, 1);
    width: 30%;
  }

  .Middle_two > input {
    margin-top: 10px;
  }

  .input_one {
    width: 70%;
    height: 100%;
    float: right;
    font-size: 1.4rem;
    outline: none;
    BORDER-TOP-STYLE: none;
    BORDER-RIGHT-STYLE: none;
    BORDER-LEFT-STYLE: none;
    border-bottom: 1px solid #33CBCC;
    color: rgba(153, 153, 153, 1);
    display: inline-block;
  }

  .am-header-icon {
    font-size: 40px;
    position: absolute;
    top: 50%;
    margin-top: -10px;

  }
</style>
