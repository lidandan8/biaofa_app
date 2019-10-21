<template>
  <div>
    <mt-header title="销售记录">
      <mt-button @click="$router.push('/account?tab=toExamine')" icon="back" slot="left"></mt-button>
    </mt-header>
    <!--引入搜索组件-->
    <search-input class="am-padding-sm" title="搜索公司、手机号" @search="searchData"></search-input>

    <div class="returnGoods">
      <!--      选项卡开始-->
      <div class="tab">
        <div class="tab_tit">
          <ul>
            <li @click="activeTable = 1" :class="{ active: activeTable === 1 }">待收款</li>
            <li @click="activeTable = 2" :class="{ active: activeTable === 2}" >已收款</li>
          </ul>
        </div>
        <!--未收款-->
        <div v-show="activeTable === 1" class="tab_content">
          <ul>
            <li v-for="item in unReceivedData" :key="item.id">
              <div class="text"></div>
              <div @click="$router.push(`/SalesSlip?id=${item.id}`)" class="data">
                <span class="num"><b>{{item.name}}</b><br><b>{{item.category}}</b></span>
                <span class="red">￥{{item.price}}</span>
              </div>
              <div class="data" style="justify-content: space-between;">
                <span>{{item.number}}</span>
                <span>{{item.date}}</span>
              </div>
            </li>
          </ul>
          <mt-button class="am-g am-margin-top-sm" type="default" @click="loadBottom">加载更多</mt-button>
        </div>

        <!--已收款-->
        <div v-show="activeTable === 2" class="tab_content">
          <ul>
            <li v-for="item in receivedData" :key="item.id">
              <div class="text"></div>
              <div class="data">
                <span class="num"><b>{{item.name}}</b><br><b>{{item.category}}</b></span>
                <span >￥{{item.price}}</span>
              </div>
              <div class="data" style="justify-content: space-between;">
                <span>{{item.number}}</span>
                <span>{{item.date}}</span>
              </div>
            </li>
          </ul>
          <mt-button class="am-g am-margin-top-sm" type="default" @click="loadBottom2">加载更多</mt-button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'SalesRecords',
    components: {
      searchInput: () => import('../common/searchInput') // 引入搜索组件
    },
    data() {
      return {
        activeTable: 1,
        // 未收款记录  先写的假数据，，，将来通过ajax从后台获取
        unReceivedData: [],
        allLoaded: false,
        // 已收款数据
        receivedData: [],
        search: '',
        pageData1: {
          pageSize: 10,
          pageNumber: 1
        },
        pageData2: {
          pageSize: 10,
          pageNumber: 1
        }
      }
    },
    created() {

    },
    mounted() {
      // console.log(this.$route.query.tab)
      // if () {}
      this.saleRecords()
      this.getReceivedData()
    },
    methods: {
      searchData: function() {

      },
      saleRecords:function () {
        let vm=this
        let params = {}
        params.type = 1
        params.pageSize = vm.pageData1.pageSize
        params.pageNumber = vm.pageData1.pageNumber
        vm.$ajax.post('/salesRecords', params).then(function (res) {
          res.data.forEach((item) => {
            vm.unReceivedData.push(item)
          })
        },function (e) {
          console.log(e)
        })
      },
      // 点击加载更多
      loadBottom() {
        this.pageData1.pageNumber = this.pageData1.pageNumber + 1
        this.saleRecords()
      },
      // 点击加载更多
      loadBottom2() {
        this.pageData2.pageNumber = this.pageData2.pageNumber + 1
        this.getReceivedData()
      },
      /**
       * 获取已收款数据
       * @author liDanDan 2019-10-20
       */
      getReceivedData:function () {
        let vm=this
        let params = {}
        params.type = 2
        params.pageSize = vm.pageData2.pageSize
        params.pageNumber = vm.pageData2.pageNumber
        vm.$ajax.post('/salesRecords', params).then(function (res) {
          res.data.forEach((item) => {
            vm.receivedData.push(item)
          })
        },function (e) {
          console.log(e)
        })
      }
    }
  }
</script>

<style scoped>
  .returnGoods{ padding: 0 1rem;}
  .returnGoods .tab ul,.returnGoods .tab li{ padding: 0; margin: 0;  }

  .returnGoods .tab_tit{ height: 4rem; line-height: 4rem;}
  .returnGoods .tab_tit li.active{ color: #33CBCC;}
  .returnGoods .tab_tit ul{ display: flex; justify-content: center; align-items: center; }
  .returnGoods .tab_tit li{ flex: 1; text-align: center; font-size: 1.2rem;}
  .returnGoods .tab_content{}
  .returnGoods .tab_content li{ border-bottom: #E6E6E6 solid 1px; padding: 0.5rem 0;}
  .returnGoods .tab_content .data{ display: flex; justify-content:space-between; align-items: center; color: #999999; font-size: 1.2rem; margin-bottom: 0.3rem;}
  .returnGoods .tab_content .data span.num{ color: #333333; font-size: 1.2rem;}
  .returnGoods .tab_content .data span.red{ color: #FF7360; font-size: 1.2rem;}
  .returnGoods .tab_content .data span.green{ color: #999999}
  .returnGoods .tab_content .data span{ }
  .returnGoods .tab_content b{ font-weight: normal;}
</style>
