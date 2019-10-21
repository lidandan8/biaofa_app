<template>
  <div>
   我是父组件
    {{goodsinfom.name}}
    <test-son title="传值过来的" :title22="title2" :ary="arry" @helloButton="helloBotton"></test-son>

  </div>
</template>

<script>

    import TestSon from "./testSon";
    export default {
        name: "index",
        data() {
            return{
                goodsinfom:{},
                arry: [
                    {
                        name: '电脑1',
                        price: '200'
                    },
                    {
                        name: '电脑2',
                        price: '200'
                    },
                    {
                        name: '电脑3',
                        price: '200'
                    },
                    {
                        name: '电脑4',
                        price: '200'
                    },
                ],
                title2:"传值2"
            }
        },
        methods: {

            helloBotton: function (date) {
                this.goodsinfom = date
            }
        },
        components: {
            TestSon,
            indexExamine: () => import('./testSon')
        },
    }
</script>

<style scoped>

</style>
