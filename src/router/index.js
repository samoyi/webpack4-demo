// 加载各个模块的路由设置，并初始化路由，创建实例

import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

// 每个模块的路由规则都单独定义，放在 routes 目录里
import Home from './routes/Home.js';
import Foo from './routes/Foo.js';
import Bar from './routes/Bar.js';
import User from './routes/User.js';

// 最后一项路由设置保证其他这里不包括的路径都路由至 /home
const routes = [Home, Foo, Bar, User, {path: '*', redirect: '/home'}];

export default new Router({
    routes,
});
