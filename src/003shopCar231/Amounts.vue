<template>
    <div class="jiesuan_box">
        <span>继续购物</span>
        <span>|&nbsp;&nbsp;共</span>
        <span class="jiesuan_num"><b>213213</b></span>
        <span>件商品，已选择</span>
        <span class="jiesuan_num"><b>213213</b></span>
        <span>件</span>
        <span class="jiesuan_all">合计：<strong>{{allMoney}}</strong>元</span>
        <button class="jiesuan_ok r"
                :style="all.length==0?{backgroundColor:'grey',cursor:'not-allowed'}:{backgroundColor:'#FF6700',cursor:'default'}">结算</button>
    </div>
</template>

<script>
    export default {
        name: "Amounts",
        data(){
            return{
                all:[]
            }
        },
        computed: {
            //00.计算属性的结果是基于缓存的
            // * 它依赖的值如果不发生改变，会给与缓存
            allMoney(){
                let res =0;
                for(let i=0;i<this.all.length;i++){
                    res+=this.all[i].gPrice*this.all[i].gNum;
                }
                return res;
            }
        },
    }
</script>

<style scoped>

    .jiesuan_box{
        margin-top: 30px;
        height: 50px;
        font-size: 14px;
        line-height: 50px;
        background-color: #FFF;
    }

    .jiesuan_ok{
        width: 200px;
        height: 50px;
        color: white;
        outline: none;
        border: none;
        font-size: 18px;
        background-color: #FF6700;
    }
</style>