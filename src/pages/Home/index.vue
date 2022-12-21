<template>
  <n-config-provider class="test" :locale="enUS" :theme="theme">
    用户名: {{ mainStore }} <br />
    长度：{{ mainStore.nameLength }}
  </n-config-provider>
  <n-button @click="updateName">修改名字</n-button>
</template>
<script setup lang="ts">
import { useMainStore } from '@/store';
import { ref } from 'vue-demi';

import { darkTheme, NButton, zhCN, enUS } from 'naive-ui';
import type { GlobalTheme } from 'naive-ui';
const mainStore = useMainStore();
const theme = ref<GlobalTheme | null>(null);
const updateName = () => {
  mainStore.$patch({
    name: '66666'
  });
};
</script>

<style lang="scss" scoped>
.test {
  color: $text-color;
}
</style>
