import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import '../node_modules/bootswatch/dist/lumen/bootstrap.min.css'
import 'jquery'
import 'popper.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import VNetworkGraph from 'v-network-graph'
import 'v-network-graph/lib/style.css'

createApp(App).use(store).use(router).use(VNetworkGraph).mount('#app')
