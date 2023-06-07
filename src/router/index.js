import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import("../views/HomeView.vue") },
        { path: "/game/:id", component: () => import("../views/GameView.vue") },
        { path: "/register", component: () => import("../views/RegisterView.vue") },
        { path: "/login", component: () => import("../views/LoginView.vue") },
        { 
            path: "/account", 
            component: () => import("../views/AccountView.vue"),
            meta: {
                requiresAuth: true,
            } 
        },
        
    ]
});

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener();
                resolve(user);
            },
            reject
        )
    })
}

router.beforeEach(async (to, from, next) => {
    if(to.matched.some((record) => record.meta.requiresAuth)){
        if(await getCurrentUser()){
            next();
        } else {
            alert("you dont have acces!");
            next("/");
        }
    } else {
        next();
    }
});

export default router;