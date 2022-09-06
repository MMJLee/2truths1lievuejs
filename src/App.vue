<template>
  <div id="q-app">
    <nav>
      <router-link :to="{ name: 'AboutView' }"> About </router-link> |
      <!-- <router-link :to="{ name: 'ProjectView' }"> Projects </router-link> | -->
      <router-link :to="{ name: 'TwoTruthsOneLieView' }">
        2 Truths and a Lie
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "LayoutDefault",

  components: {},
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}
nav {
  padding: 30px;
  margin-bottom: 30px;
}
nav a {
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
* {
  margin: 0;
  padding: 0;
}
.github-repo-button {
  margin-top: 50px;
}
</style>