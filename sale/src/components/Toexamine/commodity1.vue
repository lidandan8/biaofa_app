<template>
  <div>
    <mt-header class="whiteHeader" title="帐户信息">
      <router-link to="/account?tab=manager" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="bigbox">    <div class="search">
      <img src="../../assets/images/account/search.png">
      <input type="text" name="" id="" placeholder="搜索公司、手机号" v-model="search"/>
    </div>

      <ul class="tabsbox">
        <li>按时间：</li>
        <li>
          <a @click="cur=0" :class="{active:cur==0}">今日</a>
        </li>
        <li>
          <a @click="cur=1" :class="{active:cur==1}">近七天</a>
        </li>
        <li>
          <a @click="cur=2" :class="{active:cur==2}">近一月</a>
        </li>
        <li>
          <a @click="cur=3" :class="{active:cur==3}">全部</a>
        </li>
      </ul>
    </div>

    <div class="tab-contents">
      <div v-show="cur==0">
        <ul class="lists">
          <li class="list" v-for="item in data" :key="item"><div style="width: 33.3%;float: left;text-align: center;">
            <div  v-for="i in item.name" :key="i">{{i}}</div>
          </div>
            <div style="width: 33.3%;float: left;text-align: center;position: relative;">
              <div style="text-align: center;position: absolute;top: 50%;left: 25%;-webkit-transform: translateY(-50%);-ms-transform: translateY(-50%);-o-transform: translateY(-50%);transform: translateY(-50%);">
                <div>{{item.Price}}</div><div>{{item.data}}</div>
              </div>
            </div><div style="width: 33.3%;float: left;text-align: center;color: red;position: relative;"><div style="text-align: center;position: absolute;top: 50%;left: 25%;-webkit-transform: translateY(-50%);-ms-transform: translateY(-50%);-o-transform: translateY(-50%);transform: translateY(-50%);">{{item.money}}</div></div></li>
        </ul>
      </div>
      <div v-show="cur==1">
        <ul class="lists">
          <li class="list" v-for="item in data" :key="item"><div style="width: 33.3%;float: left;text-align: center;">
            <div  v-for="i in item.name" :key="i">{{i}}</div>
          </div>
            <div style="width: 33.3%;float: left;text-align: center;position: relative;">
              <div style="text-align: center;position: absolute;top: 50%;left: 25%;-webkit-transform: translateY(-50%);-ms-transform: translateY(-50%);-o-transform: translateY(-50%);transform: translateY(-50%);">
                <div>{{item.Price}}</div><div>{{item.data}}</div>
              </div>
            </div><div style="width: 33.3%;float: left;text-align: center;color: red;position: relative;"><div style="text-align: center;position: absolute;top: 50%;left: 25%;-webkit-transform: translateY(-50%);-ms-transform: translateY(-50%);-o-transform: translateY(-50%);transform: translateY(-50%);">{{item.money}}</div></div></li>
        </ul>
      </div>
      <div v-show="cur==2">
        <ul class="lists">
          <li class="list" v-for="item in data" :key="item"><div style="width: 33.3%;float: left;text-align: center;">
            <div  v-for="i in item.name" :key="i">{{i}}</div>
          </div>
            <div style="width: 33.3%;float: left;text-align: center;position: relative;">
              <div style="text-align: center;position: absolute;top: 50%;left: 25%;-webkit-transform: translateY(-50%);-ms-transform: translateY(-50%);-o-transform: translateY(-50%);transform: translateY(-50%);">
                <div>{{item.Price}}</div><div>{{item.data}}</div>
              </div>
            </div><div style="width: 33.3%;float: left;text-align: center;color: red;position: relative;"><div style="text-align: center;position: absolute;top: 50%;left: 25%;-webkit-transform: translateY(-50%);-ms-transform: translateY(-50%);-o-transform: translateY(-50%);transform: translateY(-50%);">{{item.money}}</div></div></li>
        </ul>
      </div>
      <div v-show="cur==3">
        <ul class="lists">
          <li class="list" v-for="item in data" :key="item"><div style="width: 33.3%;float: left;text-align: center;">
            <div  v-for="i in item.name" :key="i">{{i}}</div>
          </div>
            <div style="width: 33.3%;float: left;text-align: center;position: relative;">
              <div style="text-align: center;position: absolute;top: 50%;left: 25%;-webkit-transform: translateY(-50%);-ms-transform: translateY(-50%);-o-transform: translateY(-50%);transform: translateY(-50%);">
                <div>{{item.Price}}</div><div>{{item.data}}</div>
              </div>
            </div><div style="width: 33.3%;float: left;text-align: center;color: red;position: relative;"><div style="text-align: center;position: absolute;top: 50%;left: 25%;-webkit-transform: translateY(-50%);-ms-transform: translateY(-50%);-o-transform: translateY(-50%);transform: translateY(-50%);">{{item.money}}</div></div></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import http from '../../Api/http.js'
import Api from '../../Api/api.js'
export default {
  name: 'commodity1',
  data () {
    return {
      cur: 0,
      data: [],
      search: ''
    }
  },
  beforeCreate () {
    http(Api.lists).then((res) => {
      console.log(res)
      this.data = res.data.start
      console.log(this.data)
    }, (error) => {
      console.log(error)
    })
  }
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .tabsbox {
    overflow: hidden;
    border: 1px solid #fff;
    border-bottom: 1px solid #e5e5e5;
    width: 90%;
    margin: 0 auto;
  }
  .tabsbox li {
    float: left;
    font-size: 1.4rem;
    height: 10%;
    padding: 5% 0;
    background: #fff;
    text-align: center;
  }
  .tabsbox li a {
    font-size: 1.4rem;
    padding: 10px 10px;
    line-height: 1px;
    border-bottom: 1.5px solid transparent;
    color:rgba(153,153,153,1);
  }
  .tabsbox li a.active {
    color:rgba(51,203,204,1);
  }
  .tab-contents{
    width: 100%;
  }
  .list{
    border-bottom: 1px solid #E6E6E6;
    display: flex;
    width: 90%;
    margin: 0 auto;
    padding: 4% 0;
    font-size: 1.2rem;
  }
  .am-header-icon{
    font-size: 2rem;position: absolute;
    top: 50%;
    margin-top: -10px;

  }
  .search{ background: #F2F2F2; color: #999999; font-size: 1.4rem; border-radius: 5px; margin:20px auto 0; padding: 9px 0; display: flex; justify-content: center; align-items: center;
    width: 90%;}
  .search input{ border: none; outline: none; background: none; align-items: center; padding:0 0  2px 3px;}
  .search img{ width: 32px; height: 32px; margin-right: 3px; }
</style>
