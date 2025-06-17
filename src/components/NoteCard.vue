<!-- /components/NoteCard.vue -->
<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">{{ props.note.title }}</div>
      <div class="text-subtitle2 text-grey">{{ formatDate(props.note.createdAt) }} | #{{ props.note.tag }}</div>
      <div v-html="props.note.content" class="q-mt-md" />
    </q-card-section>
    <q-card-actions align="right">
      <q-btn flat label="Editar" color="primary" @click="goToEdit" />
      <q-btn flat label="Excluir" color="negative" @click="$emit('delete')" />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { format } from 'date-fns'
import { useRouter } from 'vue-router'

const props = defineProps({ note: Object })

const router = useRouter()

function formatDate(date) {
  return format(new Date(date), 'dd/MM/yyyy HH:mm')
}

function goToEdit() {
  router.push(`/notes/edit/${props.note.id}`)
}
</script>
