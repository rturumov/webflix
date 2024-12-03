import {create} from 'zustand';

const useCartoonsStore = create((set) => ({
    cartoons: [],
    isLoading: true,
    error: null,
    fetchCartoons: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await fetch('http://localhost:5000/cartoons');
            if (!response.ok) {
                throw new Error('Ошибка загрузки мультфильмов');
            }
            const data = await response.json();
            set({ cartoons: data });
        } catch (error) {
            set({ error });
        } finally {
            set({ isLoading: false });
        }
    },
}));

export default useCartoonsStore;