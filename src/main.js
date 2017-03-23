import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
// import routes from './router'
import about from './views/about.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: '/about',
    component: about
  }
]
const router = new VueRouter({
  routes
})
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
