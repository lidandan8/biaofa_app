<template>
  <div>
    <mt-header class="whiteHeader" title="帐户信息">
      <router-link to="/account?tab=manager" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <hr data-am-widget="divider" style=" margin: 0;" class="am-divider am-divider-default"/>

    <div class="Account_content">
      <div class="head_portrait">
        <div class="text">头像</div>
        <div class="photo"><img src="../../assets/images/account/photo.png"></div>
        <div class="link"><span class="iconfont iconqianwang"></span></div>
      </div>
      <ul>
        <li>
          <div class="text">姓名<span>张三</span></div>
          <div class="link"><span class="iconfont iconqianwang"></span></div>
        </li>
        <li>
          <div class="text">帐号<span>15245</span></div>
          <div class="link"><span class="iconfont iconqianwang"></span></div>
        </li>
        <li @click="$router.push('/BindNumber')">
          <div class="text">手机号<span>18621179658</span></div>
          <div class="link"><span class="iconfont iconqianwang"></span></div>
        </li>
        <li>
          <div class="text">修改密码</div>
          <router-link to="/ChangePassword"><span class="iconfont iconqianwang"></span></router-link>
        </li>
      </ul>
    </div>

    <div class="am-padding-sm">
      <mt-button class="am-g" @click="logout" type="default">退出登录</mt-button>
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
    logout: function (tabIndex) {
      let vm = this
      localStorage.setItem('userInfo', '')
      vm.$store.commit('setUserInfo', {})
      vm.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  .whiteHeader{background-color: #fff; color: #666;}  /*更改头部样式*/
.Account_content,.password_content,.photo_number{ padding: 0 1rem;}
.Account_content .head_portrait,.Account_content li{ justify-content: center; align-items: center; display: flex;}
  .Account_content .head_portrait .text{ font-size: 1.4rem;}
.Account_content .head_portrait{ padding: 0.8em 0;}
.Account_content .head_portrait .photo{ width: 7rem; float: right; vertical-align: middle;}
.Account_content .head_portrait .photo img{  height: auto; max-width: 100%; }
 ul,li{ margin: 0; padding: 0;}

.Account_content li{ border-top:#E6E6E6 solid 1px; height: 4rem; font-size: 1.4rem; }
.Account_content .text{ flex: 1; }
.Account_content .text span{ float: right; }

.Account_content .iconfont{ font-size: 14px; color: #999; padding-left: 5px;}
</style>
