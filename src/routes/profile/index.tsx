import { createFileRoute } from '@tanstack/react-router'
import {Avatar} from "@mui/material";
import {useEffect, useState} from "react";
import {useFavorites} from "../../contexts/movieFavoritesContext.tsx";


export const Route = createFileRoute('/profile/')({
  component: Profile
})

function Profile(){
    const { favorites } = useFavorites();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [profile, setProfile] = useState([]);
    const [editing, setEditing] = useState(false);
    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");

    const userId = localStorage.getItem('userId');

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          // Используем userId для получения данных текущего пользователя
          const response = await fetch(`http://localhost:5000/users/${userId}`);
          if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
          }
          const data = await response.json();
          console.log('Загруженные данные:', data);
          setProfile(data);
          setNewName(data.name);
          setNewEmail(data.email);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };
  
      if (userId) {
        fetchUsers();
      } else {
        // Обработка случая, когда пользователь не авторизован
        setError('Пользователь не авторизован');
        setIsLoading(false);
      }
    }, [userId]);

    // Функция для переключения режима редактирования
    const toggleEditMode = () => setEditing(!editing);

    // Функция для сохранения изменений
    const handleSaveChanges = async () => {
        const updatedProfile = { ...profile, name: newName, email: newEmail };
        try {
            const response = await fetch(`http://localhost:5000/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedProfile), // Отправляем обновленные данные
            });

            if (!response.ok) {
                throw new Error('Ошибка сохранения данных');
            }

            // Если сохранение прошло успешно, обновляем локальное состояние
            const data = await response.json();
            setProfile(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setEditing(false);
        }
    };

    const movies = favorites.filter((item) => item.type === 'movie');
    const series = favorites.filter((item) => item.type === 'serial');

    return (
        <div style={{ padding: "100px" }}>
            <div style={{
                maxWidth: "600px",
                margin: "0 auto",
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "8px"
            }}>
                <h3>Профиль пользователя</h3>
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="lg"/>
                <div>
                    <h4>Имя:</h4>
                    {editing ? (
                        <input
                            type="text"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            placeholder="Введите новое имя"
                            style={{
                                width: "100%",
                                padding: "8px",
                                marginBottom: "10px",
                                borderRadius: "4px",
                                border: "1px solid #ccc"
                            }}
                        />
                    ) : (
                        <p>{profile.name}</p>
                    )}
                </div>
                <div>
                    <h4>Email:</h4>
                    {editing ? (
                        <input
                            type="email"
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                            placeholder="Введите новый email"
                            style={{
                                width: "100%",
                                padding: "8px",
                                marginBottom: "10px",
                                borderRadius: "4px",
                                border: "1px solid #ccc"
                            }}
                        />
                    ) : (
                        <p>{profile.email}</p>
                    )}
                </div>

                <div style={{display: "flex", justifyContent: "space-between", marginTop: "20px"}}>
                    <button onClick={toggleEditMode} style={{
                        padding: "10px 20px",
                        cursor: "pointer",
                        border: "1px solid #ccc",
                        borderRadius: "4px"
                    }}>
                        {editing ? "Отменить" : "Редактировать"}
                    </button>
                    {editing && (
                        <button onClick={handleSaveChanges} style={{
                            padding: "10px 20px",
                            cursor: "pointer",
                            border: "1px solid #ccc",
                            borderRadius: "4px"
                        }}>
                            Сохранить изменения
                        </button>
                    )}
                </div>
                <div>
                    <h2 style={{padding: '20px'}}>Избранные фильмы</h2>
                    {favorites.filter(item => item.type === "movie").length === 0 ? (
                        <p>У вас нет избранных фильмов.</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {favorites.filter(item => item.type === "movie").map((movie, index) => (
                                <div key={`movie-${movie.id}-${index}`}
                                     className="border rounded-md overflow-hidden shadow-lg">
                                    <img
                                        src={movie.posterUrl}
                                        alt={movie.title}
                                        className="w-full h-72 object-cover"
                                    />
                                    <div className="p-4 bg-white">
                                        <h3 className="text-lg font-bold">{movie.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div>
                    <h2 style={{padding: '20px'}}>Избранные сериалы</h2>
                    {favorites.filter(item => item.type === "serial").length === 0 ? (
                        <p>У вас нет избранных сериалов.</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {favorites.filter(item => item.type === "serial").map((serial, index) => (
                                <div key={`serial-${serial.id}-${index}`}
                                     className="border rounded-md overflow-hidden shadow-lg">
                                    <img
                                        src={serial.posterUrl}
                                        alt={serial.title}
                                        className="w-full h-72 object-cover"
                                    />
                                    <div className="p-4 bg-white">
                                        <h3 className="text-lg font-bold">{serial.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div>
                    <h2 style={{padding: '20px'}}>Избранные мультфильмы</h2>
                    {favorites.filter(item => item.type === "cartoon").length === 0 ? (
                        <p>У вас нет избранных мультфильмов.</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {favorites
                                .filter(item => item.type === "cartoon")
                                .map((cartoon) => (
                                    <div key={`cartoon-${cartoon.id}`}
                                         className="border rounded-md overflow-hidden shadow-lg">
                                        <img
                                            src={cartoon.posterUrl}
                                            alt={cartoon.title}
                                            className="w-full h-72 object-cover"
                                        />
                                        <div className="p-4 bg-white">
                                            <h3 className="text-lg font-bold">{cartoon.title}</h3>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

export default Profile;