<!--搜索框公用组件-->
<template>
  <div>
    <div class="inputWarp">
      <div class="title">{{title}}<span v-if="required" class="am-text-danger">*</span></div>
      <div class="input">
        <input v-model="value" :readonly="readonly" :placeholder="placeholder">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'value', 'required', 'readonly', 'placeholder'], // 接收传过来的title
  data () {
    return {
    }
  },
  created() {
  },
  mounted () {
  },
  methods: {
    searchSubmit: function () {
      // 将搜索的值传给父组件，触发父组件搜索方法
      // this.$emit('search', this.search)
    }
  }
}
</script>

<style scoped>
  .inputWarp{ display: flex; padding: 0.5rem 0; align-items: center; justify-content: center;  font-size: 1.4rem; }
  .inputWarp .title{ width: 8rem; }
  .inputWarp .input{ flex: 1; border-bottom: 1px solid #33CBCC;}
  .inputWarp .input input{ border: 0; outline: none; width: 100%; font-size: 1.4rem; line-height: 2.6rem;}
</style>
