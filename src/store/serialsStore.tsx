import {create} from 'zustand';
import axios from 'axios';

interface Series {
    id: number;
    title: string;
    description: string;
    posterUrl: string;
    rating: number;
}

const useSerialsStore = create((set) => ({
    series: [] as Series[],
    isLoading: true,
    error: null as Error | null,
    filteredSeries: [] as Series[],
    sortedSeries: [] as Series[],
    searchQuery: "",
    sortOption: "default",
    fetchSerials: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.get('http://localhost:5000/serials');
            set({ series: response.data });
        } catch (error) {
            set({ error: error as Error });
        } finally {
            set({ isLoading: false });
        }
    },
    setSearchQuery: (query: string) => set({ searchQuery: query }),
    setSortOption: (option: string) => set({ sortOption: option }),
    updateFilteredSeries: (series: Series[], query: string) =>
        set({
            filteredSeries: series.filter((s) =>
                s.title.toLowerCase().includes(query.toLowerCase())
            )
        }),
    updateSortedSeries: (series: Series[], option: string) =>
        set({ sortedSeries: [...series].sort((a, b) => {
                if (option === "title") {
                    return a.title.localeCompare(b.title);
                } else if (option === "rating") {
                    return b.rating - a.rating;
                }
                return 0;
            })
        }),
}));

export default useSerialsStore;