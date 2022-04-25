<template>
    <div >
        <h1 :style="{background:bgColor,color:colorNum}">{{title}}</h1>
    </div>
</template>

<script>
    export default {
        name: "common",
         // props 条件：
         //title 文字内容       *默认值：'这是默认的内容' *类型String
		 //bgColor背景颜色    *类型String *默认 grey
		 //colorNum文字颜色  *类型String *必填项
         props:{
             title:{
                 type:String,
                 default:'这是默认的内容',
             },
             bgColor:{
                 type:String,
                 default:'grey',
             },
             colorNum:{
                 type:String,
                 required:true,
             }
         }       
    }
</script>

<style scoped>
h1{
    text-align: center;
    line-height: 100px;
}
</style>