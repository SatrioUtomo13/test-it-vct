<script setup>
import { useMovieStore } from '../stores/useMovieStore.js'

const movieStore = useMovieStore()
</script>

<template>
    <div v-if="movieStore.loading" class="text-center">Loading...</div>
    <div v-if="movieStore.error" class="text-center text-red-500">
        {{ movieStore.error }}
    </div>
    <div class="grid grid-cols-3 gap-4 mb-32">
        <figure v-for="movie in movieStore.movies" :key="movie.imdbID" class="max-w-lg">
            <img
                class="h-auto max-w-full rounded-lg"
                :src="movie.Poster !== 'N/A' ? movie.Poster : 'placeholder-image-url.jpg'"
                :alt="movie.Title"
            />
            <router-link
                :to="{ name: 'detail', params: { imdbID: movie.imdbID } }"
                class="mt-2 text-sm text-center text-white"
            >
                {{ movie.Title }}
            </router-link>
        </figure>
    </div>
</template>
