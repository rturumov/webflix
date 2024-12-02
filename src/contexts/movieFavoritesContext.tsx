import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Тип для элемента избранного
export interface FavoriteItem {
    id: number;
    title: string;
    description: string;
    posterUrl: string;
    rating: number;
    likes: number;
}

// Тип контекста
interface FavoritesContextType {
    favorites: FavoriteItem[];
    toggleFavorite: (movie: FavoriteItem) => void;
    isFavorite: (id: number) => boolean;
}

// Создаем контекст
const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

// Провайдер
export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

    // Загружаем избранные фильмы с бэкенда
    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const response = await axios.get("http://localhost:5000/favorites"); // Замените на ваш URL
                setFavorites(response.data);
            } catch (error) {
                console.error("Ошибка при загрузке избранного:", error);
            }
        };

        fetchFavorites();
    }, []);

    // Функция для добавления/удаления фильма из избранного
    const toggleFavorite = async (movie: FavoriteItem) => {
        try {
            const isAlreadyFavorite = favorites.some((fav) => fav.id === movie.id);

            if (isAlreadyFavorite) {
                // Удаляем фильм из избранного
                console.log("Удаляем фильм с ID:", movie.id);
                console.log(`URL запроса: http://localhost:5000/favorites/${movie.id}`);
                await axios.delete(`http://localhost:5000/favorites/${movie.id}`);
                setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.id !== movie.id));
            } else {
                // Добавляем фильм в избранное
                await axios.post("http://localhost:5000/favorites", movie);
                setFavorites((prevFavorites) => [...prevFavorites, movie]);
            }
        } catch (error) {
            console.error("Ошибка при обновлении избранного:", error);
        }
    };

    // Проверяем, находится ли фильм в избранном
    const isFavorite = (id: number) => {
        return favorites.some((fav) => fav.id === id);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

// Хук для использования контекста
export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error("useFavorites должен использоваться внутри FavoritesProvider");
    }
    return context;
};
