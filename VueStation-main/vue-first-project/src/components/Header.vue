<!-- Header.vue -->
<template>
  <header class="header">
    <div class="left">
      <button class="menu-btn" @click="$emit('toggle-sidebar')">
        <i class="las la-bars"></i>
      </button>
      <h2 class="logo">MyPanel</h2>
    </div>

    <div class="center">
      <input type="text" placeholder="Search here..." />
      <i class="las la-search search-icon"></i>
    </div>

    <div class="right">
      <i class="las la-bell notif"></i>

      <div class="profile" @click="toggleProfile">
        <img src="https://i.ibb.co/7WymQpF/user.png" />
        <i class="las la-angle-down"></i>

        <ul v-if="openProfile" class="dropdown">
          <li>Dashboard</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      openProfile: false,
    };
  },
  methods: {
    toggleProfile() {
      this.openProfile = !this.openProfile;
    },
  },
};
</script>

<style scoped>
.header {
  height: 70px;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

/* Left */
.left {
  display: flex;
  align-items: center;
  gap: 15px;
}
.menu-btn {
  width: 42px;
  height: 42px;
  border: none;
  background: #f3f4f6;
  border-radius: 12px;
  cursor: pointer;
  font-size: 20px;
}
.logo {
  font-size: 20px;
  font-weight: 600;
}

/* Center Search */
.center {
  position: relative;
}
.center input {
  width: 280px;
  padding: 10px 40px 10px 15px;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  outline: none;
}
.search-icon {
  position: absolute;
  right: 12px;
  top: 10px;
  font-size: 20px;
  opacity: 0.6;
}

/* Right Profile */
.right {
  display: flex;
  align-items: center;
  gap: 20px;
}
.notif {
  font-size: 20px;
  cursor: pointer;
  opacity: 0.7;
}
.profile {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}
.profile img {
  width: 38px;
  height: 38px;
  border-radius: 50%;
}
.dropdown {
  position: absolute;
  background: white;
  top: 55px;
  right: 0;
  width: 150px;
  list-style: none;
  padding: 10px 0;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}
.dropdown li {
  padding: 10px 15px;
  cursor: pointer;
}
.dropdown li:hover {
  background: #f3f4f6;
}
</style>
