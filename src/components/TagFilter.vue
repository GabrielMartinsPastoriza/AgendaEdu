<!-- TagFilter.vue -->
<template>
  <q-select
    v-model="tag"
    :options="['', ...tags]"
    label="Filtrar por Tag"
    clearable
  />
</template>

<script setup>
const tag = defineModel() // substitui modelValue

defineProps({
  tags: Array
})
</script>

