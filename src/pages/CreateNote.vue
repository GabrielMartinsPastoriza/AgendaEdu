<!-- /pages/CreateNote.vue -->
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
  notesStore.saveNote(note)
  router.push('/notes')
}
</script>
