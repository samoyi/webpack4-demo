// 首页的路由

// Home 为首页框架组件
import Home from '@/components/Home/main.vue';

// 以下两个为首页内容组件，这两个组件将以子路由的方式作为 Home 的子组件
import greeting from '@/components/Home/greeting.vue';
import album from '@/components/Home/album.vue';

export default {
    path: '/', // 根路径路由至首页框架
    component: Home,
    children: [{
        path: '/home', // 进一步的该路径将加载两个首页内容组件
        components: { // 使用命名视图，同时渲染两个组件
            greeting,
            album,
        }
    }],
};
