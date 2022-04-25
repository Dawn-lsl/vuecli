<template>
    <div id="father-box">
        <h1 style="color: deeppink;margin-bottom: 20px;">我是父组件</h1>
        <section id="ff">
            <son01>
                <h1 class="fh1">父组件自定义内容{{str}}</h1>
                <h1 class="fh2">父组件自定义内容2</h1>
                <input type="text">
                <button>111</button> 
            </son01>
            {{str}}
            <son02></son02>
            <son03></son03>
            <son04>
                <template v-slot:dataList="scope">
                    <div v-for="(data,i) in scope.arrDta">
                        <input type="checkbox" />
                        <b>---文字{{data}}</b>
                    </div>
                </template>
            </son04>
        </section>
    </div>
</template>

<script>
    import son01 from "./son01";
    import son02 from "./son02";
    import son03 from "./son03";
    import son04 from "./son04";
    export default {
        name: "father",
        components:{
            son01,son02,son03,son04
        },
        data(){
            return{
                str:'Hi Slot'
            }
        }
    }
</script>

<style scoped>
.fh1{
    color: red;
}
#father-box{
    margin:50px;
    padding: 20px;
    border:1px solid hotpink;

}
#ff{
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
}
</style>