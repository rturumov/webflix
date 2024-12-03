import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from "react";
import axios from "axios";

export interface FavoriteItem {
    id: number;
    title: string;
    description: string;
    posterUrl: string;
    rating: number;
    likes: number;
}

interface FavoritesContextType {
    favorites: FavoriteItem[];
    toggleFavorite: (movie: FavoriteItem) => void;
    isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

    const postUrl = useMemo(() => "http://localhost:5000/favorites", []);
    const deleteUrl = useCallback((id: number) => `http://localhost:5000/favorites/${id}`, []);

    const toggleFavorite = useCallback(async (movie: FavoriteItem) => {
        try {
            const isAlreadyFavorite = favorites.some((fav) => fav.id === movie.id);

            if (isAlreadyFavorite) {
                console.log("Удаляем фильм с ID:", movie.id);
                console.log(`URL запроса: ${deleteUrl(movie.id)}`);
                await axios.delete(deleteUrl(movie.id));
                setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.id !== movie.id));
            } else {
                console.log("Добавляем фильм с ID:", movie.id);
                console.log(`URL запроса: ${postUrl}`);
                await axios.post(postUrl, movie);
                setFavorites((prevFavorites) => [...prevFavorites, movie]);
            }
             // push notification
             // if ('Notification' in window && 'serviceWorker' in navigator) {
              //     const permission = await Notification.requestPermission();
              //     if (permission === 'granted') {
              //         const registration = await navigator.serviceWorker.ready;
              //         registration.showNotification('Added to Favorites', {
              //             body: `You added "${movie.title}" to your favorites.`,
              //             icon: '/icon.png', // Path to your notification icon
              //             tag: `add-to-favorite-${movie.id}`, // Unique tag to prevent duplicate notifications
              //         });
              //     }
              // }
        } catch (error) {
            console.error("Ошибка при обновлении избранного:", error);
        }
    }, [favorites, deleteUrl, postUrl]);

    const isFavorite = useCallback((id: number) => {
        return favorites.some((fav) => fav.id === id);
    }, [favorites]);

    useEffect(() => {
        console.log("Список избранного обновлен:", favorites);
    }, [favorites]);

    const contextValue = useMemo(() => ({
        favorites,
        toggleFavorite,
        isFavorite
    }), [favorites, toggleFavorite, isFavorite]);

    return (
        <FavoritesContext.Provider value={contextValue}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error("useFavorites должен использоваться внутри FavoritesProvider");
    }
    return context;
};
