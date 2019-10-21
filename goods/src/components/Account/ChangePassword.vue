<template>

  <div>
    <mt-header class="whiteHeader" title="修改密码">
      <mt-button icon="back" slot="left" @click="$router.go(-1)"></mt-button>
    </mt-header>

    <hr data-am-widget="divider" style="margin:0" class="am-divider am-divider-default"/>
    <!--内容部分-->
    <div class="password_content">
      <ul>
        <li>
          <input type="text" value="请输入当前密码" onfocus="if(value=='请输入当前密码') {value=''}"
                 onblur="if (value=='') {value='请输入当前密码'}">
        </li>
        <li>
          <input type="text" value="输入新密码" onfocus="if(value=='输入新密码') {value=''}"
                 onblur="if (value=='') {value='输入新密码'}">
        </li>
        <li>
          <input type="text" value="确认新密码" onfocus="if(value=='确认新密码') {value=''}"
                 onblur="if (value=='') {value='确认新密码'}">
        </li>
      </ul>
      <button type="button">确认提交</button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'oneVendorReconciliation',
  data () {
    return {
      msg: []
    }
  },
  methods: {
    tabsSwitch: function (tabIndex) {

    }
  }
}
</script>

<style scoped>

  .whiteHeader{background-color: #fff; color: #666;}

  .password_content{ padding: 0 10px;}
  .am-header-default{ background: #ffffff;}
  .am-header-default .am-header-nav a,.am-header-default .am-header-title a{color: #333333; font-weight: normal; font-family: "微软雅黑";}

  .password_content ul,.password_content li{padding: 0; margin: 0;}
  .password_content li{ flex-grow: 1; height: 4rem; line-height: 4rem; margin-top:1em; border:#33CBCC solid 1px; border-radius: 5px;}
  .password_content li input{ width: 98%; margin: 0 auto; display: block; border: none; text-indent: 6px; font-size: 1.4rem; height: 3.8rem; line-height: 3.8rem; outline: none;}
  .password_content  button, input:not([type=radio]):not([type=checkbox]), select{ vertical-align: top;}
  .am-divider-default{margin: 0 auto;}
  .password_content button{ width: 100%; height: 4.4rem; font-size: 1.6rem; cursor: pointer; line-height: 4.4rem; color: #ffffff; background: #33CBCC; border: none; margin-top: 1.5em; border-radius: 5px;}

</style>
