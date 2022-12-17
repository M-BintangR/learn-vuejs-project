import About from '../components/About.vue';
import Home from '../components/Home.vue';
import User from '../components/User.vue';
import Users from '../components/Users.vue';
import NotFound from '../components/NotFound.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/users',
        name: 'Users',
        component: Users,
    },
    {
        path: '/user/:name',
        name: 'User',
        component: User,
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;



