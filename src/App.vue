<template>
    <div id="app">
        <h1>webpack4-demo</h1>
        <header>
            <nav>
                <ul>
                    <li><router-link to="/home">首页</router-link></li>
                    <li><router-link to="/foo">Foo 版块</router-link></li>
                    <li><router-link to="/bar">Bar 版块</router-link></li>
                    <li><router-link :to="'/user/' + username">User 页面</router-link></li>
                </ul>
            </nav>
            <div id="selectUser">
                选择登陆账户 进入 User 页面：
                <br />
                <label>
                    <input type="radio" v-model="username" value="user1">
                    user1
                </label>
                <br />
                <label>
                    <input type="radio" v-model="username" value="user2">
                    user2
                </label>
            </div>
            <div style="clear: both;"></div>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'App',
    data(){
        return {
            username: 'user1',
        };
    },
}
</script>
<style scoped lang="scss">
 #app{
     header{
         &>nav{
             float: left;
         }
         #selectUser{
             float: right;
         }
     }
 }
</style>
