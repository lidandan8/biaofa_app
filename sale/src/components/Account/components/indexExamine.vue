<template>
  <div>
    <div class="accountCont">
      <div class="money">
        <h5 v-for="item in tabsName" :key="item.name" @click="swipeIndex = item.index" :class="{'selected': swipeIndex===item.index}">{{item.name}}</h5>
      </div>
      <div v-for="item in tabsName" :key="item.name" v-show="item.index === swipeIndex">
        <h3>{{item.balance}}</h3>
        <div class="money">
          <div class="item">
            <p>总收入</p>
            <h2>{{item.income}}</h2>
          </div>
          <div class="item">
            <p>销售</p>
            <h2>{{item.expenditure}}</h2>
          </div>
        </div>
      </div>
    </div>

    <ul class="Central_section am-margin-top">
      <li class="Central_section1" @click="getMethod"><img src="../../../assets/images/account/sales_slip.png" alt=""></li>
      <li class="Central_section1" @click="getMetho"><img src="../../../assets/images/account/record.png" alt=""></li>
      <li class="Central_section1" @click="getMethod2"><img src="../../../assets/images/account/return.png" alt=""></li>
    </ul>

  </div>
</template>

<script>
import http from '@/Api/http.js'
import Api from '@/Api/api.js'

export default {
  name: 'homepage',
  data () {
    return {
      swipeIndex: 2,
      tabsName: [{
        name: '本周销售',
        balance: 667.00,
        income: 1.00,
        expenditure: 200.00,
        index: 1
      }, {
        name: '本日销售',
        balance: 667.00,
        income: 2.00,
        expenditure: 200.00,
        index: 2
      }, {
        name: '本月销售',
        balance: 667.00,
        income: 3.00,
        expenditure: 200.00,
        index: 3
      }],
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
    tabsSwitch: function (tabIndex) {
      let tabCardCollection = document.querySelectorAll('.tab-card')
      let len = tabCardCollection.length
      for (let i = 0; i < len; i++) {
        tabCardCollection[i].style.display = 'none'
      }
      tabCardCollection[tabIndex].style.display = 'block'
    },
    getMethod: function () {
      this.$router.push('/addSales')
    },
    getMetho: function () {
      this.$router.push('/SalesRecords')
    },
    getMethod2: function () {
      this.$router.push('/returnGoods')
    }
  }
}
</script>

<style scoped lang="scss">
  .accountCont {
    background: url("../../../assets/images/account/accountIndexBg.png") no-repeat top center;
    background-size:100% 100%; border: 1px solid #33CBCC;  color: #fff; text-align: center;
    width: 100%;
    margin: 0 auto;
    h5{
      font-size: 1.4rem; font-weight: normal; padding-top: 0.5rem; opacity: .7;
      &.selected{ opacity: 1;}
    }
    h3{ font-size: 2.4rem; font-weight: normal; padding-top: 1rem;}
  }
  .money{
    display: flex; padding: 1rem 0;
    h5{ flex: 1;}
    .item{
      flex: 1;
      p{ font-size: 1.4rem; margin: 0;}
      h2{ font-size: 1.6rem; font-weight: normal;}
    }
  }

  .Central_section{ display: flex; padding: 0 5px;}
  .Central_section .Central_section1{ flex: 1;}
  .Central_section .Central_section1 img{ width: 16rem; height: 10rem;}
</style>
