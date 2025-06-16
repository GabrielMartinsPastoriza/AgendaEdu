<!-- /pages/NotesList.vue -->
<template>
  <q-page padding>
    <tag-filter :tags="tags" v-model="selectedTag" />
    
    <div class="q-gutter-md q-mt-md">
      <note-card
        v-for="note in filteredNotes"
        :key="note.id"
        :note="note"
        @delete="notesStore.deleteNote(note.id)"
      />
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useNotesStore } from 'src/stores/NoteSave'
import TagFilter from 'components/TagFilter.vue'
import NoteCard from 'components/NoteCard.vue'

const notesStore = useNotesStore()
const selectedTag = ref('')

const tags = computed(() => notesStore.tags)
const filteredNotes = computed(() => {
  return selectedTag.value
    ? notesStore.getNotesByTag(selectedTag.value)
    : notesStore.notes
})
</script>
