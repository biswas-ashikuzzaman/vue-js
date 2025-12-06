<!-- Sidebar.vue -->
<template>
  <div :class="['sidebar', { collapsed: collapsed }]">
    <!-- Logo -->
    <div class="top">
      <i class="las la-chart-pie icon"></i>
      <span v-if="!collapsed">ADMIN PANEL</span>
    </div>

    <!-- Menu -->
    <ul class="menu">
      <li>
        <i class="las la-home"></i>
        <span v-if="!collapsed">Dashboard</span>
      </li>

      <li>
        <i class="las la-tasks"></i>
        <span v-if="!collapsed">Tasks</span>
      </li>

      <li>
        <i class="las la-calendar"></i>
        <span v-if="!collapsed">Calendar</span>
      </li>

      <li>
        <i class="las la-chart-bar"></i>
        <span v-if="!collapsed">Analytics</span>
      </li>

      <li>
        <i class="las la-users"></i>
        <span v-if="!collapsed">Users</span>
      </li>

      <li>
        <i class="las la-cog"></i>
        <span v-if="!collapsed">Settings</span>
      </li>
    </ul>

    <button class="toggle" @click="collapsed = !collapsed">
      <i class="las" :class="collapsed ? 'la-angle-right' : 'la-angle-left'"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>

<style scoped>
.sidebar {
  width: 230px;
  height: 100vh;
  background: #1f2937;
  color: #e5e7eb;
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  position: relative;
  transition: 0.3s;
}
.sidebar.collapsed {
  width: 75px;
}

/* Top Branding */
.top {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
  font-weight: 600;
  font-size: 17px;
}
.icon {
  font-size: 24px;
}

/* Menu */
.menu {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}
.menu li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 15px;
  border-radius: 8px;
  transition: 0.2s;
}
.menu li:hover {
  background: #374151;
}
.menu i {
  font-size: 20px;
}

/* Toggle Button */
.toggle {
  position: absolute;
  right: -12px;
  top: 20px;
  width: 28px;
  height: 28px;
  background: #111827;
  border: none;
  color: white;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0,0,0,0.4);
  transition: 0.3s;
}
</style>
