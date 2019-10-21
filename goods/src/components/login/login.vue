<template>
  <div>
    <div class="login">
      <div class="logo">
        <img src="../../assets/images/account/logo.png">
        <p>上海彪发</p>
      </div>
      <ul v-if="type===1">
        <li>
          <span>帐号</span>
          <div class="text">
            <input required v-model="formData.name" type="text"/>
          </div>
        </li>
        <li>
          <span>密码</span>
          <div class="text">
            <input required v-model="formData.password" type="password"/>
          </div>
        </li>
        <button class="class_buttom" @click="loginName">登录</button>
        <p class="am-text-right">忘记密码？<span @click="type = 2">手机号登录></span></p>
      </ul>
      <ul v-if="type===2">
        <li>
          <span>手机号</span>
          <div class="text">
            <input required maxlength="11" v-model="formData.phone" type="text"/>
          </div>
        </li>
        <li>
          <span>验证码</span>
          <div class="text">
            <input required maxlength="6" v-model="formData.code" type="text"/>
          </div>
          <div v-if="codeStatus===1" class="getCode" @click="getPhoneCode">获取验证码</div>
          <div v-if="codeStatus===2" class="getCode unable">{{timer}} S</div>
        </li>
        <button class="class_buttom" @click="loginPhone">登录</button>
        <p @click="type = 1" class="am-text-right">账号登陆></p>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      type: 1, // 1，账号；2，手机号登陆
      timer: 60,
      codeStatus: 1, // 验证码发送状态 1，未发送 2，已发送，都秒中不可再次点击
      formData: {
        name: '', // 账号
        password: '',
        phone: '', // 手机号
        code: '' // 验证码
      }
    }
  },
  methods: {
    // 获取验证码
    getPhoneCode () {
      let vm = this
      console.log(!(/^1\d{10}$/.test(vm.formData.phone)))
      if (!(/^1\d{10}$/.test(vm.formData.phone))) {
        vm.$toast('手机号码错误')
        return
      }
      vm.$ajax.post('/api/code', {'phone': vm.formData.phone}).then(function (res) {
        vm.$toast('获取成功')
        vm.codeStatus = 2
        vm.setCodeStatus()
      }, function (e) {
        console.log(e)
      })
    },

    setCodeStatus () {
      let vm = this
      let time = 60
      let interval = setInterval(function () {
        time--
        vm.timer = time
        if (time === 0) {
          clearInterval(interval)
          vm.codeStatus = 1
        }
      }, 1000)
    },

    /**
     * 手机号码登陆方法
     */
    loginPhone: function () {
      let vm = this
      let parsma = {}
      parsma.type = vm.type
      parsma.phone = vm.formData.phone
      parsma.code = vm.formData.code
      if (!parsma.phone || !(/^1\d{10}$/.test(vm.formData.phone))) {
        vm.$toast('手机号码错误')
        return
      } else if (!parsma.code) {
        vm.$toast('验证码不能为空')
        return
      }
      vm.loginAjax(parsma)
    },
    /**
     * 用户名登陆方法
     */
    loginName: function () {
      let vm = this
      let parsma = {}
      parsma.type = vm.type
      parsma.name = vm.formData.name
      parsma.password = vm.formData.password
      if (!parsma.name) {
        vm.$toast('账号不能为空')
        return
      } else if (!parsma.password) {
        vm.$toast('密码不能为空')
        return
      }
      vm.loginAjax(parsma)
    },
    // 发送登陆请求
    loginAjax (parsma) {
      let vm = this
      vm.$ajax.post('/api/login', parsma).then(function (res) {
        localStorage.setItem('userInfo', JSON.stringify(res.data))
        vm.$store.commit('setUserInfo', res.data)
        vm.$router.push('/account')
      }, function (e) {
        console.log(e)
      })
    }
  }
}
</script>

<style scoped>
 .login{padding-top: 2.5em; padding: 0 8%;}
 .login .logo{ text-align: center; padding-top: 4em;}
 .login .logo p{ color: #24278E; font-size: 20px; line-height: 34px; font-weight: bold}
 .login li,.class_buttom{  display: flex; align-items: center; justify-content: center;}

 .login ul p{ font-size: 1.2rem;}

 .login ul,.login li,.login p{ margin: 0; padding: 0; }
 .login ul{ padding-top: 1.5em;}
 .login li{ height: 46px; background: #F2F2F2;    border-radius: 20px; color: #999999; font-size: 14px; margin-bottom: 17px; position: relative;}
 .login li .text{ flex: 1;}
 .login li .text input{ border: none; background: none; outline: none;}
 .login li span{ float: left; width: 5.4rem; display: inline-block; margin: 0 19px; font-size: 18px;}
 .class_buttom{ width: 100%; border: none; border-radius: 20px; outline: none; margin: 31px 0 7px; height: 46px; background: #33CBCC; color: #ffffff; font-size: 18px;}
 .login li .getCode{ font-size: 12px; color: #fff; background-color: #33CBCC; position: absolute; top:8px; right: 10px; z-index: 10; padding: 5px 10px; border-radius: 20px;}
 .login li .getCode.unable{ background-color: #ccc; }
</style>
