<template>
  <div>
    <h1>我是father组件</h1>
    <son01 hi='你好啊' v-bind:wuhu='num' ></son01>
    <son02/>
  </div>
</template>

<script>
//01.引入组件
import son01 from './son01.vue'
import son02 from './son02.vue'
export default {
  name: 'father',
  components: {
      son01,son02
  },
  data(){
        return{
            num:'数据'
        }
    }
}
</script>

<style scoped>
h1{
	color: pink;
}
</style>
