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
    actions: {
        // 异步年龄加一，并在完成后通知组件
        async_increment(ctx){
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    ctx.commit('AGE_INCREMENT', {module: 'foo'});
                    resolve();
                }, 1000);
            });
        },
    },
};
