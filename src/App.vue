<template>
  <div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Notification/>
  </div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue';
import Notification from './pages/Notification/index.vue';

</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
