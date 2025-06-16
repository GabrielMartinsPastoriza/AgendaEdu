<!-- /components/NoteForm.vue -->
<template>
  <q-form @submit.prevent="onSubmit">
    <q-input v-model="title" label="Título" required />
    <q-input v-model="tag" label="Tag" />
    <q-editor v-model="content" label="Conteúdo" :min-height="'200px'" />
    <q-btn type="submit" label="Salvar Nota" color="primary" class="q-mt-md" />
  </q-form>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['submit'])

const title = ref('')
const tag = ref('')
const content = ref('')

function onSubmit() {
  emit('submit', {
    title: title.value,
    tag: tag.value,
    content: content.value,
  })
}
</script>
