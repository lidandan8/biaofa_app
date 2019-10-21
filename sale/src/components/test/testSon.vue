<template>
  <div>
    我是子组件
    {{title}},{{title22}},{{ary}}
    <ul>
      <li v-for="item in ary">
        <p @click="showName(item)">{{item.name}}</p>
        <p>{{item.price}}</p>
      </li>

    </ul>
  </div>
</template>

<script>
    export default {
        name: "testSon",
        props: ['title', 'title22','ary'],
        methods: {
              showName: function (item) {
                      this.$emit("helloButton", item)

              }
        }
    }
</script>

<style scoped>

</style>
