<template lang="pug">
.hello hello "{{count}}"
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
