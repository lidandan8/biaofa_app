<template>
  <div>
    <div class="header">
      <mt-header class="whiteHeader" title="帐户信息">
        <router-link to="/account?tab=manager" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="Middle">
      <ul class="Middle_one">
        <li class="Middle_two"><span>供应商</span>
          <div class="input_one">&nbsp;&nbsp;{{data.Price}}</div>
        </li>
        <li class="Middle_two"><span>应付金额</span>
          <div class="input_one">&nbsp;&nbsp;{{data.money}}</div>
        </li>
        <li class="Middle_two"><span>结算账户</span>
          <div class="input_one">&nbsp;{{data.commodity}}
            <select v-model="selected" id="mySelect">
              <option value="">现金</option>
              <option>支付宝</option>
              <option>微信</option>
              <option>银行卡</option>
            </select>
          </div>
        </li>
        <li class="Middle_two"><span>账目类型</span>
          <div class="input_one">&nbsp;&nbsp;{{data.data}}</div>
        </li>
        <li class="Middle_two"><span>本次付款</span><input type="text" class="input_one" v-model="Discount"
                                                       @on-blur="validateJyh(Discount)"></li>
        <li class="Middle_two"><span>优惠金额</span>
          <div class="input_one">&nbsp;&nbsp;{{data.name}}</div>
        </li>
        <li class="Middle_two"><span>其他费用</span>
          <div class="input_one">&nbsp;&nbsp;{{data.name1}}</div>
        </li>
        <li class="Middle_two"><span>备注</span>
          <div class="input_one">&nbsp;&nbsp;{{data.Purchase}}</div>
        </li>
      </ul>
    </div>
    <div class="bottom" style="width:80%;margin: 20% auto;">
      <div style="width:80%;bottom:15%;margin: 0 auto;">
        <div style="width:100%;background:rgba(51,203,204,1);text-align:center;border-radius: 10px"><span
          style="font-size:1.6rem;color:rgba(255,255,255,1);display: inline-block;padding: 5% 0;">通过</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  import http from '../../Api/http.js'
  import Api from '../../Api/api.js'

  export default {
    name: 'payment',
    data() {
      return {
        data: {},
        Discount: '',
        selected: ''
      }
    },
    beforeCreate() {
      http(Api.item)
        .then((res) => {
          console.log(res)
          this.data = res.data.start
          console.log(this.data)
        }, (error) => {
          console.log(error)
        })
    },
    methode: {}

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
  }

  .Middle_two {
    margin-top: 3%;
  }

  .Middle_one {
    font-size: 24px;
  }

  .Middle_two {
    line-height: 3rem;
  }

  .Middle_two > span {
    font-size: 1.4rem;
    color: rgba(51, 51, 51, 1);
    /*line-height:88px;*/
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

  select {
    /*定义外观*/
    border: none;
    white-space: normal;
    vertical-align: top;
    outline-style: none;
    padding-top: 0px;
    width: 90%;
    /*将默认的select选择框样式清除*/
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    /*在选择框的最右侧中间显示小箭头图片*/
    background: url('../../images/2.png') no-repeat scroll right center transparent;
    /*为下拉小箭头留出一点位置，避免被文字覆盖*/
    padding-right: 14px;
  }

  /*清除ie的默认选择框样式清除，隐藏下拉箭头*/
  select::-ms-expand {
    display: none;
  }

  option::-ms-expand {
    display: none;
  }

  option {
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari 和 Chrome */
    appearance: none;
    border: 0;
  }

  .am-header-icon {
    font-size: 40px;
    position: absolute;
    top: 50%;
    margin-top: -10px;

  }
</style>
