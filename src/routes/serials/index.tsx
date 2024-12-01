import {createFileRoute, Link} from '@tanstack/react-router'
import {useTranslation} from "react-i18next";
import {useEffect, useMemo, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

export const Route = createFileRoute('/serials/')({
  component: Serials
})

function Serials() {

    const series = [
        {
            id: 1,
            title: "Игра престолов",
            description: "Эпическая фэнтези-серия о борьбе за трон.",
            rating: "9.3",
            posterUrl:
                "https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/season-8/posters/game-of-thrones-2.jpg",
        },
        {
            id: 2,
            title: "Друзья",
            description: "Комедия о шести друзьях, живущих в Нью-Йорке.",
            rating: "8.9",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/en/6/67/Friends_logo.svg",
        },
        {
            id: 3,
            title: "Во все тяжкие",
            description:
                "История учителя химии, который становится производителем метамфетамина.",
            rating: "9.5",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png",
        },
        {
            id: 4,
            title: "Черное зеркало",
            description: "Антология о влиянии технологий на современное общество.",
            rating: "8.8",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Mirror_logo.png",
        },
        {
            id: 5,
            title: "Странные дела",
            description: "Группа детей расследует исчезновение своего друга.",
            rating: "8.7",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/en/3/3a/Stranger_Things_logo.png",
        },
        {
            id: 6,
            title: "Мандалорец",
            description: "Приключения охотника за головами в мире Звездных войн.",
            rating: "8.8",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/en/0/0c/The_Mandalorian_%28TV_series%29.png",
        },
        {
            id: 7,
            title: "Шерлок",
            description: "Современная адаптация истории о Шерлоке Холмсе.",
            rating: "9.1",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/en/8/8e/Sherlock_logo.jpg",
        },
        {
            id: 8,
            title: "Фарго",
            description: "Антология криминальных историй, вдохновленных фильмом.",
            rating: "8.9",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/en/b/bb/Fargo_Season_1.png",
        },
        {
            id: 9,
            title: "Теория большого взрыва",
            description: "Комедия о группе ученых и их дружбе.",
            rating: "8.1",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/en/7/7b/BigBangTheory.jpg",
        },
        {
            id: 10,
            title: "Пацаны",
            description: "Сатирический взгляд на супергероев и их темные стороны.",
            rating: "8.7",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/en/1/16/The_Boys_%282019%29.png",
        },
        {
            id: 11,
            title: "Убивая Еву",
            description:
                "Криминальная драма о женщинах, играющих в смертельную игру.",
            rating: "8.3",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/en/3/38/Killing_Eve.png",
        },
        {
            id: 12,
            title: "Мир Дикого Запада",
            description:
                "Фантастическая история о парке аттракционов с искусственными существами.",
            rating: "8.5",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/en/0/04/Westworld_title_card.png",
        },
        {
            id: 13,
            title: "Агенты Щ.И.Т.",
            description: "Команда агентов защищает мир от угроз.",
            rating: "7.5",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/en/a/a2/Agents_of_S.H.I.E.L.D._season_1_poster.jpg",
        },
        {
            id: 14,
            title: "Доктор Кто",
            description:
                "Приключения Доктора, инопланетянина, путешествующего во времени.",
            rating: "8.6",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/en/6/6c/Doctor_Who_logo.svg",
        },
        {
            id: 15,
            title: "Офис",
            description: "Комедия о жизни работников офиса в формате мокьюментари.",
            rating: "8.8",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/en/4/4f/The_Office_US_logo.png",
        },
    ];

    const { t } = useTranslation();
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredQuery, setFilteredQuery] = useState("");
    const [selectedSeries, setSelectedSeries] = useState(null);
    const [sortOption, setSortOption] = useState("default");
    const [showSortOptions, setShowSortOptions] = useState(false);

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

