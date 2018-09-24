<template>
  <div id="app">
      <h1>webpack4-demo</h1>
      <p>app.vue</p>
      <Foo/>
  </div>
</template>

<script>
import Foo from './components/Foo'

export default {
  name: 'App',
  components: {
    Foo,
  },
}
</script>

<style scoped lang="scss">
#app {
    color: #fb7299;
    p {
        color: #00a1d6;
    }
}

</style>
