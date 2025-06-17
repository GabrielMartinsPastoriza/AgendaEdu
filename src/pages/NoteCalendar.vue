<!-- /pages/NoteCalendar.vue -->
<template>
  <q-page padding>
    <q-calendar-month
      v-model="selectedDate"
      :events="events"
      event-color="primary"
      @click-date="onDayClick"
      animated
    />

    <div v-if="selectedNotes.length" class="q-mt-md">
      <h6 class="q-mb-sm">Notas do dia {{ formatDate(selectedDate) }}</h6>
      <q-list bordered>
        <q-item v-for="note in selectedNotes" :key="note.id" clickable>
          <q-item-section>
            <q-item-label>{{ note.title }}</q-item-label>
            <q-item-label caption>#{{ note.tag }}</q-item-label>
            <q-item-label caption>{{ formatDate(note.createdAt, true) }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <div v-else-if="selectedDate" class="q-mt-md text-grey">
      Nenhuma nota criada no dia {{ formatDate(selectedDate) }}.
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useNotesStore } from 'src/stores/NoteSave'
import { isSameDay, parseISO, format } from 'date-fns'

const notesStore = useNotesStore()

const selectedDate = ref(new Date().toISOString().slice(0, 10)) // yyyy-MM-dd
const selectedNotes = ref([])

const events = computed(() =>
  notesStore.notes.map(note => {
    const date = new Date(note.createdAt)
    const dayMidday = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      12, 0, 0
    ).toISOString()

    return {
      id: note.id,
      name: note.title,
      start: dayMidday,
      end: dayMidday,
      color: 'primary'
    }
  })
)

function onDayClick(day) {
  console.log('Data clicada:', day)
  const clickedDate = typeof day === 'string' ? parseISO(day) : parseISO(day.date)
  selectedDate.value = format(clickedDate, 'yyyy-MM-dd')

  selectedNotes.value = notesStore.notes.filter(note =>
    isSameDay(parseISO(note.createdAt), clickedDate)
  )
  console.log('Notas filtradas para o dia:', selectedNotes.value)
}

// Atualiza as notas exibidas sempre que as notas ou a data selecionada mudam
watch(
  [() => notesStore.notes, selectedDate],
  () => {
    selectedNotes.value = notesStore.notes.filter(note =>
      isSameDay(parseISO(note.createdAt), parseISO(selectedDate.value))
    )
  },
  { immediate: true }
)

function formatDate(date, withTime = false) {
  if (!date) return ''
  const parsed = typeof date === 'string' ? parseISO(date) : date
  return format(parsed, withTime ? 'dd/MM/yyyy HH:mm' : 'dd/MM/yyyy')
}

</script>


