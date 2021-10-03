<template lang="pug">
el-form(ref='DynamicForm', :model='formData', label-width='80px')
  el-form-item(v-for='item in formItem', :key='`input_${item.name}`' :label='item.label')
    el-input(v-if='item.type == "text"' v-model='formData[item.name]')
    el-select(v-if='item.type == "select"' 
      v-model='formData.address' 
      allow-create 
      default-first-option
      placeholder="select")
      el-option(value='open')
  el-form-item
    el-button(type='primary', @click='submitHandle') Submit
</template>

<script lang="ts" setup>
import type { FormItemType } from './types.d';
import type { UnwrapNestedRefs } from 'vue';
import type { ElForm } from 'element-plus/es';
import { reactive, onMounted, ref } from 'vue';

const props = defineProps({
  formItem: {
    type: Array as () => Array<FormItemType>,
    required: true,
    default: () => [],
  },
});

const formData: UnwrapNestedRefs<Record<string, string | number>> = reactive({});

onMounted(() => {
  props.formItem.forEach((x) => {
    formData[x.name] = x.default ?? '';
  });
});

const DynamicForm = ref<typeof ElForm | undefined>(undefined);
const submitHandle = () => {
  // console.log('hello');
};
</script>

<style lang="scss" scoped></style>
