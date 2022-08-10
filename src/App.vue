<template>
<q-layout view="hHh LpR fff">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar size="3rem" icon="o_info">
          </q-avatar>
          {{ title }}
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab icon="" to="/page1" label="Characters List" />
        <q-route-tab icon="" to="/page2" label="Character Information" />
        <q-route-tab icon="" to="/page3" label="Episodes" />
      </q-tabs>
    </q-header>

    <q-page-container>
        <charactersList />
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import charactersList from './components/charactersList.vue'
import { ref } from 'vue'

export default {
  components: {
    charactersList
  },
  setup () {
    const title = ref('Rick and Morty information searcher')

    return {
      title
    }
  }
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
