import { createLazyFileRoute } from "@tanstack/react-router";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { useState, useMemo} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

export const Route = createLazyFileRoute("/cartoons")({
  component: Cartoons,
});

function Cartoons() {
  const cartoons = [
    {
      id: 1,
      title: "Приключения Паддингтона",
      description:
        "История о забавном медвежонке и его приключениях в Лондоне.",
      rating: "8.0",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/e/eb/Paddington_Poster.jpg", // Paddington
    },
    {
      id: 2,
      title: "Смешарики",
      description:
        "Приключения забавных круглых персонажей в мире, полном смеха.",
      rating: "7.5",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/ru/3/3a/%D0%A1%D0%BC%D0%B5%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B8.png", // Смешарики
    },
    {
      id: 3,
      title: "Маша и Медведь",
      description:
        "История о маленькой девочке Маше и ее лучшем друге, Медведе.",
      rating: "9.0",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/ru/5/52/Masha_and_the_Bear_logo.png", // Маша и Медведь
    },
    {
      id: 4,
      title: "Три богатыря",
      description:
        "Приключения трех богатырей, защищающих свою родину от врагов.",
      rating: "7.0",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/ru/5/5e/Three_Heroes.jpg", // Три богатыря
    },
    {
      id: 5,
      title: "Зверопой",
      description:
        "Музыкальная комедия о животных, которые собираются на музыкальный конкурс.",
      rating: "8.1",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/4f/Sing_%282016_film%29.png", // Зверопой
    },
    {
      id: 6,
      title: "Кунг-фу Панда",
      description:
        "История о ленивом панде, который становится мастером кунг-фу.",
      rating: "7.6",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/0/0f/Kung_Fu_Panda_poster.jpg", // Кунг-фу Панда
    },
    {
      id: 7,
      title: "Вверх",
      description:
        "Старик Карл и мальчик Рассел отправляются в удивительное путешествие.",
      rating: "8.2",
      posterUrl: "https://upload.wikimedia.org/wikipedia/en/0/06/Up_poster.jpg", // Вверх
    },
    {
      id: 8,
      title: "Рапунцель: Запутанная история",
      description:
        "Приключения принцессы с длинными волосами, которая мечтает о свободе.",
      rating: "7.7",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/8/87/Tangled_poster.jpg", // Рапунцель: Запутанная история
    },
    {
      id: 9,
      title: "Лего. Фильм",
      description:
        "Приключения обычной лего-фигурки, которая должна спасти мир.",
      rating: "7.8",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/c/c9/The_Lego_Movie_poster.jpg", // Лего. Фильм
    },
    {
      id: 10,
      title: "Как приручить дракона",
      description: "История о мальчике, который находит общий язык с драконом.",
      rating: "8.1",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/3/3e/How_to_Train_Your_Dragon_poster.jpg", // Как приручить дракона
    },
    {
      id: 11,
      title: "Покахонтас",
      description: "История любви индейской принцессы и английского колониста.",
      rating: "6.7",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/a/a2/Pocahontas_Disney.jpg", // Покахонтас
    },
    {
      id: 12,
      title: "Аладдин",
      description:
        "Сказочная история о юноше, который находит волшебную лампу.",
      rating: "8.0",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/5/58/Aladdin_disney.png", // Аладдин
    },
    {
      id: 13,
      title: "Суперсемейка",
      description:
        "Приключения супергеройской семьи, пытающейся вести обычную жизнь.",
      rating: "8.0",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/7/74/The_Incredibles_poster.jpg", // Суперсемейка
    },
    {
      id: 14,
      title: "Снежная королева",
      description: "Сказка о дружбе и смелости в борьбе со злом.",
      rating: "6.3",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/ru/1/1c/The_Snow_Queen_poster.jpg", // Снежная королева
    },
    {
      id: 15,
      title: "Гадкий я",
      description:
        "История о злодее, который меняет свою жизнь после встречи с тремя сиротками.",
      rating: "7.6",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/9/9f/Despicable_Me_poster.jpg", // Гадкий я
    },
  ];

  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredQuery, setFilteredQuery] = useState("");
  const [selectedCartoon, setSelectedCartoon] = useState(null);
  const [sortOption, setSortOption] = useState("default");
  const [showSortOptions, setShowSortOptions] = useState(false);

  const filteredCartoons = useMemo(() => {
    return cartoons.filter((cartoon) =>
        cartoon.title.toLowerCase().includes(filteredQuery.toLowerCase())
    );
  }, [cartoons, filteredQuery]);

  // Сортировка мультфильмов
  const sortedCartoons = useMemo(() => {
    return [...filteredCartoons].sort((a, b) => {
      if (sortOption === "title") {
        return a.title.localeCompare(b.title);
      } else if (sortOption === "rating") {
        return b.rating - a.rating;
      }
      return 0;
    });
  }, [filteredCartoons, sortOption]);

  const handleSearch = () => {
    setFilteredQuery(searchQuery);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const openModal = (cartoon) => {
    setSelectedCartoon(cartoon);
  };

  const closeModal = () => {
    setSelectedCartoon(null);
  };

  return (
      <div id="top-cartoons" style={{padding: "12px 0", paddingTop: "76px"}}>
        <h2 className="text-center font-bold text-3xl mb-6 text-gray-800">
          {t("Список мультфильмов")}
        </h2>

        <div className="mb-6 text-center pb-5 ">
          <div className="flex justify-center items-center gap-2">
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t('Поиск мультфильмов...')}
                className="border-2 border-gray-300 rounded-md p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{width: '400px'}}
            />
            <button
                className="border-2 border-white rounded-md p-3 flex items-center bg-blue-500 text-white hover:bg-blue-600"
                onClick={handleSearch}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass}/>
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
                    className={`mt-1 text-blue-600 ${sortOption === 'title' ? 'font-bold' : ''}`}
                    onClick={() => setSortOption('title')}
                >
                  {t("Названию")}
                </button>
                <button
                    className={`mt-1 text-blue-600 ${sortOption === 'rating' ? 'font-bold' : ''}`}
                    onClick={() => setSortOption('rating')}
                >
                  {t("Рейтингу")}
                </button>
              </div>
          )}
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCartoons.map((cartoon) => (
              <div
                  key={cartoon.id}
                  className="border rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                    src={cartoon.posterUrl}
                    alt={cartoon.title}
                    className="w-full h-72 object-cover transition-transform duration-300 transform hover:scale-105"
                />
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-bold text-gray-800">
                    {cartoon.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{cartoon.description}</p>
                  <p className="font-bold mt-2 text-blue-600">
                    Рейтинг: {cartoon.rating}
                  </p>
                  <button
                      className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
                      onClick={() => openModal(cartoon)}
                  >
                    {t("Подробнее")}
                  </button>
                </div>
              </div>
          ))}
        </div>

        {selectedCartoon && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white text-black p-6 rounded-md shadow-lg w-11/12 md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">{selectedCartoon.title}</h2>
                <img
                    src={selectedCartoon.posterUrl}
                    alt={selectedCartoon.title}
                    className="mb-4 rounded-md"
                />
                <p>{selectedCartoon.description}</p>
                <p className="font-bold mt-2">Рейтинг: {selectedCartoon.rating}</p>
                <button
                    onClick={closeModal}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                  {t("Закрыть")}
                </button>
              </div>
            </div>
        )}
      </div>
  );
}

export default Cartoons;
