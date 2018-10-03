// Vuex 插件

// 显示每次提交的类型和 payload
function showMutationInfo(store){
    store.subscribe(({type, payload}, state)=>{
        delete payload.type; // 如果时对象方式提交 mutation，删掉里面的 type 属性
        console.log(`mutation 类型：${type}\n`
                    + `mutation payload：${JSON.stringify(payload, null, 4)}`)
    });
}

export default [showMutationInfo];
