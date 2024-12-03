import { createFileRoute, Link } from '@tanstack/react-router';
import { useTranslation } from "react-i18next";
import {useCallback, useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {useFavorites} from "../../contexts/movieFavoritesContext.tsx";
import useMovieStore from "../../store/movieStore.tsx";
export const Route = createFileRoute('/movies/')({
    component: Index
});

function Index() {
  const { t } = useTranslation();
  const [showSortOptions, setShowSortOptions] = useState(false);
  const { toggleFavorite, isFavorite } = useFavorites();

  const {
    movies,
    isLoading,
    error,
    fetchMovies,
    filteredMovies,
    sortedMovies,
    searchQuery,
    setSearchQuery,
    setSortOption,
    updateFilteredMovies,
    updateSortedMovies,
    sortOption
  } = useMovieStore();

  const memoizedFetchMovies = useCallback(fetchMovies, [fetchMovies]);

  useEffect(() => {
    memoizedFetchMovies();
  }, [memoizedFetchMovies]);

  useEffect(() => {
    updateFilteredMovies(movies, searchQuery);
  }, [movies, searchQuery, updateFilteredMovies]);

  useEffect(() => {
    updateSortedMovies(filteredMovies, sortOption);
  }, [filteredMovies, sortOption, updateSortedMovies]);

  const handleSearch = useCallback(() => {
    setSearchQuery(searchQuery);
  }, [searchQuery, setSearchQuery]);

  const handleKeyDown = useCallback(
      (e) => {
        if (e.key === "Enter") {
          handleSearch();
        }
      },
      [handleSearch],
  );

  const handleShowSortOptions = useCallback(() => {
    setShowSortOptions((prev) => !prev);
  }, []);

  const handleSetSortOption = useCallback((option: string) => {
    setSortOption(option);
  }, [setSortOption]);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }


    return (
        <div id="top-movies" style={{ padding: "12px 0", paddingTop: "76px" }}>
            <h2 className="text-center font-bold text-3xl mb-6 text-gray-800">
                {t("Список фильмов")}
            </h2>

      <div className="mb-6 text-center pb-5">
        <div className="flex justify-center items-center gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t("Поиск фильмов...")}
            className="border-2 border-gray-300 rounded-md p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ width: "400px" }}
          />
          <button
            className="border-2 border-white rounded-md p-3 flex items-center bg-blue-500 text-white hover:bg-blue-600"
            onClick={handleSearch}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>

          <button
            className="mt-1 text-black-600 font-bold ml-4"
            onClick={handleShowSortOptions}
          >
            {t("Сортировать по:")}
          </button>
        </div>

        {showSortOptions && (
          <div className="flex flex-col items-center mt-2 ml-96 pl-24">
            <button
              className={`mt-1 text-blue-600 ${sortOption === "title" ? "font-bold" : ""}`}
              onClick={() => handleSetSortOption("title")}
            >
              {t("Названию")}
            </button>
            <button
              className={`mt-1 text-blue-600 ${sortOption === "rating" ? "font-bold" : ""}`}
              onClick={() => handleSetSortOption("rating")}
            >
              {t("Рейтингу")}
            </button>
          </div>
        )}
      </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedMovies.map((movie) => (
                    <div
                        key={movie.id}
                        className="border rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <img
                            src={movie.posterUrl}
                            alt={movie.title}
                            className="w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105"
                        />
                        <div className="p-4 bg-white">
                            <h3 className="text-lg font-bold text-gray-800">{movie.title}</h3>
                            <p className="text-gray-600 mt-2">{movie.description}</p>
                            <p className="font-bold mt-2 text-blue-600">
                                Рейтинг: {movie.rating}
                            </p>
                            <div className="flex items-center mt-2">
                                <button
                                    className={`text-white px-4 py-2 rounded-md ${
                                        isFavorite(movie.id)
                                            ? "bg-blue-700 hover:bg-blue-800"
                                            : "bg-red-500 hover:bg-red-600"
                                    }`}
                                    onClick={() => toggleFavorite(movie)}
                                >
                                    {isFavorite(movie.id)
                                        ? "Удалить из избранного"
                                        : "Добавить в избранное"}
                                </button>
                            </div>
                            <Link key={movie.id}
                                  to={`/movies/${movie.id}`}
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

export default Index;