<template>
  <div>
    <mt-header title="销售退货">
      <mt-button @click="$router.go(-1)" icon="back" slot="left"></mt-button>
    </mt-header>

    <search-input class="am-margin-sm" title="搜索编号、商品" @search="searchData"></search-input>

    <div class="returnGoods">

      <!--      选项卡开始-->
      <div class="tab">
        <div class="tab_tit">
          <ul>
            <li @click="activeTable = 1" :class="{ active: activeTable === 1}">待审核</li>
            <li @click="activeTable = 2" :class="{ active: activeTable === 2}">已退货</li>
            <li @click="activeTable = 3" :class="{ active: activeTable === 3}">未通过</li>
          </ul>
        </div>
        <div v-show="activeTable === 1" class="tab_content">
          <ul>
            <li v-for="item in goods" :key="item.name">
              <div class="text"></div>
              <div class="data">
                <span class="num">{{item.name}}</span>
                <span class="red">{{item.price}}</span>
              </div>
              <div class="data">
                <span>{{item.num}}</span>
                <span>{{item.date}}</span>
                <span>{{item.place}}</span>
              </div>
            </li>
          </ul>
        </div>
        <div v-show="activeTable === 2" class="tab_content">
          <ul>
            <li v-for="item in goods" :key="item.name">
              <div class="text"></div>
              <div class="data">
                <span class="num">{{item.name}}</span>
                <span class="green">{{item.price}}</span>
              </div>
              <div class="data">
                <span>{{item.num}}</span>
                <span>{{item.date}}</span>
                <span>{{item.place}}</span>
              </div>
            </li>
          </ul>
        </div>
        <div v-show="activeTable === 3" class="tab_content">
          <ul>
            <li v-for="item in goods" :key="item.name">
              <div class="text"></div>
              <div class="data">
                <span class="num">{{item.name}}</span>
                <span class="red">{{item.price}}</span>
              </div>
              <div class="data">
                <span>{{item.num}}</span>
                <span>{{item.date}}</span>
                <span>{{item.place}}</span>
              </div>
            </li>

          </ul>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'returnGoods',
    components: {
      searchInput: () => import('../common/searchInput') // 引入搜索组件
    },
    data() {
      return {
        activeTable: 1,
        search: '',
        goods: []
      }
    },
    created() {

    },
    mounted() {

      this.getGoods()
      // console.log(this.$route.query.tab)
      // if () {}

    },
    methods: {
      getGoods:function(){
        let vm = this
        vm.$ajax.post('/goodsreturn', {}).then(function (res) {
         console.log(res)
          vm.goods = res.data
        }, function (e) {
          console.log(e)
        })

      },
      searchData: function (srarch) {
        // srarch 搜索的值
        // 将来在这儿发送请求，，求情列表
        console.log(srarch)
      }
    }
  }
</script>

<style scoped>

  .returnGoods{ padding: 0 1rem}
  .returnGoods .search{ background: #F2F2F2; color: #999999; font-size: 1.3rem; border-radius: 5px; margin: 1.1rem 0; padding: 0.9rem 0; display: flex; justify-content: center; align-items: center;}
  .returnGoods .search input{ border: none; outline: none; background: none; align-items: center; padding:0 0  2px 3px;}
  .returnGoods .search img{ width: 1.6rem; height: 1.6rem; margin-right: 3px; }

  .returnGoods .tab ul,.returnGoods .tab li{ padding: 0; margin: 0;  }

  .returnGoods .tab_tit{ height: 4rem; line-height: 4rem;}
  .returnGoods .tab_tit ul{ display: flex; justify-content: center; align-items: center; }
  .returnGoods .tab_tit li.active{ color:#33CBCC;}
  .returnGoods .tab_tit li{ flex: 1; text-align: center; font-size: 1.2rem;}
  .returnGoods .tab_content{}
  .returnGoods .tab_content li{ border-bottom: #E6E6E6 solid 1px; padding: 0.5rem 0;}
  .returnGoods .tab_content .data{ display: flex; justify-content:space-between; align-items: center; color: #999999; font-size: 1.2rem; margin-bottom: 0.3rem;}
  .returnGoods .tab_content .data span.num{ color: #333333; font-size: 1.2rem;}
  .returnGoods .tab_content .data span.red{ color: #FF7360; font-size: 1.2rem;}
  .returnGoods .tab_content .data span.green{ color:#33CBCC;}
  .returnGoods .tab_content .data span{ }
</style>
