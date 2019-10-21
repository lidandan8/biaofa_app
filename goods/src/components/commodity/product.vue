<template>
  <div>
    <header class="mint-header" data-v-f8ca7a62="">
      <div class="mint-header-button is-left" @click="$router.go(-1)">
        <button class="mint-button mint-button--default mint-button--normal" data-v-f8ca7a62=""><span
          class="mint-button-icon"><i class="mintui mintui-back"></i></span> <label class="mint-button-text"></label>
        </button>
      </div>
      <div class="mint-header-title">
        <select style="float:left;margin-left: 30px;color: #000;width: 50%;background: #fff;border-radius: 4px;"
                v-model="selected">
          <option selected="请选择" value="">请选择</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>
      <div class="mint-header-button is-right" style="margin-right: 20px;">
        <button @click="msgg"
                class="mint-button iconfont icon-shenglvehao mint-button--default mint-button--normal"
                data-v-f8ca7a62="" style="float:right;">
          <!----> <label class="mint-button-text"></label></button>
        <button @click="wenhao" class="mint-button iconfont icon-fangdajing mint-button--default mint-button--normal"
                data-v-f8ca7a62="" style="float:right;margin:0 20px ;">
          <!----> <label class="mint-button-text"></label></button>
        <button @click="msgag"
                class="mint-button iconfont icon-iconfontadd mint-button--default mint-button--normal"
                data-v-f8ca7a62="" style="float:right;">
          <!----> <label class="mint-button-text"></label></button>
      </div>
    </header>
    <div>
      <div class="box" id="wrap">
        <div :class="{ red:changeRed == index}" :key="index" @click="reds(index)" class="nav"
             v-for="(list,index) in navLists">{{list.text}}
        </div>
      </div>
    </div>
    <div>
      <div :key="index" class="items" v-for="(i,index) in data">
        <div @click.stop="relad">
          <div class="item"><img alt="" src="../../assets/images/account/pic.png"></div>
          <div class="item_list">
            <ul>
              <li style="font-size: 1.4rem;">{{i.name}}</li>
              <li>货号：<span>{{i.inst}}</span>}</li>
              <li>型号规格：<span>{{i.now}}</span></li>
              <li>售价：<span style="color: red;">{{i.date}}</span></li>
            </ul>
          </div>
        </div>
        <div>
          <input :id="i.id" :value="i.id" type="checkbox" v-model="checkedNames" v-show="msg1">
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
        <div style="width: 25%;height: 100%;float: right;background:rgba(51,203,204,1);text-align:center;"  >
          <input type="checkbox" @change="changeAllChecked()" id="checkbox"  v-model="checked" style="z-index: -1">
          <span style="font-size:18px;color:rgba(255,255,255,1);display: inline-block;padding: 5% 0;">全选
        </span>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
    import http from '../../Api/http.js'
    import Api from '../../Api/api.js'

    export default {
        name: 'product',
        data() {
            return {
                checkedNames: [],
                checked: false,
                msg1: false,
                selected: '',
                data: [],
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
            relad: function () {
                this.$router.push('/CustomerInformation');
            },
            msgag: function () {
                this.$router.push('/CustomerInformation1');
            },
            wenhao: function () {
                this.$router.push('/search');
            },
        },
        beforeCreate() {
            http(Api.list)
                .then((res) => {
                    console.log(res)
                    this.data = res.data.startDate
                    console.log(this.data)
                }, (error) => {
                    console.log(error)
                })
        },
        watch: {
            'checkedNames': function () {
                // eslint-disable-next-line eqeqeq,no-irregular-whitespace
                if (this.checkedNames.length == this.data.length) {
                    this.checked = true
                } else {
                    this.checked = false
                }
            }
        }
    }
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
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
    width: 69%;
    font-size: 1.2rem;
    margin-left: 10px;
  }

  input[type='checkbox'] {
    z-index: 99;
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
    left: -5rem;
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
