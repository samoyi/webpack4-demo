// Foo 模块的状态管理

export default {
    state: {
        index: 2,
        age: 22,
    },
    getters: {
        isAdult(state){
            return state.age >= 18;
        },
    },
};
