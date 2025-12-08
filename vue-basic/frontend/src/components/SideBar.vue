<template>
  <div class="sidebar">
    <h3>Menu</h3>
    <router-link to="/dashboard">Dashboard</router-link>
    <a @click="logout">Logout</a>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    async logout() {
      await axios.post("http://localhost:8000/api/logout", {}, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      });

      localStorage.removeItem("token");
      this.$router.push("/");
    }
  }
}
</script>
