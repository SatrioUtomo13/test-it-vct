<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useMovieStore } from '../stores/useMovieStore.js'

const route = useRoute()
const movieStore = useMovieStore()

onMounted(() => {
    movieStore.fetchMovieDetail(route.params.imdbID)
})

const nowPlayingMovies = computed(() => {
    return movieStore.movies.filter((movie) => movie.imdbID !== route.params.imdbID).slice(0, 6)
})
</script>

<template>
    <div v-if="movieStore.loading" class="text-center">Loading...</div>
    <div v-if="movieStore.error" class="text-center text-red-500">
        {{ movieStore.error }}
    </div>
    <div v-if="movieStore.movieDetail" class="text-white">
        <h1 class="text-xl mb-4 font-semibold">
            {{ movieStore.movieDetail.Title }}
        </h1>
        <div class="flex space-x-4">
            <div>
                <img
                    :src="movieStore.movieDetail.Poster"
                    :alt="movieStore.movieDetail.Title"
                    class="rounded-xl"
                />
            </div>
            <div class="flex flex-col">
                <div class="flex flex-col leading-5">
                    <span>Release Date : {{ movieStore.movieDetail.Released }}</span>
                    <span>Language : {{ movieStore.movieDetail.Language }}</span>
                    <span>Genre : {{ movieStore.movieDetail.Genre }}</span>
                    <span>Cast & Crew : {{ movieStore.movieDetail.Actors }}</span>
                    <span>Director : {{ movieStore.movieDetail.Director }}</span>
                    <span>Length : {{ movieStore.movieDetail.Runtime }}</span>
                </div>

                <div class="flex flex-col mb-5">
                    <span class="my-5 text-xl font-semibold">Sinopsis</span>
                    {{ movieStore.movieDetail.Plot }}
                </div>

                <div>
                    <button
                        type="button"
                        class="text-white bg-[#C0222E] hover:bg-[#C0222E]/90 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                    >
                        Buy Ticket
                    </button>
                    <button
                        type="button"
                        class="text-white bg-[#C0222E] hover:bg-[#C0222E]/90 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                    >
                        Watch Trailer
                    </button>
                </div>
            </div>
        </div>

        <h1 class="text-xl font-semibold my-8">Now Playing</h1>
        <div class="grid grid-cols-3 gap-4 mb-32">
            <figure v-for="movie in nowPlayingMovies" :key="movie.imdbID" class="max-w-lg">
                <img
                    class="h-auto max-w-full rounded-lg"
                    :src="movie.Poster !== 'N/A' ? movie.Poster : 'placeholder-image-url.jpg'"
                    :alt="movie.Title"
                />
            </figure>
        </div>
    </div>
</template>
