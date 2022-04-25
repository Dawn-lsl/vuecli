<template>
    <div>
        <h1>我是儿子son01</h1>
        <button @click="Oc">按钮</button>
        <input type="text" v-model="fasong">
        <button @click="Occ">send</button>
    </div>
</template>

<script>
    export default {
        name: "son01",
        emits:['toFather','toFather2'],
        data(){
        return{
            fasong:''
        }
        },
        methods:{
            Oc(){
                console.log('点击');
                this.$emit('toFather','芜湖，我是你爹!');
            },
            Occ(){
                console.log('点击2');
                this.$emit('toFather2',this.fasong);
            }
        }
    }
</script>

<style scoped>
div{
    background-color: lightgoldenrodyellow;
}
h1{
    color: orange;
}
</style>