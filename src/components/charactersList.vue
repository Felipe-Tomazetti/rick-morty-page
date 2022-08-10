<template>
  <q-page style="padding-top: 60px" class="q-pa-md">
    <input type="text" v-model="input" placeholder="Search character..." />
  <p v-if="error">Something went wrong...</p>
  <p v-if="loading">Loading...</p>
  <p v-else v-for="character in characters.results" :key="character.id">
    {{ character.name }}
  </p>
  </q-page>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import { CHARACTERS_QUERY } from '../graphql/queries'
import { useQuery } from '@vue/apollo-composable'

export default {
  name: 'Characters List',
  setup () {
    const { result, error, loading } = useQuery(CHARACTERS_QUERY)

    const characters = computed(() => result.value?.characters ?? [])

    return {
      result,
      error,
      loading,
      characters
    }
  }
}

</script>


<style scoped>
.read-the-docs {
  color: #888;
}
</style>
