import { createApp } from 'vue'
import App from './101kaibai/App.vue'

//引入全局样式
// import './assets/css/base_jd.css'
// import './assets/css/common.css'

//01.引入组件
//import global from './000components/global.vue'
let app = createApp(App);
//02.注册全局组件
//app.component('global',global)
app.mount('#app')

//createApp(App).component('global',global).mount('#app')