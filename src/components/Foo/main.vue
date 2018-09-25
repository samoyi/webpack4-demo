<template>
  <div id="foo">
      <h2>Foo</h2>
      <img src="../../assets/imgs/kibunn.jpg" />
      <div></div>
  </div>
</template>

<script>
export default {
  name: 'Foo'
}

let n = 2;
console.log(n);
</script>

<style scoped lang="scss">
    #foo{
        div{
            width: 200px; height: 200px;
            background-image: url("../../assets/imgs/kibunn.jpg");
        }
    }
</style>
