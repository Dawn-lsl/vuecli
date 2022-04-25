<template>
    <div>
        {{goodsList}}
        <ul class="shopcar_itembox c"
            v-for="(data,index) in goodsList" :key="index">
            <li class="l items sc_all">
                <input type="checkbox" v-model="buy" :value="data"/>
            </li>
            <li class="l items sc_pic">
                <img v-bind:src="data.img" />
            </li>
            <li class="l items sc_name">{{data.gName}}</li>
            <li class="l items sc_price">{{data.gPrice}}</li>
            <li class="l items sc_num">
                <section class="numBox">
                    <span class="sub l" @click="data.gNum==1?data.gNum = 1:data.gNum--"
                          v-bind:style="data.gNum==1?{cursor:'not-allowed'}:{cursor:'default'}"
                          :title="data.gNum==1?'商品数量不得小于1':''">-</span>
                    <input type="text" class="l"
                           v-model="data.gNum"
                           @blur="checkNum(data.gNum,index)"/>
                    <span class="add r" @click="data.gNum++">+</span>
                </section>
            </li>
            <li class="l items sc_totle">{{data.gNum*data.gPrice}}</li>
            <li class="l items sc_action"
                @click="remove(index)">X</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Goods",
        props:{
            goodsList:{
                required:true,
                type:Array
            }
        },
        emits:['update:goodsList'],
        data(){
            return{
                buy:[],
                
                allGoods:[]
            }
        },
        methods:{
            checkNum(num,i){
                console.log(num)
                if(num<=1){
                    alert('商品数量吧不得小于1')
                    this.dataList[i].gNum = 1;
                }
            },
            remove(i){
                this.dataList.splice(i,1)
            }
        }
    }
</script>

<style scoped>
    .shopcar_itembox{
        width: 100%;
        border-bottom: 1px solid #E0E0E0;
        line-height: 70px;
        background-color: #FFF;
    }
    .shopcar_itembox{
        padding: 15px 0;
    }
    .items{
        /*border-right: 1px dashed deeppink;*/
    }
    .sc_all{
        width: 110px;
        text-align: center;
        color: #FF6700;
    }
    .sc_pic{
        width: 120px;
    }
    .sc_name{
        width: 380px;
    }
    .sc_price{
        width: 140px;
        text-align: center;
    }
    .shopcar_itembox .sc_totle{
        color: #FF6700;
    }
    .sc_num{
        width: 150px;
        text-align: center;
    }
    .sc_totle{
        width: 200px;
        text-align: center;
    }
    .sc_action{
        width: 80px;
        text-align: center;
    }
    .shopcar_itembox .sc_pic img{
        width: 80px;
        height: 80px;
    }
    .numBox{
        width:148px ;
        height:38px ;
        font-size:20px ;
        color:#757575 ;
        border: 1px solid #e0e0e0;
        /*background: pink;*/
        margin-top: 12px;
    }
    .shopcar_itembox .sc_num .numBox input{
        width:72px ;
        height:36px ;
        border: none;
        background-color: white;
        outline: none;
        text-align: center;
    }
    .shopcar_itembox .sc_num .numBox span{
        width:20px ;
        height:20px ;
        /*border: none;*/
        background-color: white;
        /*outline: none;*/
        margin: 9px 8px;
        line-height: 20px;
    }

    .jiesuan_box span:nth-child(1){
        padding: 0 30px;
    }

</style>