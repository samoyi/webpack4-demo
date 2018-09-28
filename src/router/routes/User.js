import User from '@/components/User/main.vue';
import Article from '@/components/User/article.vue';

export default {
    // user 组件带参数，指定用户名
    path: '/user/:username',
    component: User,
    // user 组件的嵌套路由，通过 article 组件显示当前用户的指定 id 的文章
    children: [
        {
            path: 'article/:id',
            component: Article,
        },
    ],
};
