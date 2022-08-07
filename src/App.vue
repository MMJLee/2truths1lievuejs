<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'About' }">About</router-link> |
      <router-link :to="{ name: 'GameView' }">Game</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { ref } from "vue";

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
  height: 100vh;
}
nav {
  padding: 30px;
}
nav a {
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>