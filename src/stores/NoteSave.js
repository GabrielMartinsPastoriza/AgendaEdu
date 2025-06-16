// /store/notes.js
import { defineStore } from 'pinia'
import Note from 'src/models/Note'

export const useNotesStore = defineStore('notes', {
  state: () => ({
    notes: JSON.parse(localStorage.getItem('notes') || '[]')
  }),

  getters: {
    tags: (state) => [...new Set(state.notes.map(n => n.tag).filter(Boolean))],
    getNotesByTag: (state) => (tag) => state.notes.filter(note => note.tag === tag),
  },

  actions: {
    saveNote(noteData) {
      const note = new Note(noteData);
      this.notes.push(note);
      this._persist();
    },
    updateNote(updatedNote) {
      const index = this.notes.findIndex(n => n.id === updatedNote.id);
      if (index !== -1) {
        this.notes[index] = updatedNote;
        this._persist();
      }
    },
    deleteNote(id) {
      this.notes = this.notes.filter(n => n.id !== id);
      this._persist();
    },
    _persist() {
      localStorage.setItem('notes', JSON.stringify(this.notes));
    }
  }
});
