<template>
  <div class="hello-box">
    <h1>{{ message }}</h1>
    <button @click="changeText">Click Me</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Vue from Ashik!"
    }
  },
  methods: {
    changeText() {
      this.message = "Button Clicked! Vue is Working!"
    }
  }
}
</script>

<style>
.hello-box {
  padding: 20px;
  background: #f3f3f3;
  border-radius: 10px;
}
</style>
