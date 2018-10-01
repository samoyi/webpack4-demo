<!-- 一个公共组件，用于 Foo 模块和 Bar 模块的内容 -->

<template>
    <section>
        <h3>{{title}}</h3>
        <article>{{content}}</article>
    </section>
</template>
<script>
export default {
    props: {
        title: {
            validator(value){
                return typeof value === 'string' && value.length < 12;
            },
        },
        content: {
            type: String,
            required: true,
        },
    },
}
</script>
