<template>
  <div class="container mx-auto">
    
    <profile />
    
    <div class="max-w-4xl w-full px-5 mx-auto">
      <buttons />
    </div>
  
  </div>
</template>

<script setup>
import Profile from './components/Profile.vue'
import Buttons from './components/Buttons.vue'
</script>

<style>
body{
    background-color:#191b21;
}

#app {
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #7f8d9e;
}
</style>