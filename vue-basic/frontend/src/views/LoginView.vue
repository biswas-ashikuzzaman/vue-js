<template>
  <div class="login">
    <h2>Login</h2>

    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />

    <button @click="login">Login</button>

    <p>
      Don't have an account?
      <router-link to="/register">Register</router-link>
    </p>
  </div>
</template>

<script>
import api from "../axios";

export default {
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    async login() {
      if (!this.email || !this.password) {
        return alert("Email and password required");
      }

      try {
        const res = await api.post("/login", {
          email: this.email,
          password: this.password
        });

        localStorage.setItem("token", res.data.token);
        this.$router.push("/dashboard");

      } catch (err) {
        alert(err.response.data.message || "Login failed");
      }
    }
  }
}
</script>
