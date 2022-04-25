<template>
    <div id="son-box">
        <slot></slot>
       <h1 style="color: orangered">基础插槽</h1>
       
    </div>
</template>

<script>
    export default {
        name: "son01"
    }
</script>

<style scoped>
#son-box{
    width: 25%;
    background-color: lightgoldenrodyellow;
    padding: 20px;
}
</style>