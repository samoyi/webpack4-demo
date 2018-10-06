import User from '@/components/User/main.vue';
import Article from '@/components/User/article.vue';

export default {
    path: '/user/:username', // user 路由带参数，指定用户名
    component: User,
    // user 组件的嵌套路由，通过 article 组件显示当前用户的指定 id 的文章
    children: [
        {
            path: 'article/:id',
            component: Article,
        },
    ],
};
