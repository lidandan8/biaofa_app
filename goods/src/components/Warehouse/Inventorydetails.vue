<template>
<div>
  <div class="header">
    <mt-header title="相关信息">
      <mt-button @click="$router.go(-1)" icon="back" slot="left" style="margin-left: 10px;"></mt-button>
      <mt-button class="iconfont" slot="right" style="margin-right: 10px;">保存</mt-button>
    </mt-header></div>
  <div>
    <div style="width: 100%;border-bottom: 1px solid #E6E6E6" align="center">
      <img src="../../assets/images/account/pic.png" alt="" style="height:10rem;margin: 1rem 0">
    </div>
    <div style="border-bottom: 1px solid #E6E6E6;font-size: 1.3rem">
      <ul style="margin: 1rem auto;">
        <li>复颜玻尿酸日化(chanpin12323)</li>
        <li>待入库数量：<span>20</span> <span>待出库数量：<span>20</span></span></li>
        <li>当前库存量：<span style="color: red">20</span> </li>
      </ul>
    </div>
  </div>
  <div>
    <div style="width: 80%;margin:0 auto;">
      <div style="float: left;width: 50%;">显示零库存</div><div style="float: right;"><mt-switch v-model="value"></mt-switch></div>
    </div>
  </div>
  <div>
    <div style="font-size: 1.3rem">
      <ul style="margin: 5rem auto;">
        <li><div style="width: 50%;display: inline">默认仓库</div><div style="float: right;margin-right: 2rem;">数量：20</div></li>
        <li><div style="width: 50%;display: inline">1号仓库</div><div style="float: right;margin-right: 2rem;">数量：20</div></li>
        <li><div style="width: 50%;display: inline">2号仓库</div><div style="float: right;margin-right: 2rem;">数量：20</div></li>
      </ul>
    </div>
  </div>
  <div class="bottom" style="width:80%;margin: 20% auto;">
    <div style="width:100%;bottom:15%;margin: 0 auto;">
      <div style="width:100%;background:rgba(51,203,204,1);text-align:center;border-radius: 10px"><span
        style="font-size:1.6rem;color:rgba(255,255,255,1);display: inline-block;padding: 2% 0;">盘点</span></div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "Inventorydetails",
        data(){
            return{
                value:false
            }
        }
    }
</script>

<style scoped>

</style>
