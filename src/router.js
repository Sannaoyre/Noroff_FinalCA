import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LoginComponent from "./views/login.vue"
import SecureComponent from "./views/secure.vue"
import ContactComponent from "./views/contact.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginComponent
    },
    {
      path: '/about',
      name: 'about',
      component: () => import( './views/About.vue')
    },
    {
            path: '/',
            redirect: {
                name: "login"
            }
        },
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/secure",
            name: "secure",
            component: SecureComponent
        },
        {
            path: "/contact",
            name: "contact",
            component: ContactComponent
        }

  ]
})
