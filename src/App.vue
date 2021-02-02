<template>
  <div class="container mx-auto">
    <profile />
    <buttons />
  </div>
</template>

<script setup>
import Profile from './components/Profile.vue'
import Buttons from './components/Buttons.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #7f8d9e;
  padding-top: 60px;
  background-color:#191b21;
}
</style>