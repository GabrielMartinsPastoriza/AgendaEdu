<template>
  <q-page padding>
    <note-form @submit="handleSave" />
  </q-page>
</template>

<script setup>
import NoteForm from 'components/NoteForm.vue'
import { useNotesStore } from 'src/stores/NoteSave'
import { useRouter } from 'vue-router'

const notesStore = useNotesStore()
const router = useRouter()

function handleSave(note) {
  note.createdAt = new Date().toISOString()  // <-- Adiciona a data atual no formato ISO
  notesStore.saveNote(note)
  router.push('/notes')
}
</script>
