<template lang="pug">
.hello(about='222', data-id='333') hello "{{ count }}"
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';

  const store = useStore();

  const count = computed(() => {
    return store.state.user.count;
  });
</script>

<style scoped lang="scss"></style>
