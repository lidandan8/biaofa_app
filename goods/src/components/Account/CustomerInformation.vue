<template>
  <div>
    <mt-header title="新增仓库">
      <mt-button @click="$router.go(-1)" icon="back" slot="left"></mt-button>
      <mt-button class="iconfont" slot="right">保存</mt-button>
    </mt-header>

    <div class="information">
      <ul>
        <li>
          <span>仓库名称</span>
          <input type="text" placeholder="CK121346545613164646" style="padding-left: 10px;">
        </li>
        <li>
          <span>负责人</span>
          <input type="text" placeholder="请输入负责人姓名" style="padding-left: 10px;">
        </li>
        <li>
          <span>联系方式</span>
          <input type="text" placeholder="请输入联系方式" style="padding-left: 10px;">
        </li>
        <li>
          <span>地址</span>
          <input type="text" placeholder="请输入仓库地址" style="padding-left: 10px;">
        </li>
        <li>
          <span>库存总量</span>
          <input type="text" placeholder="请输入总库存量" style="padding-left: 10px;">
        </li>
        <li>
          <span>备注</span>
          <input type="text" placeholder="" style="padding-left: 10px;">
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
export default {
  name: 'CustomerInformation',
  data () {
    return {
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
       .information{ padding: 0 1rem;}
       .information ul,.information li{ padding: 0; margin: 0}
       .information ul{ padding-top: 0.7rem;}
       .information li{ display: flex; padding: 1.1rem 0; align-items: center; justify-content: center;  font-size: 1.4rem; }
       .information li span{ color: #333333; padding: 0 1.1rem 0; vertical-align: middle; width: 10rem; }
       .information li i{ color:red;}
       .information li .text{flex: 1; color: #999999; border-bottom: #33CBCC solid 1px; padding-left: 0.9rem;}
       .information li>input{
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
</style>
