<template lang="pug">
n-form(ref='loginForm', :model='editData')
  n-form-item(path='username', label='用户名')
    n-input(v-model:value='editData.username')
  n-form-item(path='password', label='密码')
    n-input(v-model:value='editData.password')
</template>

<script lang="ts" setup>
  import { reactive, ref, defineExpose } from '@vue/runtime-core';
  import { NForm } from 'naive-ui';
  import type { UserLoginVo } from '@/views/model.d';

  // import { UserLoginVo } from '../model.d';

  let loginForm = ref<typeof NForm | undefined>(undefined);

  const editData = reactive<UserLoginVo>({
    username: '',
    password: '',
  });
</script>

<style lang="scss" scoped></style>
