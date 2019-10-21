<template>
  <div class="hello">
    <mt-header title="开关"></mt-header>
    <mt-switch class="am-margin-top" v-model="value">开关</mt-switch>
    <div class="newTitle">
      2. 国外的大部分网站能够调整的原因在于其使用了em或rem作为字体单位; 3. Firefox能够调整px和em,rem,但是96%以上的中国网民使用IE浏览器(或内核)。 EM em是
    </div>
    <mt-button @click="setVuex">设定</mt-button>
    <mt-button @click="showVuex">显示</mt-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value: false
    }
  },
  watch: {
  },
  created () {
  },
  mounted () {
    console.log(this.$store.state)
    this.$ajax.post('/login', {}).then(function (res) {
      console.log(res)
    })
  },
  methods: {
    setVuex () {
      this.$store.commit('setUserName', '123456')
    },
    showVuex () {
      console.log(this.$store.state)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .mint-header{ background-color: #f00;}
  .newTitle{ font-size: 1.4rem;}
</style>
