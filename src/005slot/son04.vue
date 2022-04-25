<template>
    <div id="son-box">
       <h1 style="color: darkgreen">作用域插槽</h1>
       <slot name="dataList" :arrDta="arr">
           <div v-for="(data,i) in arr" :key="1">{{data}}</div>
       </slot>
    </div>
</template>

<script>
    export default {
        name: "son04",
        data(){
            return{
                arr:[111,222,333]
            }
        }
    }
</script>

<style scoped>
#son-box{
    width: 20%;
    background-color: lightgreen;
    padding: 20px;
}
</style>