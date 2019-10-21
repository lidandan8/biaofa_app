<template>
  <div>
    <!--审核切换-->
    <div v-show="tabSelected === 'toExamine'">
      <index-examine></index-examine>
    </div>
    <!--管理切换-->
    <div v-show="tabSelected === 'manager'">
      <mt-header title="管理"></mt-header>
      <!--用户基本信息-->
      <div class="userBaseData am-padding-sm">
        <div class="photo">
          <img src="../../assets/images/account/photo.png">
        </div>
        <div class="accountNumber am-padding-left">
          <h4 class="am-text-default">某某某</h4>
          <p class="wordsize">账号：1244443456</p>
        </div>
        <div class="goDetail">
          <router-link to='/accountMessage'>
            <span class="iconfont iconqianwang"></span>
          </router-link>
        </div>
      </div>

      <!--导航条目-->
      <div class="navWarp am-padding-sm">
        <ul class="am-list am-list-static navIndex">
          <li>
            <div class="text"><span class="icon"><img src="../../assets/images/account/copy.png"></span><span class="am-padding-left-sm">产品管理</span></div>
            <div class="link">
              <router-link to='/product'>
                <span class="iconfont iconqianwang"></span>
              </router-link>
            </div>
          </li>
          <li>
            <div class="text"><span class="icon"><img src="../../assets/images/account/supplier.png"></span><span class="am-padding-left-sm">客户管理</span></div>
            <div class="link">
              <router-link to='/CustomerManagement'>
                <span class="iconfont iconqianwang"></span>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
      <div class="navWarp am-padding-sm">
        <ul class="am-list am-list-static navIndex">
          <li>
            <div class="text"><span class="icon"><img src="../../assets/images/account/customer.png"></span><span class="am-padding-left-sm">我的销售记录</span></div>
            <router-link to='/MyRecord'>
              <span class="iconfont iconqianwang"></span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <mt-tabbar v-model="tabSelected">
      <mt-tab-item id="toExamine">
        <div style="font-size: 20px;" slot="icon" class="iconfont iconxiaoshou"></div>
        销售
      </mt-tab-item>
      <mt-tab-item id="manager">
        <div style="font-size: 20px;" slot="icon" class="iconfont iconnav_user"></div>
        管理
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>
export default {
  name: 'accountIndex',
  components: {
    indexExamine: () => import('./components/indexExamine')
  },
  data () {
    return {
      value: false,
      tabSelected: this.$route.query.tab || 'toExamine',
      userInfo: {
        photo: '../../assets/images/account/photo.png', // 头像
        name: '某44444某某',
        number: '14444423456'
      }
    }
  },
  created () {

  },
  mounted () {
    // console.log(this.$route.query.tab)
    // if () {}
  },
  methods: {
    tabsSwitch: function (tabIndex  ) {

    }
  }
}
</script>

<style scoped>
/*用户基本信息 index*/
.userBaseData{ display: flex; justify-content: center; align-items: center;}
.userBaseData .photo{ width: 7rem;}
.userBaseData .accountNumber{ flex: 1;}
.userBaseData .accountNumber h4{ margin: 0; margin-bottom: 1.2rem;}
.userBaseData .accountNumber p{ margin: 0;}
.userBaseData .goDetail{ width: 3rem; text-align: right;}
.userBaseData .goDetail a{ font-size: 1.8rem; color: #999;}
.userBaseData .wordsize{ font-size:1.2rem;}

/*首页中的导航列表*/
.navWarp{ border-top: 1rem solid #f2f2f2;}
.navWarp .navIndex{ margin: 0; }
.navWarp .am-list>li{ border: 0; border-bottom: 1px solid #f2f2f2;  margin: 0; display: flex; font-size: 1.3rem;}
.navWarp .am-list>li .icon{ width: 2.4rem; height: 2.4rem; display: inline-block;}
.navWarp .am-list>li .icon img{ width: auto; display: inline-block;}
.navWarp .am-list>li:last-child{ border: 0}
.navWarp .am-list>li .text{ flex: 1;}

.navWarp .am-list>li .link{ padding: 0; width: 20px; text-align: right;}
.navWarp .am-list>li .iconfont{ color: #999;}
  .navWarp li{ line-height: 4.6rem; padding: 0; margin: 0; justify-content: center; align-content: center;}
.navWarp li img{ vertical-align: middle; width: 2.4rem; height: 2.4rem; margin-top: -4px;}
.am-text-default{ font-size: 1.4rem; font-weight: normal;}
</style>
