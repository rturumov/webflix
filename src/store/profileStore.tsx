// src/store/profileStore.js
import {create} from 'zustand';
import axios from "axios";

interface Profile {
    id: number;
    name: string;
    email: string;
}

const useProfileStore = create((set) => ({
    profile: {} as Profile,
    isLoading: true,
    error: null,
    newName: "",
    newEmail: "",
    setNewName: (name: string) => set({ newName: name }),
    setNewEmail: (email: string) => set({ newEmail: email }),
    fetchProfile: async (userId: string) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.get(`http://localhost:5000/users/${userId}`);
            set({ profile: response.data,
                newName: response.data.name,
                newEmail: response.data.email });
        } catch (error) {
            set({ error: error as Error });
        } finally {
            set({ isLoading: false });
        }
    },
    updateProfile: async (userId: string, updatedProfile: Profile) => {
        try {
            const response = await axios.put(`http://localhost:5000/users/${userId}`, updatedProfile);
            set({ profile: response.data });
            return response.data;
        } catch (error) {
            set({ error: error as Error });
            throw error;
        }
    },
}));

export default useProfileStore;