import { createRouter, createWebHashHistory } from "vue-router"
import Home from "./components/Home";
import Builder from "./components/Builder"
import Sheet from "./components/Sheet"

const routes = [
    { path: "/", component: Home},
    { path: "/builder", component: Builder},
    { path: "/character", component: Sheet}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router