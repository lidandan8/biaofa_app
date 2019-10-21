<template>
  <div>
    <mt-header title="我的销售记录">
      <mt-button @click="$router.go(-1)" icon="back" slot="left"></mt-button>
    </mt-header>

    <div class="returnGoods">

      <!--      选项卡开始-->
      <div class="tab">
        <div class="tab_tit">
          <ul>
            <li @click="activeTable = 1" :class="{ active: activeTable === 1}">今天</li>
            <li @click="activeTable = 2" :class="{ active: activeTable === 2}">近七天</li>
            <li @click="activeTable = 3" :class="{ active: activeTable === 3}">本月</li>
          </ul>
        </div>
        <div v-show="activeTable === 1" class="tab_content">
          <ul>
            <li v-for="item in todayList">
              <div class="text"></div>
              <div class="data">
                <span class="num">{{item.name}}</span>
                <span class="green">{{item.state}}</span>
              </div>
              <div class="data">
                <span>{{item.num}}</span>
                <span>{{item.data}}</span>
                <span>{{item.house}}</span>
              </div>
            </li>
          </ul>
        </div>
        <div v-show="activeTable === 2" class="tab_content">
          <ul>
            <li v-for="item in weekList">
              <div class="text"></div>
              <div class="data">
                <span class="num">{{item.name}}</span>
                <span class="">{{item.state}}</span>
              </div>
              <div class="data">
                <span>{{item.num}}</span>
                <span>{{item.data}}</span>
                <span>{{item.house}}</span>
              </div>
            </li>
          </ul>
        </div>
        <div v-show="activeTable === 3" class="tab_content">
          <ul>
            <li v-for="item in januaryList">
              <div class="text"></div>
              <div class="data">
                <span class="num">{{item.name}}</span>
                <span class="green">{{item.state}}</span>
              </div>
              <div class="data">
                <span>{{item.num}}</span>
                <span>{{item.data}}</span>
                <span>{{item.house}}</span>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
<div class="returnGoods_bottom">
     <span>销售总笔数：0</span><span>销售总额：0.00</span>
</div>
  </div>
</template>

<script>
  export default {
    name: 'MyRecord',
    data() {
      return {
        activeTable: 1,
        search: '',
        // 今天销售记录数据
        todayList: [
          {
            id: 1,
            name: '****玻尿酸日化',
            num: 'TH12345645661',
            data: '2019-09-16',
            state: '待入库',
            house: '默认仓库'

          },
          {
            id: 2,
            name: '****玻日化',
            num: 'TH12345645661',
            data: '2019-09-16',
            state: '待入库',
            house: '默认仓库'

          }
        ],
        // 近七天销售数据
        weekList: [
          {
            id: 1,
            name: '****玻尿酸日化',
            num: 'TH12345645661',
            data: '2019-09-16',
            state: '待入库',
            house: '默认仓库'

          },
          {
            id: 2,
            name: '****玻日化',
            num: 'TH12345645661',
            data: '2019-09-16',
            state: '待入库',
            house: '默认仓库'

          },
          {
            id: 3,
            name: '****玻日化',
            num: 'TH12345645661',
            data: '2019-09-16',
            state: '待入库',
            house: '默认仓库'

          }
        ],
        januaryList: [
          {
            id: 1,
            name: '****玻尿酸日化',
            num: 'TH12345645661',
            data: '2019-09-16',
            state: '待入库',
            house: '默认仓库'

          },
          {
            id: 2,
            name: '****玻日化',
            num: 'TH12345645661',
            data: '2019-09-16',
            state: '待入库',
            house: '默认仓库'

          },
          {
            id: 3,
            name: '****玻日化',
            num: 'TH12345645661',
            data: '2019-09-16',
            state: '待入库',
            house: '默认仓库'

          },
          {
            id: 4,
            name: '****玻日化',
            num: 'TH12345645661',
            data: '2019-09-16',
            state: '待入库',
            house: '默认仓库'

          }

        ]
      }
    },
    created() {

    },
    mounted() {
      // console.log(this.$route.query.tab)
      // if () {}
    },
    methods: {
      tabsSwitch: function (tabIndex) {

      }
    }
  }
</script>

<style scoped>

  .returnGoods {
    padding: 0 1rem
  }

  .returnGoods .search {
    background: #F2F2F2;
    color: #999999;
    font-size: 1.3rem;
    border-radius: 5px;
    margin: 1.1rem 0;
    padding: 0.9rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .returnGoods .search input {
    border: none;
    outline: none;
    background: none;
    align-items: center;
    padding: 0 0 2px 3px;
  }

  .returnGoods .search img {
    width: 1.6rem;
    height: 1.6rem;
    margin-right: 3px;
  }

  .returnGoods .tab ul, .returnGoods .tab li {
    padding: 0;
    margin: 0;
  }

  .returnGoods .tab_tit {
    height: 4rem;
    line-height: 4rem;
  }

  .returnGoods .tab_tit ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .returnGoods .tab_tit li.active {
    color: #33CBCC;
  }

  .returnGoods .tab_tit li {
    flex: 1;
    text-align: center;
    font-size: 1.2rem;
  }

  .returnGoods .tab_content {
  }

  .returnGoods .tab_content li {
    border-bottom: #E6E6E6 solid 1px;
    padding: 0.5rem 0;
  }

  .returnGoods .tab_content .data {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #999999;
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
  }

  .returnGoods .tab_content .data span.num {
    color: #333333;
    font-size: 1.2rem;
  }

  .returnGoods .tab_content .data span.red {
    color: #FF7360;
    font-size: 1.2rem;
  }

  .returnGoods .tab_content .data span.green {
    color: #33CBCC;
    font-size: 1.2rem;
  }
 .returnGoods_bottom{ width: 100%; text-indent: 2rem; justify-content: space-between; position: fixed; left: 0; bottom: 0; height: 5rem; background: #33CBCC; display: flex; align-items: center; justify-content: center; color: #ffffff; font-size: 1.3rem;}
  .returnGoods_bottom span{ flex: 1;}
  .returnGoods .tab_content .data span {
  }
</style>
