<template>
  <div class="app">
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <RouterView></RouterView>
  </div>
</template>

<script setup>


</script>

<style>
.app {
  text-align: center;
}

nav {
  font-size: 20px;
}
</style>
