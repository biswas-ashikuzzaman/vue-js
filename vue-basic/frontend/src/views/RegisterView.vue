<template>
  <div class="register">
    <h2>Register</h2>

    <input v-model="name" placeholder="Name" />
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />

    <button @click="register">Register</button>

    <p>
      Already have an account?
      <router-link to="/">Login</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: ""
    }
  },
  methods: {
    async register() {
      await axios.post("http://localhost:8000/api/register", {
        name: this.name,
        email: this.email,
        password: this.password
      });

      alert("Register success");
      this.$router.push("/");
    }
  }
}
</script>
