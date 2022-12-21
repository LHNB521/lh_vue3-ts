<template>
  <n-message-provider>
    <router-view></router-view>
  </n-message-provider>
</template>
<script lang="ts">
import { NMessageProvider } from 'naive-ui';
export default {
  name: 'App',
  components: { NMessageProvider }
};
</script>

<style scoped></style>
