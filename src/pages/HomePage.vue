<template>
  <q-page>
    <div class="column items-center q-pa-xl">
      <h1 class="bem-vindo">
        Bem-vindo ao AgendaEdu, faça suas anotações de aula em qualquer lugar.
      </h1>
      <div class="row q-gutter-md q-mt-lg">
        <q-btn label="Criar nova nota" to="/create" color="primary" rounded />
        <q-btn label="Minhas notas" to="/notes" color="secondary" rounded />
        <q-btn label="Abrir calendário" to="/calendar" color="accent" rounded />
      </div>
    </div>
  </q-page>
</template>

<style scoped>

.bem-vindo {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  font-weight: 900;
  text-align: center;
  max-width: 640px;
  line-height: 1.3;
}
</style>


