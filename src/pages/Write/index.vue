<template>
  <v-md-editor
    v-model="text"
    class="v-md-editor"
    left-toolbar="undo redo | image save"
    right-toolbar="preview  fullscreen"
    @save="saveHandle"
  />
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
interface mdProps {
  text: string;
  html: string;
}

export default defineComponent({
  setup() {
    // 点击保存
    const saveHandle = (md: mdProps, html: mdProps) => {
      console.log(md);
    };
    return {
      text: '',
      toolbar: '',
      saveHandle
    };
  }
});
</script>

<style scoped lang="scss">
.v-md-editor {
  min-height: 70vh;
}
</style>
