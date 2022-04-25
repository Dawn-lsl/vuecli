<template>
  <div>
    <h1>我是father组件</h1>
    <input type="text" v-model="title">
    <input type="text" v-model="bgColor">
    <input type="text" v-model="colorNum">
    <common :title=title :bgColor=bgColor :colorNum=colorNum></common>
  </div>
</template>

<script>
//01.引入组件
import common from './common.vue'
export default {
  name: 'father',
  components: {
      common
  },
  data(){
        return{
            title:'这是默认的内容',
            bgColor:'grey',
            colorNum:'black'
        }
    }
}
</script>

<style scoped>
div{
	color: pink;
}
</style>