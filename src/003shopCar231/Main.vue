<template>
    <div class="shopcar_main t">
        <section class="shopcar_maincenter c">
            <ul class="shopcar_titlebox c">
                <li class="l items sc_all">
                    全选
                    <!--00.单个多选框 v-model 布尔值-->
                    <input type="checkbox"
                           v-model="checkStatus"
                           @click="all"/>
                </li>
                <li class="l items sc_pic">全部</li>
                <li class="l items sc_name">商品名称</li>
                <li class="l items sc_price">单价</li>
                <li class="l items sc_num">数量</li>
                <li class="l items sc_totle">小计</li>
                <li class="l items sc_action">操作</li>
            </ul>
            <!--购物车表头_End-->
            <Goods v-model:goodsList="dataList"></Goods>
            <None></None>
            <Amounts></Amounts>
        </section>
    </div>
</template>

<script>
    import Goods from "./Goods";
    import Amounts from "./Amounts";
    import None from "./None";
    export default {
        name: "Main",
        components:{
            Goods,Amounts,None
        },
        data(){
            return{
                checkStatus:false,
                allCheck:[],
                dataList: [{
                    img: 'img/scar/scar01.jpg',
                    gName: '咕叽互联网洗烘一体机 Pro 10kg 白色',
                    gPrice: '2899',
                    gNum: '1',
                },
                    {
                        img: 'img/scar/scar02.jpg',
                        gName: '知吾煮汤锅 咕叽定制',
                        gPrice: '99',
                        gNum: '1',
                    },
                    {
                        img: 'img/scar/scar03.jpg',
                        gName: '咕叽智能IH电饭煲 4L 白',
                        gPrice: '499',
                        gNum: '1',
                    },
                ]
            }
        },
        methods:{
            //全选按钮
            all(){
                if(!this.checkStatus){
                    this.allCheck = this.dataList;
                }else{
                    this.allCheck = [];
                }
            }
        },
        watch:{
            //监听多选框绑定数组
            'allCheck.length':{
                handler(){
                    console.log('变化')
                    if(this.allCheck.length<this.dataList.length){
                        this.checkStatus = false
                    }
                    if(this.allCheck.length==this.dataList.length){
                        this.checkStatus = true
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .shopcar_main{
        padding: 38px 0;
        background: #f5f5f5;
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
    .shopcar_maincenter{
        font-size: 16px;
        color: #424242;
    }
    .shopcar_titlebox{
        width: 100%;
        border-bottom: 1px solid #E0E0E0;
        line-height: 70px;
        background-color: #FFF;
    }
    .shopcar_titlebox{
        height:70px ;
    }

</style>