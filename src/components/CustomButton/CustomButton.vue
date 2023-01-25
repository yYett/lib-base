<template>
  <a :class="['btn', btnClass]"
  :href="data?.url"
  :target="data?.target">
    {{ data?.label }}
  </a>
</template>
<script setup lang="ts">
import type { Button } from '@/interface/porps'

const props = defineProps<{
  data: Button;
  btnClass: String;
}>();

</script>

<style scoped lang="scss">
@import './CustomButton.scss';
</style>
