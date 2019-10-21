<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      winWidth: document.body.clientWidth
    }
  },
  computed: {
  },
  created () {
  },
  watch: {
    winWidth (newVal, oldVal) {
      this.setFontSize()
    }
  },
  mounted () {
    let vm = this
    vm.setFontSize()
    window.onresize = function () {
      vm.winWidth = document.body.clientWidth
    }
  },
  methods: {
    /**
     * 设定根元素字体大小
     * @author liDanDan 2019-10-12
     */
    setFontSize () {
      let baseSize = 10
      const scale = document.documentElement.clientWidth / 320
      // 设置页面根节点字体大小
      document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
    }
  }
}
</script>

<style lang="sass">
  @import './assets/css/my-mint.scss'
  @import './assets/font/iconfont.css'
  @import "assets/css/amazeui.css"
  @import url(assets/css/app.css)
</style>
