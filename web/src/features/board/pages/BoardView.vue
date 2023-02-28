<template>
  <main>
    <header>
      <h2>Project name</h2>
    </header>
    <section>
      <v-container>
        <v-row>
          <v-col
            v-for="i in 3"
            :key="i"
          >
            <v-card title="Status"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </main>
</template>
