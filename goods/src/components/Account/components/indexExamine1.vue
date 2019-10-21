<template>
  <div>
    <header data-v-e772a320="" class="mint-header"><div class="mint-header-button is-left"></div> <h1 class="mint-header-title">仓库</h1> <div class="mint-header-button is-right"></div></header>
    <ul class="Central_section am-margin-top" style="margin: 0;padding: 0;">
      <li class="Central_section1" @click="getMethod"><img src="../../../assets/images/account/query.png" alt=""></li>
      <li class="Central_section1" @click="getMethod1"><img src="../../../assets/images/account/Warehouse3.png" alt=""></li>
      <li class="Central_section1" @click="getMethod2"><img src="../../../assets/images/account/Warehouse2.png" alt=""></li>
    </ul>
    <ul class="Central_section am-margin-top" style="margin: 0;padding: 0;">
      <li class="Central_section1" @click="getMethod3"><img src="../../../assets/images/account/stock2.png" alt=""></li>
      <li class="Central_section1" @click="getMethod4"><img src="../../../assets/images/account/stock1.png" alt=""></li>
      <li class="Central_section1"></li>
    </ul>
    <ul class="Central_section am-margin-top" style="margin: 0;padding: 0;">
      <li class="Central_section1" @click="getMethod3"><img src="../../../assets/images/account/Warehouse4.png" alt=""></li>
      <li class="Central_section1" @click="getMethod4"><img src="../../../assets/images/account/Warehouse1.png" alt=""></li>
      <li class="Central_section1"></li>
    </ul>
  </div>
</template>

<script>
  import http from '@/Api/http.js'
  import Api from '@/Api/api.js'

  export default {
    name: 'homepage1',
    data () {
      return {
        swipeIndex: 2,
        msg: []
      }
    },
    beforeCreate () {
      http(Api.getLocation)
        .then((res) => {
          console.log(res)
          this.msg = res.data.startDate
          console.log(this.msg)
        }, (error) => {
          console.log(error)
        })
    },
    methods: {
      getMethod: function () {
        this.$router.push('/commodity')
      },
      getMetho: function () {
        this.$router.push('/commodity1')
      },
      getMethod2: function () {
        this.$router.push('/commodity2')
      }
    }
  }
</script>

<style scoped lang="scss">
  .money{
    display: flex; padding: 1rem 0;
    h5{ flex: 1;}
    .item{
      flex: 1;
      p{ font-size: 1.4rem; margin: 0;}
      h2{ font-size: 1.6rem; font-weight: normal;}
    }
  }
  .am-margin-top {
    margin-top: 0;
  }
  .Central_section{ display: flex; padding: 0 5px;}
  .Central_section .Central_section1{ flex: 1;}
</style>
