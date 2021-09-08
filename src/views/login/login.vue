<template lang="pug">
el-form(ref='loginForm', :model='editData')
  el-form-item(path='username', label='用户名')
    el-input(v-model:value='editData.username')
  el-form-item(path='password', label='密码')
    el-input(v-model:value='editData.password')
</template>

<script lang="ts" setup>
  import { reactive, ref, defineExpose } from '@vue/runtime-core';

  import type { UserLoginVo } from '@/views/model.d';
  import { ElForm, ElFormItem, ElInput } from 'element-plus';

  // import { UserLoginVo } from '../model.d';

  let loginForm = ref<typeof ElForm | undefined>(undefined);

  const editData = reactive<UserLoginVo>({
    username: '',
    password: '',
  });
</script>

<style lang="scss" scoped></style>
