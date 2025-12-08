<template>
  <div class="main">
    <Sidebar />
    <div class="content">
      <!-- <Header /> -->
      <h3>Welcome to Dashboard</h3>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue"
// import Header from "../components/Header.vue"

export default {
  components: { Sidebar,  }
}
</script>
