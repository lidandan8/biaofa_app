<template>
  <div>
    <mt-header class="whiteHeader" title="采购记录">
      <router-link to="/account?tab=manager" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div id="app">
      <div class="tab">
        <ul>
          <li class="item"><div @click="tabId=0" :class="{active:tabId==0}">全部</div></li>
          <li class="item"><div @click="tabId=1" :class="{active:tabId==1}">产品</div></li>
          <li class="item"><div @click="tabId=2" :class="{active:tabId==2}">半成品</div></li>
          <li class="item"><div @click="tabId=3" :class="{active:tabId==3}">原料</div></li>
          <li class="item"><div @click="tabId=4" :class="{active:tabId==4}">包材</div></li>
        </ul>
      </div>
      <div class="box">
        <div v-show="tabId===0">
          <div>
            <ul>
              <li>
                <div style="width:30%;float:left;margin-right: 1rem;"><img src="../../assets/images/account/pic.png" alt=""></div>
                <div>
                  <ul>
                    <li>复颜玻尿酸日化</li>
                    <li>货号:chanpin12323</li>
                    <li>型号规格：200ml*12瓶</li>
                    <li>售价：<span style="color: red">￥666.00</span></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div v-show="tabId===1">222</div>
        <div v-show="tabId===2">333</div>
        <div v-show="tabId===3">444</div>
        <div v-show="tabId===4">555</div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "Choosecommodity",
        data(){
            return{
                tabId:0
            }
        }
    }
</script>

<style scoped>
  #app{
    width: 100%;
    margin: 1rem auto;
    display: flex;
  }
  .box{
    width: 70%;
    height: 100%;
    margin-left: 1rem;
    font-size:1.1rem;
  }
  .item>div{
    text-decoration: none;
    height: 50px;
    border: 1px solid #E6E6E6;
    line-height: 50px;
    text-align: center;
  }
  .active{
    color: #fff;
    background-color: #33CBCC;
  }
  .tab{
    width: 30%;
    height: 100%;
  }
  ul{
    padding:0;
  }
</style>
