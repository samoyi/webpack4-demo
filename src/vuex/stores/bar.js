// Bar 模块的状态管理

export default {
    state: {
        index: 2,
        age: 33,
    },
    getters: {
        is80s(state, getters){
            if (getters.isAdult){
                let year = (new Date).getFullYear() - state.age
                return (year >= 1980) && (year < 1990);
            }
            else {
                return false;
            }
        },
        getRealAge(state){
            return state.age;
        },
    },
    mutations: {
        // 通过表单直接设置 bar 模块的 age
        setAge(state, payload){
            state.age = payload.age;
        }
    },
};
