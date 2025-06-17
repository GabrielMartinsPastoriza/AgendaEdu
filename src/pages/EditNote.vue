<template>
  <q-page padding>
    <note-form :note="noteToEdit" @submit="handleUpdate" />
  </q-page>
</template>

<script setup>
import { useNotesStore } from 'src/stores/NoteSave'
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import NoteForm from 'components/NoteForm.vue'

const store = useNotesStore()
const route = useRoute()
const router = useRouter()

// Captura o ID da nota da URL
const noteId = Number(route.params.id)

// Busca a nota no store
const noteToEdit = computed(() => store.notes.find(n => n.id === noteId))

function handleUpdate(updatedNote) {
  store.updateNote(updatedNote) // será implementado no store
  router.push('/notes') // redireciona para a lista de notas
}
</script>
