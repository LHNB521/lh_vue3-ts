<template>
  <n-space vertical size="large">
    <n-layout>
      <n-spin :show="show">
        <n-layout-header>后台管理系统</n-layout-header>
        <n-layout-content>
          <n-form ref="formRef" :model="model" :rules="rules">
            <n-form-item path="username" label="账号">
              <n-input v-model:value="model.username" @keydown.enter.prevent />
            </n-form-item>
            <n-form-item path="password" label="密码">
              <n-input v-model:value="model.password" type="password" @keydown.enter.prevent />
            </n-form-item>
            <div style="display: flex; justify-content: flex-end">
              <n-button round type="primary" @click="handleLoginClick"> 登录 </n-button>
            </div>
          </n-form>
        </n-layout-content>
        <n-layout-footer> 底部 </n-layout-footer>
        <template #description> 登录中。。。 </template>
      </n-spin>
    </n-layout>
  </n-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { FormInst, FormRules, useMessage } from 'naive-ui';
import loginApi from '@/service/api/login/login';

interface ModelType {
  password: string | null;
  username: string | null;
}

export default defineComponent({
  setup() {
    const formRef = ref<FormInst | null>(null);
    const message = useMessage();
    const show = ref(false);
    const modelRef = ref<ModelType>({
      username: null,
      password: null
    });

    const rules: FormRules = {
      username: [
        {
          required: true,
          message: '请输入账号'
        }
      ],
      password: [
        {
          required: true,
          message: '请输入密码'
        }
      ]
    };
    // 点击登录
    const handleLoginClick = (e: MouseEvent) => {
      e.preventDefault();
      formRef.value?.validate((errors) => {
        if (!errors) {
          message.success('输出正确，正在登录。。。');
          show.value = !show.value;
          console.log(modelRef.value.password);
          const params = {
            username: modelRef.value.username,
            password: modelRef.value.password
          };
          handleLogin(params);
        } else {
          show.value = false;
          const msg = errors[0][0].message;
          message.error(`${msg}`);
        }
      });
    };
    const handleLogin = async (params: any) => {
      const res = await loginApi.login(params);
      console.log(res);
    };
    return {
      formRef,
      model: modelRef,
      rules,
      show,
      handleLoginClick
    };
  }
});
</script>

<style scoped>
.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.4);
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 20px;
}
.n-layout-footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
}
.n-layout-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  margin-top: 150px;
}
</style>
