<!-- 具体某个用户的页面 -->
<template>
  <div id="post">
      <h2>{{username}}的页面</h2>
      <nav>
          <ul>
              <li><router-link :to="`/user/${username}/article/1`">{{username}} 的第一篇文章</router-link></li>
              <li><router-link :to="`/user/${username}/article/2`">{{username}} 的第二篇文章</router-link></li>
          </ul>
      </nav>
      <!-- 通过嵌套的子路由来显示当前用户的某篇文章 -->
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'Post',
    data(){
        return {
            username: this.$route.params.username,
        };
    },
    // 进入该组件必须要带用户名参数，否则路由失败
    beforeRouteEnter(to, from, next){
        if (to.params.username){
            next();
        }
        else {
            next(false);
        }
    },
    // 切换用户名，渲染其他用户名的该组件内容
    beforeRouteUpdate(to, from, next){
        this.username = to.params.username;
        next();
    },
};
</script>
