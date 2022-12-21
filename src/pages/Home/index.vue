<template>
  <n-config-provider class="test">
    <n-button @click="goLogin">登录</n-button>
  </n-config-provider>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const goLogin = () => {
  router.replace({ name: 'Login' });
};
</script>

<style lang="scss" scoped>
.test {
  color: $text-color;
}
</style>
