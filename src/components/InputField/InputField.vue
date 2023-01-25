<template>
  <div  class="input-field">
    <input
      :id="name"
      v-model="currvValue"
      type="text"
      :name="name"
      :maxlength="options?.maxLength"
      :placeholder="name"
    />
    <label for="name"> {{ label }} </label>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import type { FormFieldOptions } from '@/interface/porps'


const props = defineProps<{
  name: string;
  label: string;
  options: FormFieldOptions,
  value: string;
}>();

const emit = defineEmits<{
  (e: 'update:value', value: string): void
}>()

const currvValue = ref(props.value || '');

watch(currvValue, () => emit('update:value', currvValue.value as string))

</script>
<style lang="scss" scoped>
@import './InputField.scss';
</style>
