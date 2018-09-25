<template>
    <div id="app">
        <!-- <router-view/> -->
        <h1>webpack4-demo</h1>
        <p>app.vue</p>
        <Foo/>
    </div>
</template>

<script>
import Foo from './components/Foo/main'

export default {
    name: 'App',
    components: {
      Foo,
    },
}
</script>
