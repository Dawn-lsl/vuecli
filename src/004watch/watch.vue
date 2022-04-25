<template>
   <div>
      <h1>Watch</h1>
      <input type="text" v-model="num">{{num}}<hr/>
      <input type="text" v-model="num02">{{num02}}<hr/>
      姓名：<input type="text" v-model="obj.name">{{obj.name}}<hr/>
      年龄：<input type="text" v-model="obj.age">{{obj.age}}<hr/>
      姓名：<input type="text" v-model="obj02.name">{{obj02.name}}<hr/>
      年龄：<input type="text" v-model="obj02.age">{{obj02.age}}
   </div>
</template>

<script>
    export default {
        name: 'watch',
        components: {
        },
        data(){
            return{
                num:9,
                num02:1,
                obj:{
                    name:'赵四',
                    age:45
                },
                obj02:{
                    name:'赵四22',
                    age:40
                },
            }
        },
        watch:{
            num(newVal,oldVal){
                console.log('新的值',newVal,'旧的值',oldVal);
            },
            //immediate true立刻调用 false默认
            'num02':{
                immediate:true,
                handler(newVal,oldVal){
                    console.log('新的值',newVal,'旧的值',oldVal);
                }
            },
            //deep深度侦听 true深度 false默认
            'obj':{
                deep:true,
                handler(newVal,oldVal){
                    console.log("obj改变了",'新的值',newVal,'旧的值',oldVal);
                }
            },
            'obj02.age':{
                handler(newVal,oldVal){
                    console.log("obj02.age改变了",'新的值',newVal,'旧的值',oldVal);
                }
            }
        }
    }
</script>

<style>

</style>
