<template>
  <div>
    <mt-header title="产品信息">
      <mt-button @click="$router.go(-1)" icon="back" slot="left"></mt-button>
      <mt-button slot="right">保存</mt-button>
    </mt-header>

    <div class="information">
      <ul>
        <li>
          <span>类型<i>*</i></span>
          <div class="text">
            <select v-model="productType">
              <option value="1">产品</option>
              <option value="2">产品</option>
              <option value="3">Opel</option>
              <option value="4">Audi</option>
            </select>
          </div>
        </li>
        <li>
          <span>分类<i>*</i></span>
          <div class="text">
            <select v-model="productType">
              <option value="1">请选择分类</option>
              <option value="2">请选择分类</option>
              <option value="3">Opel</option>
              <option value="4">Audi</option>
            </select>
          </div>
        </li>
        <li>
          <span>名称<i>*</i></span>
          <div class="text">请输入名称</div>
        </li>
        <li>
          <span>型号规格</span>
          <div class="text">请输入型号规格</div>
        </li>

      </ul>
    </div>
    <div class="clearance"></div>
    <div class="information">
      <ul>
        <li>
          <span>条码<b class="iconfont iconsaoyisao"></b></span>
          <div class="text">输入或扫描录入条码</div>
        </li>
        <li>
          <span>货号<i>*</i><b class="iconfont iconsaoyisao"></b></span>
          <div class="text">货号唯一，保存后不能修改</div>
        </li>

      </ul>
    </div>
    <div class="clearance"></div>
    <div class="information">
      <ul>
        <li>
          <span>成本价</span>
          <div class="text">￥0.00</div>
        </li>
        <li>
          <span>销售价<i>*</i></span>
          <div class="text">￥0.00</div>
        </li>

      </ul>
    </div>
    <div class="clearance"></div>
    <div class="information">
      <ul>
        <li>
          <span>库存预警值</span>
          <div class="text">请输入库存预警值</div>
        </li>
        <li>
          <span>备注</span>
          <div class="text">请输入备注</div>
        </li>

      </ul>
    </div>
    <div class="clearance"></div>
    <div class="picCon am-margin-bottom">
      <div class="img am-padding-xs">
        <img src="../../assets/images/account/pic.png">
      </div>
      <div class="img am-padding-xs">
        <img src="../../assets/images/account/pic.png">
      </div>
      <div class="img am-padding-xs">
        <img src="../../assets/images/account/album.png">
      </div>
    </div>

    <mt-button class="am-g am-margin" type="danger">删除</mt-button>


  </div>

</template>

<script>
  export default {
    name: 'CustomerInformation',
    data () {
      return {
        msg: '121212',
        productType: 1 // 头部的选择框
      }
    },
    methods: {
      tabsSwitch: function (tabIndex) {

      }
    }

  }
</script>

<style scoped>
  select{  width: 100%; height: 2.4rem; border: 1px solid #fff; border-radius: 0.5rem; outline: none; color: #999999;}
  .information{ padding: 0 1rem;}
  .information ul,.information li{ padding: 0; margin: 0}
  .information ul{ padding-top: 0.7rem;}
  .information li{ display: flex; padding: 1.1rem 0; align-items: center; justify-content: center;  font-size: 1.4rem; }
  .information li span{ color: #333333; padding: 0 1.1rem 0; vertical-align: middle; width: 10rem; }
  .information li i{ color:red;}
  .information b{ font-size: 1.6rem; color: #33CBCC;}
  .information li .text{flex: 1; color: #999999; border-bottom: #33CBCC solid 1px; padding-left: 0.9rem;}
  .clearance{ height: 0.5rem; background: #F2F2F2;}

  .picCon{ display: flex; padding:1rem; justify-content: space-between;}
  .picCon .img{ width: 8rem; height: 8rem;flex: 1;}
  .picCon .img img{ display: inline-block;}

  button{ width: 94%; margin:0 auto 1rem; border: none; border-radius: 0.5rem;  display: flex; font-size: 1.4rem; color:#ffffff; background: #FF7360; height: 4rem; align-items: center; justify-content: center;}



</style>
