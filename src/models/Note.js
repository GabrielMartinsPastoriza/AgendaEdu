// models/Note.js
export default class Note {
  constructor({ id, title, tag, content, createdAt }) {
    this.id = id || Date.now();
    this.title = title || '';
    this.tag = tag || '';
    this.content = content || '';
    this.createdAt = createdAt || new Date().toISOString();
  }
}
