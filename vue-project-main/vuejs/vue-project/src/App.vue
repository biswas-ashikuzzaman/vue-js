<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>


<template>
  <div>
       <Header/>
    <header>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/contact">Contact</router-link> |
        <router-link to="/category">category</router-link> |
        <router-link to="/product">Product</router-link> |
        <router-link to="/single">Contact</router-link>
      </nav>
    </header>

    <main>
   
      <router-view />
    </main>
    <Footer/>
  </div>
</template>

<style scoped>
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
}
nav a.router-link-active {
  font-weight: bold;
  color: blue;
}
</style>
