<template>
  <div id="foo">
      <h2>Foo</h2>
      index: {{ index }}
      <br />
      age: {{ age }}
      <br />
      isAdult: {{ isAdult }}
      <input type="button" @click="ageIncrement" value="加一岁" />
      <input type="button" @click="ageDecrement" value="减一岁" />
      <public-content :title="title" :content="content"></public-content>
  </div>
</template>

<script>

import {mapState, mapGetters, mapMutations} from 'vuex';

export default {
    name: 'Foo',
    components: {
        // 异步加载该公共组件
        // 因为作为非入口文件会被独立输出为一个文件，所以通过 webpackChunkName 指定输
        // 出文件名。参考 https://webpack.js.org/guides/code-splitting/#dynamic-imports
        'public-content': ()=>import(/* webpackChunkName: "publicContent" */ '../Public/publicContent.vue'),
    },
    data(){
        return {
            title: 'foo-title',
            content: 'foo-content',
        };
    },
    computed: {
        ...mapState({
            index(state){
                return state.foo.index;
            },
            age(state){
                return state.foo.age;
            },
        }),
        ...mapGetters(['isAdult']),
    },
    methods: {
        // 因为下面两个 mutation 是 Foo 和 Bar 公用的，所以要通过参数告诉 store
        // 应该修改哪个模块的 state
        ageIncrement(){
            this.$store.commit('AGE_INCREMENT', {module: 'foo'});
        },
        ageDecrement(){
            this.$store.commit({
                type: 'AGE_DECREMENT',
                module: 'foo',
            });
        },
    },
}
</script>

<style scoped lang="scss">
    #foo{
        div{
            width: 200px; height: 200px;
            background-image: url("../../assets/imgs/kibunn.jpg");
        }
    }
</style>
