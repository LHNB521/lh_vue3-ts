<template>
  <n-message-provider>
    <router-view />
  </n-message-provider>
</template>
<script lang="ts">
import { NMessageProvider } from 'naive-ui';
export default {
  name: 'App',
  components: { NMessageProvider }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
