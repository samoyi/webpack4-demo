<template>
  <div id="post">
      <h2>{{username}}的页面</h2>
      <nav>
          <ul>
              <li><router-link :to="`/user/${username}/article/1`">{{username}} 的第一篇文章</router-link></li>
              <li><router-link :to="`/user/${username}/article/2`">{{username}} 的第二篇文章</router-link></li>
          </ul>
      </nav>
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
    beforeRouteEnter(to, from, next){
        if (to.params.username){
            next();
        }
        else {
            next(false);
        }
    },
    beforeRouteUpdate(to, from, next){
        this.username = to.params.username;
        next();
    },
};
</script>
