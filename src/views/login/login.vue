<template lang="pug">
.centerContainer
  el-form(ref='loginForm', :model='editData' :label-width="80")
    el-form-item(path='username', label='用户名:')
      el-input(v-model='editData.username')
    el-form-item(path='password', label='密码:')
      el-input(v-model='editData.password')
    el-form-item(path='submit')
      el-button(@click="handleSubmit" type="primary") 提交

</template>

<script lang="ts" setup>
import { reactive, ref, computed } from '@vue/runtime-core';
import { useStore } from 'vuex';

import type { UserLoginVo } from '@/views/model.d';
import { ElForm, ElFormItem, ElInput } from 'element-plus';
import { login } from '@/api/user';

// import { UserLoginVo } from '../model.d';

let loginForm = ref<typeof ElForm | undefined>(undefined);

const store = useStore();

const count = computed<number>(() => {
  return store.getters['user/count'];
});

const editData = reactive<UserLoginVo>({
  username: 'admin',
  password: 'Abc465',
});
const handleSubmit = () => {
  login(editData.username, editData.password).then(
    (data) => { console.log('login data:' + JSON.stringify(data)); });
}; 
</script>

<style lang="scss" scoped></style>
