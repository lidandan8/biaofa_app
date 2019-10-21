<template>
  <div>
    <mt-header title="客户详情">
      <mt-button @click="$router.go(-1)" icon="back" slot="left"></mt-button>
      <mt-button class="iconfont icon-duihao" slot="right"></mt-button>
    </mt-header>

    <div class="information">
      <ul>
        <li>
          <span>客户编号</span>
          <div class="text">KH121346545613164646</div>
        </li>
        <li>
          <span>公司名称<i>*</i></span>
          <div class="text">某慕某某公司名称</div>
        </li>
        <li>
          <span>联系人<i>*</i></span>
          <div class="text">某客户</div>
        </li>
        <li>
          <span>手机</span>
          <div class="text">6545613164646</div>
        </li>
        <li>
          <span>座机</span>
          <div class="text">6545613164646</div>
        </li>
        <li>
          <span>邮箱</span>
          <div class="text">132131454@163.com</div>
        </li>
        <li>
          <span>送贷地址</span>
          <div class="text">上海市某某区。。。</div>
        </li>
        <li>
          <span>备注</span>
          <div class="text" style="padding-bottom: 7px;">&nbsp;</div>
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'customer',
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

</style>
