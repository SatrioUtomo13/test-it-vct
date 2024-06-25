<script setup>
import { ref } from 'vue'
import { useMovieStore } from '../../stores/useMovieStore.js'

const query = ref('')
const movieStore = useMovieStore()

const searchMovie = () => {
    movieStore.fetchMovies(query.value)
}
</script>

<template>
    <form class="max-w-md mx-auto" @submit.prevent="searchMovie">
        <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >Search</label
        >
        <div class="relative">
            <input
                v-model="query"
                type="search"
                id="default-search"
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Title / Theatre here"
                required
            />
        </div>
    </form>
</template>