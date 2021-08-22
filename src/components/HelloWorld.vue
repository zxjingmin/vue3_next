<template lang="pug">
.hello {{ count }}
n-button Submit
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
