<template>
  <q-layout view="lHh Lpr lFf">

    <q-header elevated>
      <q-toolbar>

        <!-- Botão de menu: visível em telas pequenas -->
        <q-btn
          flat
          dense
          round
          icon="menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
          class="q-mr-sm"
        />

        <!-- Nome do sistema -->
        <q-toolbar-title>
          AgendaEdu
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <!-- Menu lateral -->
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list padding>
        <q-item clickable v-ripple to="/create">
          <q-item-section avatar>
            <q-icon name="note_add" />
          </q-item-section>
          <q-item-section>Criar Nota</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/notes">
          <q-item-section avatar>
            <q-icon name="list_alt" />
          </q-item-section>
          <q-item-section>Minhas Notas</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/calendar">
          <q-item-section avatar>
            <q-icon name="calendar_today" />
          </q-item-section>
          <q-item-section>Calendário</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Conteúdo principal -->
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(true)
</script>
