<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>

  <div id="yscroll" class="container-bg">
    <div id="bg-1" class="landing-bg d-flex justify-content-center align-items-center">
      <h1 class="text-white">Bawean</h1>
    </div>
    <div id="bg-2" class="landing-bg d-flex justify-content-center align-items-center">
      <h1 class="text-white">Bawean Island</h1>
    </div>
  </div>

  <div id="header" data-aos="fade-up" class="navbar navbar-light bg-light p-2 justify-content-center gap-5 sticky-top mw-100">
    <v-icon name="gi-island" scale="2" />
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </div>

  <div id="content">
    <RouterView />

    <footer id="footer" data-aos="fade-right">
      <h2 class="text-center py-5">Footer</h2>
    </footer>
  </div>

</template>

<style scoped>
.background {
  background-color: red;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
