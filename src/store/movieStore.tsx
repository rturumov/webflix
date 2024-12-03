import {create} from 'zustand';

const useMovieStore = create((set) => ({
    movies: [],
    isLoading: true,
    error: null,
    fetchMovies: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await fetch('http://localhost:5000/movies');
            if (!response.ok) {
                throw new Error('Ошибка загрузки фильмов');
            }
            const data = await response.json();
            set({ movies: data });
        } catch (error) {
            set({ error });
        } finally {
            set({ isLoading: false });
        }
    },
}));

export default useMovieStore;