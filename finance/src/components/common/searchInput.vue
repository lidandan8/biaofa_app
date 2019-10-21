<!--搜索框公用组件-->
<template>
  <div>
    <div class="search">
      <div class="" :class="{'icon2': focused, 'icon': !focused}">
        <img src="../../assets/images/account/search.png"/>
      </div>
      <div class="input">
        <input type="text" name="" id="" :placeholder="title" v-model="search" @focus="focused=true" @blur="focused=false" @keyup.enter="searchSubmit"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SalesRecords',
  props: ['title'], // 接收传过来的title
  data () {
    return {
      search: '',
      focused: false // 是否获取焦点
    }
  },
  created() {

  },
  mounted () {
    // console.log(this.$route.query.tab)
    // if () {}
  },
  methods: {
    searchSubmit: function () {
      // 将搜索的值传给父组件，触发父组件搜索方法
      this.$emit('search', this.search)
    }
  }
}
</script>

<style scoped>
.search{ background: #F2F2F2; color: #666; font-size: 1.4rem; border-radius: 5px; padding: 0.6rem 0; display: flex; justify-content: center; align-items: center;}
.search .input{ flex: 2; padding: 0; margin: 0;}
.search .input input{ border: 0; outline: none; background: none; font-size: 1.2rem; margin: 0; display: block; width: 100%;}
.search .icon{ flex: 1; padding-right: 1rem; text-align: right; transition: all 0.5s linear;}
.search .icon2{ width: 3.4rem; padding-right: 1rem; text-align: right; transition: all 0.5s linear;}
.search .icon img,.search .icon2 img{ width: 1.4rem; }
</style>
