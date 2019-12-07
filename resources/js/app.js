/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './components/Index.vue'
import Create from './components/Create.vue'

Vue.use(VueRouter)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const routes = [
    { path: '/foe', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/', component: Index},
    { path: '/create', component: Create}
]

const router = new VueRouter({
    routes // short for `routes: routes`
})

const app = new Vue({
    router
}).$mount('#app')

// const app = new Vue({
//     el: '#app',
// });
