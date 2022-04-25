<template>
    <div id="father-box">
        <h1>我是父组件father</h1>
        <p>{{str}}</p>
        <p>{{str2}}</p>
        <son01 @toFather="fromSon01" @toFather2="fromSon012"></son01>
        <son02></son02>
    </div>
</template>

<script>
    import son01 from "./son01.vue";
    import son02 from "./son02.vue";
    export default {
        name: "father",
        data(){
        return{
            str:'',str2:''
        }
        },
        components:{
            son01,son02
        },
        methods:{
            fromSon01(data){
                console.log(data);
                this.str=data;
            },
            fromSon012(data){
                console.log(data);
                this.str2=data;
            }
        }

    }
</script>

<style scoped>
#father-box{
    border: 1px solid grey;
    padding: 20px;
}
h1{
    color: black;
}
</style>