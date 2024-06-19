import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import n1 from './test/npm-imba-package'
console.log('%c [ n1 ]-6', 'font-size:14px; background:#41b883; color:#ffffff;', n1)

createApp(App).mount('#app')
