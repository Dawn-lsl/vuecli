<template >
    <div id="son-box1" >
       <h1 style="color: dodgerblue">我是one组件</h1>
       <slot name="dataSlot" :User="user" :AAA="ASD"></slot>
    </div>
    <button >one</button>
    <!-- @click="one1" -->
    <button>two</button>
</template>

<script>
    export default {
        name: "son01",
        emits:['toFather'],
        data(){
            return{
                user:[
                {
                    name:'张三',
                    state:true,
                },
                {
                    name:'李四',
                    state:false,
                },
                {
                    name:'王五',
                    state:false,
                },
                {
                    name:'六六六',
                    state:true,
                },
                ]
            }
        },
        methods:{
            one1(){
                this.$emit('toFather',this.user)
            },
            ASD(data,i){
                this.user[i].state=!data;
                console.log(this.user[i]);
            }
        }
    }
</script>

<style scoped>
#son-box1{
    width: 25%;
    background-color: lightblue;
    padding: 20px;
}
</style>