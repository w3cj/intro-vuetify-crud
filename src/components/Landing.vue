<template>
  <div class="hello">
    <v-btn :to="{ name: 'Products' }" color="info">Products</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Landing',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
