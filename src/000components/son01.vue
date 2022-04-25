<template>
<!--Vue2.x规定template中只能有一个根节点-->
<!--Vue3.x允许有多个根节点-->
    <div>
        <h1 style="color: orange;background-color: lightgoldenrodyellow">我是son01组件</h1>
        <global></global>
    </div>
</template>

<script>
    export default {
        name: "son01"
    }
</script>

<style scoped>

</style>