<template>
  <div class="left">
    <div class="logo">logo</div>
    <div class="nav">
      <div class="nav_title">菜单</div>
      <div>
        <n-menu :options="menu" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import type { MenuOption } from 'naive-ui';
import {
  LaptopOutline as WorkIcon,
  HomeOutline as HomeIcon
} from '@vicons/ionicons5';
import { RouterLink } from 'vue-router';
import { NIcon } from 'naive-ui';
import { defineComponent, h, Component } from 'vue';

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
const menu: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/'
          }
        },
        { default: () => '主页' }
      ),
    key: 'home',
    icon: renderIcon(HomeIcon)
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/write'
          }
        },
        { default: () => '撰写' }
      ),
    key: 'write',
    icon: renderIcon(WorkIcon)
  }
];
export default defineComponent({
  setup() {
    return {
      menu
    };
  }
});
</script>
<style scoped lang="scss">
.left {
  position: fixed;
  min-width: 272px;
}
.logo {
  font-size: 20px;
  text-align: center;
  font-weight: $text-weight;
  height: $header-hight;
  line-height: $header-hight;
  padding: 0px 20px;
}
.nav {
  padding: 0px 20px;
  .nav_title {
    font-size: 16px;
    font-weight: $text-weight;
  }
}
</style>
