import { createFileRoute } from '@tanstack/react-router'
import {Avatar} from "@mui/material";
import {useEffect, useState} from "react";
import {useFavorites} from "../../contexts/movieFavoritesContext.tsx";


export const Route = createFileRoute('/profile/')({
  component: Profile
})

function Profile(){
    const [setError] = useState(null);
    const [setIsLoading] = useState(true);
    const [profile, setProfile] = useState([]);
    const [editing, setEditing] = useState(false);
    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const { favorites, toggleFavorite, isFavorite} = useFavorites();

    const userId = localStorage.getItem('userId');

    useEffect(() => {
      const fetchUsers = async () => {
        try {
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
        setError('Пользователь не авторизован');
        setIsLoading(false);
      }
    }, [userId]);

    const toggleEditMode = () => setEditing(!editing);

    const handleSaveChanges = async () => {
        const updatedProfile = { ...profile, name: newName, email: newEmail };
        try {
            const response = await fetch(`http://localhost:5000/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedProfile), 
            });

            if (!response.ok) {
                throw new Error('Ошибка сохранения данных');
            }

            const data = await response.json();
            setProfile(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setEditing(false);
        }
    };

    return (
        <div style={{ padding: "100px" }}>
            <div style={{
                maxWidth: "600px",
                margin: "0 auto",
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "8px"
            }}>
                <h3 className="pb-1">Профиль пользователя:</h3>
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="lg" />
                <div>
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
                        <p>Имя: {profile.name}</p>
                    )}
                </div>
                <div>
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
                        <>Email: {profile.email}</>
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
                    <h2 style={{padding: '20px', textAlign:'center', fontSize:'30px'}}>Избранные фильмы</h2>
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
                                    <div className="p-3 bg-white">
                                        <h3 className="text-lg font-bold">{movie.title}</h3>
                                    </div>
                                    <div className="flex items-center justify-center mb-4">
                                        <button
                                            style={{
                                                padding: "8px 16px",
                                                backgroundColor: isFavorite(movie.id) ? "red" : "green",
                                                color: "white",
                                                borderRadius: "4px",
                                            }}
                                            onClick={() => toggleFavorite(movie)}
                                        >
                                            Удалить
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div>
                    <h2 style={{padding: '20px', textAlign:'center', fontSize:'30px'}}>Избранные сериалы</h2>
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
                                    <div className="p-3 bg-white">
                                        <h3 className="text-lg font-bold">{serial.title}</h3>
                                    </div>
                                    <div className="flex items-center justify-center mb-4">
                                        <button
                                            style={{
                                                padding: "8px 16px",
                                                backgroundColor: isFavorite(serial.id) ? "red" : "green",
                                                color: "white",
                                                borderRadius: "4px",
                                            }}
                                            onClick={() => toggleFavorite(serial)}
                                        >
                                            Удалить
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div>
                    <h2 style={{padding: '20px', textAlign:'center', fontSize:'30px'}}>Избранные мультфильмы</h2>
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
                                        <div className="p-3 bg-white">
                                            <h3 className="text-lg font-bold">{cartoon.title}</h3>
                                        </div>
                                        <div className="flex items-center justify-center mb-4">
                                            <button
                                                style={{
                                                    padding: "8px 16px",
                                                    backgroundColor: isFavorite(cartoon.id) ? "red" : "green",
                                                    color: "white",
                                                    borderRadius: "4px",
                                                }}
                                                onClick={() => toggleFavorite(cartoon)}
                                            >
                                                Удалить
                                            </button>
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