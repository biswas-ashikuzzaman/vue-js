<template>
  <div :class="['sidebar', { collapsed: isCollapsed }]">

    <!-- Toggle Button -->
    <div class="toggle-btn" @click="toggleSidebar">
      <span v-if="isCollapsed">➤</span>
      <span v-else>❮</span>
    </div>

    <!-- Menu -->
    <ul class="menu">
      <li @click="toggleMenu('dashboard')" class="item">
        <span v-if="!isCollapsed">Dashboard</span>
      </li>

      <li @click="toggleMenu('reports')" class="item">
        <span v-if="!isCollapsed">Reports</span>
      </li>

      <li @click="toggleMenu('analytics')" class="item">
        <span v-if="!isCollapsed">Analytics</span>
      </li>

      <li @click="toggleMenu('settings')" class="item">
        <span v-if="!isCollapsed">Settings</span>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      isCollapsed: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 230px;
  height: 100vh;
  background: #1b1b1d; /* dark */
  color: #f5d76e;
  padding-top: 20px;
  transition: 0.3s ease;
  border-right: 2px solid #f5d76e33;
}

.sidebar.collapsed {
  width: 70px;
}

/* Toggle Button */
.toggle-btn {
  position: absolute;
  top: 15px;
  right: -12px;
  width: 28px;
  height: 28px;
  background: #f5d76e;
  color: #1b1b1d;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
}

/* Menu */
.menu {
  list-style: none;
  margin-top: 60px;
  padding: 0;
}

.item {
  padding: 14px 18px;
  cursor: pointer;
  transition: 0.3s;
  margin: 5px 10px;
  border-radius: 10px;
  background: #29292c;
  border: 1px solid #f5d76e22;
}

.item:hover {
  background: #f5d76e;
  color: #1b1b1d;
  font-weight: bold;
}
</style>
