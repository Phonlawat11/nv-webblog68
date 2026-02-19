import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import BackHeader from './components/Header.vue'
import { CkeditorPlugin } from '@ckeditor/ckeditor5-vue' // [เพิ่ม] Import CKEditor Plugin

const app = createApp(App)
const pinia = createPinia()


pinia.use(piniaPluginPersistedstate) // ใช้ Plugin
app.use(pinia)

app.use(CkeditorPlugin) // [เพิ่ม] เปิดใช้งาน CKEditor ผ่าน app instance [2]

app.use(router)

app.component('back-header', BackHeader)

app.mount('#app')

