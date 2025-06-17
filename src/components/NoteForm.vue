<template>
  <q-form @submit.prevent="onSubmit">
    <q-input v-model="form.title" label="Título" required class="q-mb-md" />
    <q-input v-model="form.tag" label="Tag" class="q-mb-md" />
    <q-editor v-model="form.content" label="Conteúdo" :min-height="'200px'" class="q-mb-md" />
    <q-btn type="submit" label="Salvar Nota" color="primary" class="q-mt-md" />
  </q-form>
</template>

<script setup>
import { ref, watch } from 'vue'
import Note from 'src/models/Note'

const props = defineProps({
  note: Object // recebe nota já existente (opcional)
})

const emit = defineEmits(['submit'])

const form = ref({
  title: '',
  tag: '',
  content: ''
})

// Preenche os campos caso esteja editando uma nota
watch(() => props.note, (note) => {
  if (note) {
    form.value = {
      title: note.title,
      tag: note.tag,
      content: note.content
    }
  }
}, { immediate: true })

function onSubmit() {
  const finalNote = new Note({
    ...form.value,
    id: props.note?.id, // mantém id se estiver editando
    createdAt: props.note?.createdAt // mantém data original
  })

  emit('submit', finalNote)
}
</script>
