<template>
  <div id="foo">
      <h2>Foo</h2>
      <public-content :title="title" :content="content"></public-content>
  </div>
</template>

<script>

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
