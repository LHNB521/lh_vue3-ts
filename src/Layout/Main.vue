<template>
  <section>
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: 0.5s ease;
}
.slide-enter-from {
  transform: translateX(-50px);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
</style>
