<template>
  <div>
    <b-navbar class="navbar" toggleable="lg">
        <b-navbar-brand href="#">MITRE Open Source</b-navbar-brand>
        <b-navbar-nav>
          <b-nav-item href="#">Repositories</b-nav-item>
          <b-nav-item href="#">Organizations</b-nav-item>
        </b-navbar-nav>
    </b-navbar>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.navbar {
  background-color: #005B94;
  color: white;
}
</style>
