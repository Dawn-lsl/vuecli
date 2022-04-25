<template>
  <div>
    <h1>我是son01组件</h1>
    <h1>{{hi}}</h1>
    <h1>{{wuhu}}</h1>
  </div>
</template>

<script>
//01.引入组件

export default {
  name: 'son01',
  components: {
  },
  props:['hi','wuhu']
}
</script>

<style scoped>
h1{
	color: orange;
}
</style>
