import {createFileRoute, Link} from '@tanstack/react-router'
import {useTranslation} from "react-i18next";
import {useEffect, useMemo, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {useFavorites} from "../../contexts/movieFavoritesContext.tsx";

export const Route = createFileRoute('/serials/')({
  component: Serials
})

function Serials() {


    const { t } = useTranslation();
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredQuery, setFilteredQuery] = useState("");
    const [selectedSeries, setSelectedSeries] = useState(null);
    const [sortOption, setSortOption] = useState("default");
    const [showSortOptions, setShowSortOptions] = useState(false);
    const [series, setSerials] = useState([])
    const { favorites, toggleFavorite, isFavorite } = useFavorites();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSerials = async () => {
            try {
                const response = await fetch('http://localhost:5000/serials');
                if (!response.ok) {
                    throw new Error('Ошибка загрузки фильмов');
                }
                const data = await response.json();
                setSerials(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSerials();
    }, []);

    const filteredSeries = useMemo(() => {
        return series.filter((s) =>
            s.title.toLowerCase().includes(filteredQuery.toLowerCase()),
        );
    }, [series, filteredQuery]);

    const sortedSeries = useMemo(() => {
        return [...filteredSeries].sort((a, b) => {
            if (sortOption === "title") {
                return a.title.localeCompare(b.title);
            } else if (sortOption === "rating") {
                return b.rating - a.rating;
            }
            return 0;
        });
    }, [filteredSeries, sortOption]);

    useEffect(() => {
        console.log("Сортировка изменена:", sortOption);
    }, [sortOption]);

    const handleSearch = () => {
        setFilteredQuery(searchQuery);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const openModal = (series) => {
        setSelectedSeries(series);
    };

    const closeModal = () => {
        setSelectedSeries(null);
    };
    const handleLikeClick = (serialId) => {
        setSerials((prevSerials) => {
            return prevSerials.map((serial) => {
                if (serial.id === serialId) {
                    const updatedSerial = {
                        ...serial,
                        likes: serial.likedByUser ? serial.likes - 1 : serial.likes + 1,
                        likedByUser: !serial.likedByUser,
                    };

                    // Добавляем или удаляем из контекста избранное
                    if (updatedSerial.likedByUser) {
                        setFavorites((prevFavorites) => [...prevFavorites, updatedSerial]);
                    } else {
                        setFavorites((prevFavorites) =>
                            prevFavorites.filter((fav) => fav.id !== serialId)
                        );
                    }

                    return updatedSerial;
                }
                return serial;
            });
        });
    };
    return (
        <div id="series-list" style={{ padding: "12px 0", paddingTop: "76px" }}>
            <h2 className="text-center font-bold text-3xl mb-6 text-gray-800">
                Список cериалов
            </h2>

            <div className="mb-4 text-center pb-5">
                <div className="flex justify-center items-center gap-2">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} // Изменяем только состояние поля ввода
                        onKeyDown={handleKeyDown}
                        placeholder={t("Поиск сериалов...")}
                        className="border-2 border-gray-300 rounded-md p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        style={{ width: "400px" }}
                    />
                    <button
                        className="border-2 border-white rounded-md p-3 flex items-center bg-blue-500 text-white hover:bg-blue-600"
                        onClick={handleSearch} // Поиск срабатывает при нажатии на кнопку
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} /> {/* Иконка поиска */}
                    </button>

                    <button
                        className="mt-1 text-black-600 font-bold ml-4"
                        onClick={() => setShowSortOptions(!showSortOptions)}
                    >
                        {t("Сортировать по:")}
                    </button>
                </div>

                {showSortOptions && (
                    <div className="flex flex-col items-center mt-2 ml-96 pl-24">
                        <button
                            className={`mt-1 text-blue-600 ${sortOption === "title" ? "font-bold" : ""}`}
                            onClick={() => setSortOption("title")}
                        >
                            {t("Названию")}
                        </button>
                        <button
                            className={`mt-1 text-blue-600 ${sortOption === "rating" ? "font-bold" : ""}`}
                            onClick={() => setSortOption("rating")}
                        >
                            {t("Рейтингу")}
                        </button>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedSeries.map((series) => (
                    <div
                        key={series.id}
                        className="border rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <img
                            src={series.posterUrl}
                            alt={series.title}
                            className="w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105"
                        />
                        <div className="p-4 bg-white">
                            <h3 className="text-lg font-bold text-gray-800">
                                {series.title}
                            </h3>
                            <p className="text-gray-600 mt-2">{series.description}</p>
                            <p className="font-bold mt-2 text-blue-600">
                                Рейтинг: {series.rating}
                            </p>
                            <div className="flex items-center mt-2">
                                <button
                                    className={`text-white px-4 py-2 rounded-md ${
                                        isFavorite(series.id)
                                            ? "bg-blue-700 hover:bg-blue-800"
                                            : "bg-red-500 hover:bg-red-600"
                                    }`}
                                    onClick={() => toggleFavorite(series)}
                                >
                                    {isFavorite(series.id)
                                        ? "Удалить из избранного"
                                        : "Добавить в избранное"}
                                </button>
                            </div>
                            <Link key={series.id}
                                  to={`/serials/${series.id}`}
                                  className="mt-3 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
                            >
                                Подробнее
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Serials;

