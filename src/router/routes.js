export default [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
   children: [
  { path: '', redirect: '/create' },
  { path: 'create', component: () => import('pages/CreateNote.vue') },
  { path: 'notes', component: () => import('pages/NotesList.vue') },
  { path: 'notes/edit/:id', component: () => import('pages/EditNote.vue') },
  { path: 'calendar', component: () => import('pages/NoteCalendar.vue') }
]

  }
]

