import {create} from 'zustand';
import axios from 'axios';

interface Movie {
    id: number;
    title: string;
    description: string;
    posterUrl: string;
    rating: number;
}

const useMovieStore = create((set) => ({
    movies: [] as Movie[],
    isLoading: true,
    error: null as Error | null,
    filteredMovies: [] as Movie[],
    sortedMovies: [] as Movie[],
    searchQuery: "",
    sortOption: "default",
    fetchMovies: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.get('http://localhost:5000/movies');
            set({ movies: response.data });
        } catch (error) {
            set({ error: error as Error });
        } finally {
            set({ isLoading: false });
        }
    },
    setSearchQuery: (query: string) => set({ searchQuery: query }),
    setSortOption: (option: string) => set({ sortOption: option }),
    updateFilteredMovies: (movies: Movie[], query: string) =>
        set({
            filteredMovies: movies.filter((movie) =>
                movie.title.toLowerCase().includes(query.toLowerCase())
            )
        }),
    updateSortedMovies: (movies: Movie[], option: string) =>
        set({ sortedMovies: [...movies].sort((a, b) => {
                if (option === "title") {
                    return a.title.localeCompare(b.title);
                } else if (option === "rating") {
                    return b.rating - a.rating;
                }
                return 0;
            })
        }),
}));

export default useMovieStore;