import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// store 的两个子模块
import foo from './stores/foo.js';
import bar from './stores/bar.js';

// 当前模块所需的 mutation 类型常量
import {AGE_INCREMENT, AGE_DECREMENT} from './mutations.js';

// 插件
import plugins from './plugins.js';

export default new Vuex.Store({
    strict: process.env.NODE_ENV === 'development', // 只在开发环境下使用严格模式
    plugins,
    modules: {
        foo,
        bar,
    },
    mutations: {
        // 年龄递增递减的 mutation 是 Foo 模块和 Bar 模块共用的，所以直接设定到这里
        // 并且要通过 payload.module 来获知改变哪个模块的 age
        [AGE_INCREMENT](state, payload){
            state[payload.module].age++;
        },
        [AGE_DECREMENT](state, payload){
            state[payload.module].age--;
        },
    },
});
