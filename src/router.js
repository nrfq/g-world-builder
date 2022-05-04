import { createRouter, createWebHashHistory } from "vue-router"
import Home from "./components/Home";
import Builder from "./components/Builder"
import Character from "./components/Character"

const routes = [
    { path: "/", component: Home},
    { path: "/builder", component: Builder},
    { path: "/character", component: Character}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router