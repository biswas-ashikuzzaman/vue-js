<template>
  <div id="app">
    <Sidebar />
    <div class="main-wrapper">
      <Header />
      <main class="main-area">
        <router-view />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: { Sidebar, Header, Footer },
}
</script>

<style>
#app {
  display: flex;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}

.main-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.main-area {
  flex: 1;
  padding: 20px;
  background-color: #111;
  color: #ffd600;
}
</style>
