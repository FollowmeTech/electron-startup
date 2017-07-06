console.log('begin!');
import Vue from 'vue';
import App from './App.vue';

Vue.config.debug = true;

const app = new Vue({
    render: h => h(App)
}).$mount('#electron');

console.log('start!');