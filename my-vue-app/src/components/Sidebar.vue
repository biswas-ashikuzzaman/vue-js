<template>
  <aside class="sidebar">
    <ul class="menu">
      <li>
        <router-link to="/" exact>Dashboard</router-link>
      </li>
      <li>
        <router-link to="/users">Users</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>

<style scoped>
.sidebar {
  width: 220px;
  height: 100vh;
  background-color: #222;
  color: #ffd600;
  padding-top: 20px;
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu li {
  padding: 12px 20px;
}

.menu li a {
  color: #ffd600;
  text-decoration: none;
}

.router-link-active {
  font-weight: bold;
  background: rgba(255,214,0,0.1);
}
</style>
