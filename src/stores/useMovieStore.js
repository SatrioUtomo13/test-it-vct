import { defineStore } from "pinia"
import axios from "axios"

export const useMovieStore = defineStore('movie', {
    state: () => ({
        movies: [],
        movieDetail: null,
        loading: false,
        error: null
    }),
    actions: {
        async fetchMovies(query) {
            this.loading = true
            this.error = null

            try {
                const response = await axios.get(`http://www.omdbapi.com/?apikey=e750c71b&s=${query}`)

                if (response.data.Response === 'True') {
                    this.movies = response.data.Search
                } else {
                    this.movies = []
                    this.error = response.data.Error
                }
            } catch (error) {
                this.error = error.message
            } finally {
                this.loading = false
            }
        },
        async fetchMovieDetail(imdbID) {
            this.loading = true
            try {
                const response = await axios.get(`http://www.omdbapi.com/?apikey=e750c71b&i=${imdbID}`)
                this.movieDetail = response.data
                this.error = null
            } catch (error) {
                this.error = error.message
            } finally {
                this.loading = false
            }
        }
    }
})