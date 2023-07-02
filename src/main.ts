import { createApp } from 'vue'
import 'normalize.css'
import App from './App.vue'
import router from './router'
import pinia from './store'
import registerApp from './global'
import '@/styles/index.scss'
// import 'element-plus/theme-chalk/src/message.scss'

// 引入暗黑模式 element-plus 2.2 内置暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'
// 自定义暗黑模式
import '@/styles/element-dark.scss'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(registerApp)
app.mount('#app')
