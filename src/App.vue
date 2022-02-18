<template lang="pug">
//- router-view
el-button(type="primary" @click="onChange") 点我
Show(:title="title")
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Show from './components/Show.vue';
// const Show = defineAsyncComponent(() => import('./components/Show.vue'));
const title = ref<string>('hello');
const onChange = () => {
  title.value = 'world';
};
</script>

<style>
</style>
