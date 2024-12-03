import {create} from 'zustand';

const useSerialsStore = create((set) => ({
    series: [],
    isLoading: true,
    error: null,
    fetchSerials: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await fetch('http://localhost:5000/serials');
            if (!response.ok) {
                throw new Error('Ошибка загрузки сериалов');
            }
            const data = await response.json();
            set({ series: data });
        } catch (error) {
            set({ error });
        } finally {
            set({ isLoading: false });
        }
    },
}));

export default useSerialsStore;