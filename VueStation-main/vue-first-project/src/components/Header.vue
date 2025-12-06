<template>
  <header class="header">
    <!-- Left Logo -->
    <div class="logo">MY PANEL</div>

    <!-- Search Bar -->
    <div class="search-box">
      <input type="text" placeholder="Search..." />
      <button>🔍</button>
    </div>

    <!-- Profile -->
    <div class="profile">
      <img src="https://i.ibb.co/7WymQpF/user.png" class="avatar" />
      <span class="name">ADMIN</span>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  height: 70px;
  width: 100%;
  background: #1b1b1d; /* premium dark */
  color: #f5d76e; /* yellowish accent */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  border-bottom: 2px solid #f5d76e33;
  position: sticky;
  top: 0;
  z-index: 100;
}

/* Logo */
.logo {
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
}

/* Search */
.search-box {
  display: flex;
  align-items: center;
  background: #2a2a2c;
  padding: 3px 10px;
  border-radius: 10px;
  border: 1px solid #f5d76e33;
}

.search-box input {
  background: transparent;
  border: none;
  outline: none;
  padding: 7px;
  color: #fff;
}

.search-box button {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #f5d76e;
}

/* Profile */
.profile {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 2px solid #f5d76e;
}

.name {
  font-size: 14px;
}
</style>
