<template>
  <div>
    <!--头部，，，模块化，头部是一个模块-->
    <div class="product_tit am-padding-horizontal-sm">
      <div class="part">
        <span @click="$router.push('/account?tab=manager')" class="iconfont iconhoutui"></span>
        <select v-model="productType">
          <option value="1">请先择</option>
          <option value="2">Saab</option>
          <option value="3">Opel</option>
          <option value="4">Audi</option>
        </select>
      </div>
      <!--靠右对其-->
      <div class="part" style="justify-content : flex-end;">

        <span @click="$router.push('/newProduct')" class="iconfont iconjia"></span>
        <span @click="$router.push('/ProductSearch')" class="iconfont iconsousuo"></span><!--请更改为放大镜图标-->
        <span class="iconfont iconellipsis2"></span><!--请更改为。。。图标-->

      </div>
    </div>

    <div class="product">
      <div class="tit">
        <ul>
          <li class="active">默认</li>
          <li>名称</li>
          <li>货号</li>
          <li>价格</li>
        </ul>
      </div>
      <div class="con" v-for="item in conList">
        <div class="div_con">
          <img :src="item.url">
          <div class="text">
            <h3>{{item.name}}</h3>
            <p>货号:{{item.goodsNum}}</p>
            <p>型号规格：{{item.model}}</p>
            <p>售价：<span>￥{{item.price}}</span></p>
          </div>
          <input type="checkbox" v-model="item.checked">
        </div>
      </div>
    </div>
    <div class="product_bottom">
      <span>己选择：0</span>
      <div class="text">
        <button @click="delete2">删除</button>
        <button class="btn" @click="selectAll">全选</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'product',
    data() {
      return {
        checked: '',
        productType: 1, // 头部的选择框
        activeTable: 1,
        search: '',
        conList: [
          {
            url: '/static/images/pic.png',
            name: '复颜玻尿酸日化',
            goodsNum: 'chanpin12323',
            model: '200ml*12瓶',
            price: '8788',
            checked: false,
            id: '1'
          },
          {
            url: '/static/images/pic.png',
            name: '复颜玻尿酸日化',
            goodsNum: 'chanpin12323',
            model: '200ml*12瓶',
            price: '8788',
            checked: false,
            id: '2'
          },
          {
            url: '/static/images/pic.png',
            name: '复颜玻尿酸日化',
            goodsNum: 'chanpin12323',
            model: '200ml*12瓶',
            price: '8788',
            checked: false,
            id: '3'
          },
          {
            url: '/static/images/pic.png',
            name: '复颜玻尿酸日化',
            goodsNum: 'chanpin12323',
            model: '200ml*12瓶',
            price: '8788',
            checked: false,
            id: '4'
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
      selectAll: function () {
        // console.log(this.conlist)
        this.conList.forEach(item => {
          // console.log(v);

        });item.checked = !item.checked

      },
      delete2: function () {

        this.conList = this.conList.filter(function (item) {
          console.log(item.checked)
          return item.checked === false;

        })
      }

    }
  }
</script>

<style scoped>
  .product_tit {
    height: 4.2rem;
    background: #33CBCC;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .product_tit .part {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .product_tit .part span {
    line-height: 4.2rem;
    width: 2rem;
  }

  .product_tit .part select {
    flex: 1;
    height: 2.4rem;
    border: 1px solid #fff;
    border-radius: 0.5rem;
    outline: none;
    color: #333333;
  }

  .product_tit .part .iconfont {
    font-size: 1.6rem !important;
  }


  .product .con {
    padding: 0 1rem;
  }

  .product .div_con {
    display: flex;
    border-bottom: #E6E6E6 solid 1px;
    padding: 0.7rem 0;
    align-items: center;
  }

  .product .div_con checkbox {
  }

  .product .div_con img {
    width: 9rem;
    height: 9rem;
  }

  .product .div_con .text {
    flex: 1;
    padding-left: 1rem;
  }

  .product .div_con .text h3 {
    font-size: 1.4rem;
    color: #333333;
    font-weight: normal;
  }

  .product .div_con .text p {
    color: #666666;
    font-size: 1.3rem;
    padding: 0;
    margin: 0;
  }

  .product .div_con .text p span {
    color: #FF7360;
  }

  .product .tit ul, .product .tit li {
    padding: 0;
    margin: 0;
  }

  .product .tit ul {
    display: flex;
    padding: 0.6rem 2rem;
    justify-content: space-between;
  }

  .product .tit {
    font-size: 1.3rem;
    color: #333333;
    border-bottom: #E6E6E6 solid 1px;
  }

  .product .tit li.active {
    color: #33CBCC;
  }

  .product_bottom {
    width: 100%;
    padding: 0 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #ffffff;
    height: 5rem;
    border-top: solid 1px #B3B3B3;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .product_bottom .text {
    flex: 1;
  }

  .product_bottom button {
    background: #E6B13E;
    float: right;
    color: #ffffff;
    border: none;
    padding: 0.5rem 1.5rem;
  }

  .product_bottom button.btn {
    margin-right: 5px;
    background: #33CBCC;
  }
</style>
