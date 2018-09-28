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
    beforeRouteEnter(to, from, next){
        const {username, id} = to.params;
        next(vm=>{
            vm.article = `请求${username}的第${id}篇文章，并显示到这里`;
        });
    },
    beforeRouteUpdate(to, from, next){
        const {username, id} = to.params;
        this.article = `请求${username}的第${id}篇文章，并显示到这里`;
        next();
    },
};
</script>
