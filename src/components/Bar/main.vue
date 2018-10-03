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
      <br />
      输入年龄：<input type="text" v-model="age" />
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
        index(){
            return this.$store.state.bar.index;
        },
        age: {
            get(){
                return this.$store.state.bar.age;
            },
            // 通过给 v-model 绑定的 age 设置 setter，让表单输入可以通过 commit 的
            // 方式修改该数据
            set(v){
                this.$store.commit('setAge', {age: v});
            },
        },
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
