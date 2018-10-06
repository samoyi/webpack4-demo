<!-- 首页框架组件 -->
<!-- 通过一级子路由及两个命名视图加载两个内容子组件 -->

<template>
    <div id="Home">
        <h2>Home</h2>
        <!-- 使用命名试图同时加载两个组件 -->
        <router-view name="greeting"></router-view>
        <router-view name="album"></router-view>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>
