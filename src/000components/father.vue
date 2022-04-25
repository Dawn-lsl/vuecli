<template>
<!--Vue2.x规定template中只能有一个根节点-->
<!--Vue3.x允许有多个根节点-->
    <div style="border: 1px solid darkblue;padding: 10px">
        <h1 style="color: pink">我是father父组件</h1>
        <son01></son01>
        <son02></son02>
        <global></global>
    </div>
</template>

<script>
    //01.引入组件
    import son01 from "./son01.vue";
    import son02 from "./son02.vue";
    export default {
        name: "father",
        //02.注册组件
        components:{
            son01,son02
        }
    }
</script>

<style scoped>

</style>