import HellowWorld from './HelloWorld';
import Vue from 'vue';

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(HellowWorld)
});