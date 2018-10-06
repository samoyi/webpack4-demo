<!-- 某个用户的文章组件 -->
<template>
    <article>
        {{article}}
    </article>
</template>

<script>
export default {
    name: 'Article',
    data(){
        return {
            article: '',
        };
    },
    // 路由至该组件时会传递文章 id，根据 id 请求文章，
    // 然后在组件实例创建好之后显示文章内容
    beforeRouteEnter(to, from, next){
        const {username, id} = to.params;
        // 应该在这里请求文章，省略
        next(vm=>{
            vm.article = `显示请求到的 ${username} 的第 ${id} 篇文章`;
        });
    },
    // 切换该用户的不同文章
    beforeRouteUpdate(to, from, next){
        const {username, id} = to.params;
        // 应该在这里请求文章，省略
        this.article = `显示请求到的 ${username} 的第 ${id} 篇文章`;
        next();
    },
};
</script>
