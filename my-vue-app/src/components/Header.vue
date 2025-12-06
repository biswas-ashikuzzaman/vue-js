<template>
  <header class="header">
    <div class="logo">MY DASHBOARD</div>
    <div class="search">
      <input type="text" placeholder="Search..." />
      <button>🔍</button>
    </div>
    <div class="profile">
      PROFILE
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.header {
  height: 60px;
  background-color: #222;
  color: #ffd600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.search input {
  padding: 5px 10px;
  border-radius: 12px;
  border: none;
  outline: none;
}
.search button {
  margin-left: 5px;
  padding: 5px 10px;
  border-radius: 12px;
  background-color: #ffd600;
  border: none;
  cursor: pointer;
}
</style>
