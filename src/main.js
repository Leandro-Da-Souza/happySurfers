import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import store from './store/store';
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    store: store,
    router: router
}).$mount('#app');
