import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import App from './App.vue'
import NewView from './views/NewView.vue'
import SingleView from './views/SingleView.vue'
import store from './store'

// Crear rutas
const routes = [
    {
        path: "/",
        component: () => import("./views/HomeView.vue"),
    },
    {
        path: "/about",
        component: () => import("./views/AboutView.vue"),
    },
    {
        path: "/new-merch",
        component: NewView,
        name: "new-merch",
    },
    {
        path: "/hombre",
        component: () => import("./views/HombreView.vue"),
    },
    {
        path: "/mujer",
        component: () => import("./views/MujerView.vue"),
    },
    // {
    //     path: "/rebajas",
    //     component: () => import("./views/RebajasView.vue"),
    // },
    {
        path: "/cart",
        component: () => import("./views/CartView.vue"),
    },
    {
        path: '/product/details/:id/:name/:brand',
        component: SingleView,
        props: true,
        name: "details",
    },
];

// Crear objeto de rutas de vue router
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// Instancia de vue
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
