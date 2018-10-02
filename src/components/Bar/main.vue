<template>
  <div id="bar">
      <h2>Bar</h2>
      index: {{ index }}
      <br />
      age: {{ age }}
      <br />
      real age: {{ realAge }}
      <br />
      is80s: {{ is80s }}
      <input type="button" @click="ageIncrement({module: 'bar'})" value="加一岁" />
      <input type="button" @click="ageDecrement({module: 'bar'})" value="减一岁" />
      <public-content :title="title" :content="content"></public-content>
  </div>
</template>

<script>

import {mapState, mapGetters, mapMutations} from 'vuex';

export default {
    name: 'Bar',
    components: {
        // 异步加载该公共组件
        // 因为作为非入口文件会被独立输出为一个文件，所以通过 webpackChunkName 指定输
        // 出文件名。参考 https://webpack.js.org/guides/code-splitting/#dynamic-imports
        'public-content': ()=>import(/* webpackChunkName: "publicContent" */ '../Public/publicContent.vue'),
    },
    data(){
        return {
            title: 'bar-title',
            content: 'bar-content',
        };
    },
    computed: {
        ...mapState({
            index(state){
                return state.bar.index + 2;
            },
            age(state){
                return state.bar.age - 2;
            },
        }),
        ...mapGetters({
            realAge: 'getRealAge',
            is80s: 'is80s',
        }),
    },
    methods: {
        ...mapMutations({
            // 要从 HTML 里传参
            ageIncrement: 'AGE_INCREMENT',
            ageDecrement: 'AGE_DECREMENT',
        }),
    },
}
</script>

<style scoped lang="scss">
    #bar{
        div{
            width: 200px; height: 200px;
            background-image: url("../../assets/imgs/kibunn.jpg");
        }
    }
</style>
