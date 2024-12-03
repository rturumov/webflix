import {create} from 'zustand';
import axios from "axios";

interface Cartoon {
    id: number;
    title: string;
    description: string;
    posterUrl: string;
    rating: number;
}

const useCartoonsStore = create((set) => ({
    cartoons: [] as Cartoon[],
    isLoading: true,
    error: null,
    filteredCartoons: [] as Cartoon[],
    sortedCartoons: [] as Cartoon[],
    searchQuery: "",
    sortOption: "default",
    fetchCartoons: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.get('http://localhost:5000/cartoons');
            set({ cartoons: response.data });
        } catch (error) {
            set({ error: error as Error });
        } finally {
            set({ isLoading: false });
        }
    },
    setSearchQuery: (query: string) => set({ searchQuery: query }),
    setSortOption: (option: string) => set({ sortOption: option }),
    updateFilteredCartoons: (cartoons: Cartoon[], query: string) =>
        set({ filteredCartoons: cartoons.filter((cartoon) =>
                cartoon.title.toLowerCase().includes(query.toLowerCase()))
        }),
    updateSortedCartoons: (cartoons: Cartoon[], option: string) =>
        set({ sortedCartoons: [...cartoons].sort((a, b) => {
                if (option === "title") {
                    return a.title.localeCompare(b.title);
                } else if (option === "rating") {
                    return b.rating - a.rating;
                }
                return 0;
            })
        }),
}));

export default useCartoonsStore;