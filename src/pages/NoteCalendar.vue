<!-- /pages/Calendar.vue -->
<template>
  <q-page padding>
    <q-calendar
      view="month"
      :events="events"
      event-color="primary"
    />
  </q-page>
</template>

<script setup>
import { computed } from 'vue'
import { useNotesStore } from 'src/stores/NoteSave'

const notesStore = useNotesStore()

const events = computed(() =>
  notesStore.notes.map(note => ({
    name: note.title,
    start: note.createdAt,
    end: note.createdAt
  }))
)
</script>
