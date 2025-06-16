<!-- /components/NoteCard.vue -->
<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">{{ note.title }}</div>
      <div class="text-subtitle2 text-grey">{{ formatDate(note.createdAt) }} | #{{ note.tag }}</div>
      <div v-html="note.content" class="q-mt-md" />
    </q-card-section>
    <q-card-actions align="right">
      <q-btn flat label="Excluir" color="negative" @click="$emit('delete')" />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { format } from 'date-fns'

defineProps({ note: Object })

function formatDate(date) {
  return format(new Date(date), 'dd/MM/yyyy HH:mm')
}
</script>
