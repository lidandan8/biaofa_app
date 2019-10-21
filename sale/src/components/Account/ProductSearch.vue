<template>
  <div>

    <mt-header title="产品查询">
      <mt-button @click="$router.go(-1)" icon="back" slot="left"></mt-button>
      <mt-button class="iconfont iconchahao" slot="right" @click.native="goAddPage"></mt-button>
    </mt-header>
    <div class="information">
      <ul>
        <li>
          <span>商品<i style="font-size: 1.6rem; font-weight: 600; vertical-align: top; display: inline-block; color: #33CBCC;" class="iconfont iconsaoyisao"></i></span>
          <div class="text">请输入名称/货号/条码查询</div>
        </li>
        <li>
          <span>型号规格<i></i></span>
          <div class="text">请输入型号规格查询</div>
        </li>
        <li>
          <span>备注</span>
          <div class="text">请输入备注查询</div>
        </li>
        <li>
          <span>价格<i></i></span>
          <div class="text">最小价格</div>至<div class="text">最大价格</div>
        </li>
      </ul>
    </div>
    <div class="receivables">
      <button >查询</button>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'ProductSearch',
    data () {
      return {

      }
    },
    created () {

    },
    mounted () {
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
  .noborder{ border-top:none;}
  .salesslip{ display: flex; border: 1px solid #E6E6E6; border-left: none; border-right: none; padding-top: 1.1rem; }
  .salesslip img{ width: 9rem; height: 9rem;}
  .salesslip .content{ flex: 1; font-size: 1.2rem; color: #666666; padding-left: 2rem; }
  .salesslip .content p.text{ display: flex; justify-content: space-between; padding-right:2rem;}
  .salesslip .content p.text i{ font-style: normal; }
  .receivables{ padding:0 1rem; margin-top: 2rem; }
  .receivables button{ border-radius: 5px; font-size: 1.4rem; width: 100%; height: 3.5rem; outline: none; color: #ffffff; background: #33CBCC; border: none;}


  .information{ padding: 0 1rem;}
  .information ul,.information li{ padding: 0; margin: 0}
  .information ul{ padding-top: 0.7rem;}
  .information li{ display: flex; padding: 0.8rem 0; height: 4.6rem; align-items: center; justify-content: center;  font-size: 1.4rem; }
  .information li span{ color: #333333; padding: 0 1.1rem 0; vertical-align: middle; width: 10rem; }
  .information li i{ color:red;}
  .information li .text{flex: 1; font-size:1.2rem; color: #999999; border-bottom: #33CBCC solid 1px; padding-left: 0.9rem;}



</style>
