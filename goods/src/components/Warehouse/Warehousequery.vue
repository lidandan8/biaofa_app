<template>
  <div>
    <header data-v-f8ca7a62="" class="mint-header">
      <div class="mint-header-button is-left">
        <button data-v-f8ca7a62="" class="mint-button mint-button--default mint-button--normal"><span
          class="mint-button-icon"><i class="mintui mintui-back"></i></span> <label class="mint-button-text"></label>
        </button>
      </div>
      <div class="mint-header-title">
        <div class="search">
          <img src="../../assets/images/account/search.png">
          <input type="text" name="" id="" placeholder="搜索公司、手机号" v-model="search"/>
        </div>
      </div>
      <div class="mint-header-button is-right" style="margin-right: 20px;width: 2rem;">
        <img src="../../assets/images/account/3.png" alt="">
      </div>
    </header>
    <div>
      <div style="width:90%;margin: 0 auto;">
        <ul>
          <li class="itemss">产品</li>
          <li class="itemss">半成品</li>
          <li class="itemss">原料</li>
          <li class="itemss">包材</li>
        </ul>
      </div>
      <div id="wrap" class="box">
        <div v-for="(list,index) in navLists" :key="index" class="nav" :class="{ red:changeRed == index}"
             @click="reds(index)">{{list.text}}
        </div>
      </div>
    </div>
    <div>
      <div v-for="(i,index) in data" :key="index" class="items" @click="relad">
        <div class="item"><img src="../../assets/images/account/pic.png" alt=""></div>
        <div class="item_list">
          <ul>
            <li style="font-size: 1.4rem;">{{i.name}}</li>
            <li>货号：<span>{{i.inst}}</span>}</li>
            <li>型号规格：<span>{{i.now}}</span></li>
            <li>售价：<span style="color: red;">{{i.date}}</span></li>
          </ul>
        </div>
        <div>
          <input type="checkbox" :id="i.id" :value="i.id" v-model="checkedNames" v-show="msg1">
        </div>
      </div>
    </div>
    <div class="bottom" v-show="msg1">
      <div style="width:100%;position:fixed;bottom:0">
        <div
          style="width: 50%;height: 100%;float: left;text-align:center;background:rgba(255,255,255,1);border-top:1px solid rgba(230,230,230,1);">
          <span
            style="font-size:18px;display: inline-block;padding: 2.5% 0;color:rgba(51,51,51,1);"><span>选中：</span><span>{{checkedNames.length}}</span></span>
        </div>
        <div style="width: 25%;height: 100%;float: right;background:rgba(237,173,0,1);text-align:center;"><span
          style="font-size:18px;color:rgba(255,255,255,1);display: inline-block;padding: 5% 0;">删除</span></div>
        <div style="width: 25%;height: 100%;float: right;background:rgba(51,203,204,1);text-align:center;"><span
          style="font-size:18px;color:rgba(255,255,255,1);display: inline-block;padding: 5% 0;">全选<input type="checkbox"
                                                                                                         id="checkbox"
                                                                                                         v-model="checked"
                                                                                                         @change="changeAllChecked()"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import http from '../../Api/http.js'
    import Api from '../../Api/api.js'

    export default {
        name: 'Warehousequery',
        data () {
            return {
                checkedNames: [],
                checked: false,
                msg1: false,
                selected: '',
                data: [],
                search:'',
                navLists: [
                    {
                        'text': '默认'
                    },
                    {
                        'text': '名称'
                    },
                    {
                        'text': '货号'
                    },
                    {
                        'text': '价格'
                    }
                ],
                changeRed: 0
            }
        },
        methods: {
            reds: function (index) {
                this.changeRed = index
            },
            msgg: function () {
                this.msg1 = !this.msg1
            },
            changeAllChecked: function () {
                if (this.checked) {
                    var data = this.data
                    for (let key in data) {
                        this.checkedNames.push(data[key].id)
                    }
                } else {
                    this.checkedNames = []
                }
            },
            relad:function(){

            },
            wenhao:function(){

            },
        },
        beforeCreate () {
            http(Api.list)
                .then((res) => {
                    console.log(res)
                    this.data = res.data.startDate
                    console.log(this.data)
                }, (error) => {
                    console.log(error)
                })
        },
    }
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
  }
.itemss{
  float: left;
  width: 25%;
}
  .nav {
    font-size: 1.2rem;
    width: 25%;
    text-align: center;
    display: inline-block;
    cursor: pointer;
    border-bottom: 1px solid #E6E6E6;
    padding-bottom: 1%;
  }

  .red {
    color: #33CBCC;
  }

  .item {
    width: 27%;
    float: left;
  }

  .items {
    display: flex;
    margin: 10px auto;
    width: 90%;
    padding-bottom: 5px;
    border-bottom: 1px solid #E6E6E6;
  }

  .item_list {
    float: right;
    width: 50%;
    font-size: 1.2rem;
    margin-left: 10px;
  }
  .search{ background: #fff; color: #999999; font-size: 1.4rem; border-radius: 20px; margin:0 auto; padding: 3px 0; display: flex; justify-content: center; align-items: center;
    width: 90%;}
  .search input{ border: none; outline: none; background: none; align-items: center; padding:0 0  2px 3px;}
  .search img{ width: 1.6rem; height:1.6rem; margin-right: 3px; }
  input[type='checkbox'] {
    cursor: pointer;
    position: relative;
    width: .1rem;
    height: .1rem;
    font-size: 0.9rem;
    visibility: hidden;
  }

  input[type='checkbox']::after {
    position: absolute;
    top: 1rem;
    background-color: #fff;
    color: #fff;
    width: 1.6rem;
    height: 1.6rem;
    display: inline-block;
    visibility: visible;
    padding-left: 0px;
    text-align: center;
    content: ' ';
    border-radius: 50%;
    border: .1rem solid #E6E6E6;
  }

  input[type='checkbox']:checked::after {
    content: '✓';
    font-size: 0.9rem;
    background-color: #33CBCC;
    font-weight: bold;
  }

</style>
