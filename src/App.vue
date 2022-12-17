<template>
  <div id="container">
    <nav>
      <RouterLink :to="{ name: 'Home' }">Home</RouterLink>|
      <RouterLink :to="{ name: 'About' }">About</RouterLink>|
      <RouterLink :to="{ name: 'Users' }">Show Users</RouterLink>|
    </nav>
    <RouterView />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

