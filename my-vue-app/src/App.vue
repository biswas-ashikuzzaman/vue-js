<template>
  <div id="app" :data-theme="isDark ? 'dark' : 'light'">
    <div class="app-layout">
      <Sidebar :collapsed="sidebarCollapsed" @toggle="toggleSidebar" @set-collapsed="val => sidebarCollapsed = val" />
      <div style="flex:1; display:flex; flex-direction:column">
        <Header @toggle-sidebar="toggleSidebar" :is-dark="isDark" @toggle-dark="toggleDark" />
        <main class="main-area">
          <div class="card">
            <h2>Dashboard</h2>
            <p>এইখানে তুমি practice করতে পারো — components, routes, widgets ইত্যাদি রাখার জন্য।</p>
          </div>
          <div style="height:16px"></div>
          <div class="card">
            <h3>Notes</h3>
            <ul>
              <li>Sidebar collapsed: {{ sidebarCollapsed }}</li>
              <li>Dark mode: {{ isDark }}</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: { Header, Sidebar },
  data(){
    return {
      sidebarCollapsed: false,
      isDark: false
    }
  },
  methods:{
    toggleSidebar(){
      this.sidebarCollapsed = !this.sidebarCollapsed
    },
    toggleDark(){
      this.isDark = !this.isDark
    }
  }
}
</script>

<style>
/* small style to let header stay fixed top within its column */
</style>
