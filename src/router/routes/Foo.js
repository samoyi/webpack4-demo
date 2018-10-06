export default {
    path: '/foo',
    // 路由懒加载
    // 通过动态加载路由模块，实现模块独立输出为单独的文件，并且在路由至当前路径时才加载
    // 该模块  参考文档 https://router.vuejs.org/zh/guide/advanced/lazy-loading.html
    component: ()=>import(/* webpackChunkName: "Foo" */ '@/components/Foo/main.vue'),
};
