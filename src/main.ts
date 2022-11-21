import { createApp } from 'vue'
import pinia from '@/stores'

import App from './App.vue'
import router from './router'

import 'normalize.css/normalize.css'
import '@/styles/index.scss'

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import element from '@/plugins/element'
import initSvgIcon from '@/icon/svg'
import 'virtual:svg-icons-register'

createApp(App)
  // .use(ElementPlus)
  .use(element)
  .use(pinia)
  .use(router)
  .use(initSvgIcon)
  .mount('#app')
