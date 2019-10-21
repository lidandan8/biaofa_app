<template>
  <div>
    <div class="header">
      <mt-header title="库存流水">
        <mt-button @click="$router.go(-1)" icon="back" slot="left" style="margin-left: 10px;"></mt-button>
        <mt-button class="iconfont icon-cuowu" slot="right" style="margin-right: 10px;"></mt-button>
      </mt-header></div>
    <div class="Middle">
      <ul class="Middle_one">
        <li class="Middle_two"><span>仓库</span><div class="input_one">&nbsp; <select v-model="selected" id="mySelect" style="width: 90%; border:none;">
          <option value="">现金</option>
          <option>支付宝</option>
          <option>微信</option>
          <option>银行卡</option>
        </select></div></li>
        <li class="Middle_two"><span>商品</span><img src="../../assets/images/account/sao.png" alt="" style="height: 1.4rem;margin-left: 5px;"><div class="input_one">&nbsp; <select v-model="selected" id="mySelect" style="width: 90%; border:none;">
          <option value="">现金</option>
          <option>支付宝</option>
          <option>微信</option>
          <option>银行卡</option>
        </select></div></li>
        <li class="Middle_two"><span>开始时间</span><div class="input_one">&nbsp; <select v-model="selected" id="mySelect" style="width: 90%; border:none;">
          <option value="">现金</option>
          <option>支付宝</option>
          <option>微信</option>
          <option>银行卡</option>
        </select></div></li>
        <li class="Middle_two"><span>结束时间</span><div class="input_one">&nbsp; <select v-model="selected" id="mySelect" style="width: 90%; border:none;">
          <option value="">现金</option>
          <option>支付宝</option>
          <option>微信</option>
          <option>银行卡</option>
        </select></div></li>
      </ul>
      <div style="width:100%;margin: 0 auto;font-size: 1rem;">
        <ul >
          <li style="border-bottom: 1px solid #E6E6E6;display: flex;padding:1rem 0;">
            <div style="display: inline;width: 60%;float: left;">
              <div style="margin:1rem 0;background:#33CD5F;width: 6rem;text-align: center;color: #FFFFFF;">出库单-销售</div>
              <div>单据：CK1238000923131213</div>
            </div>
            <div style="display: inline;width: 40%;float: right">
              <div><span style="float: right;padding: 1rem 0">数量：20</span></div>
              <div><span style="float: right">2019-09-12  16:30</span></div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="bottom" style="width:80%;margin: 20% auto;">
      <div style="width:100%;bottom:15%;margin: 0 auto;">
        <div style="width:100%;background:rgba(51,203,204,1);text-align:center;border-radius: 10px"><span
          style="font-size:1.6rem;color:rgba(255,255,255,1);display: inline-block;padding: 2% 0;">查询流水</span></div>
      </div>
    </div>
  </div>
</template>

<script>
    import http from '../../Api/http.js'
    import Api from '../../Api/api.js'

    export default {
        name: 'Inventoryflow',
        data() {
            return {
                selected:"",
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

    padding-bottom: 15%;
  }

  .Middle_two {
    margin-top: 2%;

  }

  .Middle_one {
    font-size: 1.4rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #E6E6E6;
  }

  .Middle_two > span {
    font-size: 1.4rem;
    color: rgba(51, 51, 51, 1);
    width: 30%;
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
  .input_one{
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
    /*将默认的select选择框样式清除*/
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    /*在选择框的最右侧中间显示小箭头图片*/
    background: url('../../assets/images/account/jiao.png') no-repeat scroll right center transparent;
    /*为下拉小箭头留出一点位置，避免被文字覆盖*/
    padding-right: 14px;
    background-size:0.8rem;
    border-bottom: 1px solid rgb(51, 203, 204);
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

  .Middle_two>input{
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
  input{
    BORDER-TOP-STYLE: none;
    BORDER-RIGHT-STYLE: none;
    BORDER-LEFT-STYLE: none;
    outline: none;
    border-bottom:none;
  }
</style>
