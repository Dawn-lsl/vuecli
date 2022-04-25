<template>
  <div>
    <div id="son-box" v-show="a1" >
       <h1 style="color: orangered">我是two组件</h1>
       <div v-for="(data,i) in ss">
          名字:{{data.name}}---状态{{data.state}}
        </div>
    </div>
    <template v-show="true">
    <son01>
       <!-- @toFather="one" -->
      <!-- <template v-slot:dataSlot="scope">
        <div v-for="(data,i) in scope.User" :key="i">
          名字:{{data.name}}---状态<input type="checkbox" :checked="data.state" @change="scope.AAA(data.state,i)">
        </div>
       </template> -->
    </son01>
    </template>
    <div v-show="a1">
      <button>one</button>
      <button @click="two">two</button>
    </div>
  </div>
</template>

<script>
//01.引入组件
import son01 from './son01.vue'
import son02 from './son02.vue'
export default {
  name: 'father',
  components: {
      son01,son02
  },
  data(){
        return{
            a1:false,
            ss:[],
        }
  },
  methods:{
      one(data){
          this.ss=data;
          this.a1=true;
      },
      two(){
          this.a1=false;
      },
  }
}
</script>

<style scoped>
#son-box{
    width: 25%;
    background-color: lightgoldenrodyellow;
    padding: 20px;
}
</style>