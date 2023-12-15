import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/index.vue";
import PrimerPage from "@/pages/primer.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '',
            name: 'Home',
            component: Home
        },
        {
            path: '/primer',
            name: 'primer',
            component: PrimerPage
        },
    ],
})

export default router;