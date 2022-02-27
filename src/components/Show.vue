<template lang="pug">
.old_value {{ title }}
.self_value {{ self }}
</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue';

  type ShowProps = {
    title: string;
  };

  setTimeout(() => {
    console.log('create success');
  }, 5000);
  const props = defineProps<ShowProps>();
  const self = ref<string>(props.title);
  watch(
    () => props.title,
    (newValue: string) => {
      self.value = newValue;
    }
  );
</script>

<style lang="scss" scoped></style>
