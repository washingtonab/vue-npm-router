import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import Pagina1 from './components/Pagina1.vue'
import Pagina2 from './components/Pagina2.vue'
import Pagina3 from './components/Pagina3.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/pagina1', component: Pagina1 },
  { path: '/pagina2', component: Pagina2 },
  { path: '/pagina3', component: Pagina3 },
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
