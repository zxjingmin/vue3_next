<template lang="pug">
.hello {{ count }}
el-button(type='primary') Submit
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import { ElButton } from 'element-plus';
  const store = useStore();

  const count = computed(() => {
    return store.state.user.count;
  });
</script>

<style scoped lang="scss"></style>
