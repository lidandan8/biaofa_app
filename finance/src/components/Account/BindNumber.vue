<template>
  <div>
    <mt-header title="绑定手机号">
      <mt-button @click="$router.go(-1)" icon="back" slot="left"></mt-button>
    </mt-header>

    <hr data-am-widget="divider" style=" margin: 0;" class="am-divider am-divider-default"/>
    <div class="bindnumber am-margin-top-sm">
      <ul>
        <li><input type="text" v-model="phone" placeholder="请输入手机号"></li>
        <p>绑定手机号后，下次登录可使用所绑定手机号登录</p>
      </ul>
    </div>

    <div class="fixButton">
      <mt-button type="default">下一步</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BindNumber',
  data () {
    return {
      phone: ''
    }
  }
}
</script>

<style scoped>
  /*更改头部样式*/
  .am-header-default{ background: #ffffff;}
  .am-header-default .am-header-nav a,.am-header-default .am-header-title a{color: #333333; font-weight: normal; font-family: "微软雅黑";}

  .bindnumber{ padding: 0 10px;}
  .bindnumber ul,.bindnumber li{ padding: 0; margin: 0}
  .bindnumber input{ border:none; height: 40px; line-height: 40px; outline: none; font-size: 1.4rem;}
  .bindnumber li{ display: flex;  align-items: center; justify-content: left; padding-left: 11px; border-bottom: #E6E6E6 solid 1px; color: #CCCCCC; font-size: 14px;}
  .bindnumber p{ color: #999999; font-size: 1.2rem;}

  .fixButton{ position: fixed; bottom: 30px; right: 30px;}
  .fixButton .mint-button{ border-radius: 20px; padding: 0 20px}
</style>
