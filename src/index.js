// 这里直接全局引入 polyfill，因为不只是自己的模块需要，很多第三方模块里也需要
require("@babel/polyfill");

import Vue from 'vue';
import App from './App'; // vue 根实例的唯一子级组件，是其他所有实际编写组件的容器

// 路由和状态管理实例，并将注入 vue 根实例
import router from './router/index.js';
import store from './vuex/index.js';

// vue 根实例
new Vue({
    el: '#app',
    components: {
        App,
    },
    router,
    store,
    template: `<App/>`,
});
