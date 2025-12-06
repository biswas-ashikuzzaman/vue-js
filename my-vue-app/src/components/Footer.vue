<template>
  <footer class="footer">
    <div>© 2025 Ashikuzzaman Biswas</div>
    <div>
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
      <a href="#">Support</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
.footer {
  height: 50px;
  background-color: #222;
  color: #ffd600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
.footer a {
  color: #ffd600;
  margin-left: 15px;
  text-decoration: none;
}
</style>
