import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import {useEffect, useMemo, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

export const Route = createLazyFileRoute("/movies")({
  component: Movies,
});

function Movies() {
  const movies = [
    {
      id: 1,
      title: "Начало",
      posterUrl:
        "https://m.media-amazon.com/images/S/pv-target-images/e826ebbcc692b4d19059d24125cf23699067ab621c979612fd0ca11ab42a65cb._SX1080_FMjpg_.jpg",
      description:
        "Опытному вору предоставляется шанс получить прощение за свои прошлые преступления, если он сможет внедрить идею в подсознание человека.",
      rating: 8.8,
    },
    {
      id: 2,
      title: "Темный рыцарь",
      posterUrl:
        "https://assets.gq.ru/photos/5d9f51daae00fb00090c1d73/16:9/w_2560%2Cc_limit/big.jpg",
      description:
        "Бэтмен повышает ставки в своей войне с преступностью, столкнувшись лицом к лицу с Джокером, криминальным авторитетом.",
      rating: 9.0,
    },
    {
      id: 3,
      title: "Интерстеллар",
      posterUrl:
        "https://www.film.ru/sites/default/files/filefield_paths/propazha1.jpg",
      description:
        "Команда исследователей путешествует через космическую червоточину в попытке обеспечить выживание человечества.",
      rating: 8.6,
    },
    {
      id: 4,
      title: "Матрица",
      posterUrl:
        "https://kuban24.tv/wp-content/uploads/2019/09/o4QovnePfetHclyVcUbd9t3Sqyi.jpg",
      description:
        "Хакер обнаруживает тревожную правду о реальности и своей роли в войне против ее контролеров.",
      rating: 8.7,
    },
    {
      id: 5,
      title: "Аватар",
      posterUrl:
        "https://cdnn21.img.ria.ru/images/156266/34/1562663413_0:0:1920:1080_1920x0_80_0_0_50f346b88c6fbd41f9cfeb6d44d474d8.jpg",
      description:
        "Морской пехотинец с параличом нижних конечностей отправляется на луну Пандора с заданием, но разрывается между выполнением приказов и защитой инопланетной цивилизации.",
      rating: 7.9,
    },
    {
      id: 6,
      title: "Властелин колец: Возвращение короля",
      posterUrl:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
      description:
        "Фродо и его спутники продолжают свою миссию по уничтожению Кольца Всевластия в последней части великой эпопеи.",
      rating: 9.1,
    },
    {
      id: 7,
      title: "Гладиатор",
      posterUrl:
        "https://0d314c86-f76b-45cc-874e-45816116a667.selcdn.net/728384a9-1f0f-4446-b9d9-725ac7f2cd42.jpg",
      description:
        "Римский генерал Максимус, ставший рабом, жаждет мести после убийства его семьи и предательства императора.",
      rating: 8.5,
    },
    {
      id: 8,
      title: "Бойцовский клуб",
      posterUrl:
        "https://mma.metaratings.ru/storage/images/1c/f6/1cf6c9af3b3bb018ceea8eb70c0fbc76.jpg",
      description:
        "Жизнь офисного работника переворачивается после знакомства с таинственным Тайлером Дёрденом, основателем подпольного бойцовского клуба.",
      rating: 8.8,
    },
    {
      id: 9,
      title: "Форрест Гамп",
      posterUrl:
        "https://api.kinoart.ru/storage/post/866/regular_detail_picture-7e3e825df53e4db9211ffd4fb5cbb13c.jpg",
      description:
        "История жизни Форреста Гампа, человека с ограниченными умственными способностями, который переживает множество исторических событий.",
      rating: 8.8,
    },
    {
      id: 10,
      title: "Крёстный отец",
      posterUrl:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      description:
        "В центре сюжета — история семьи Корлеоне и превращение Майкла Корлеоне в главу преступного клана.",
      rating: 9.2,
    },
    {
      id: 11,
      title: "Криминальное чтиво",
      posterUrl:
        "https://api.kinoart.ru/storage/post/960/regular_detail_picture-ab15d73582f1eea00b0c3e8bd030ecaa.jpg",
      description:
        "Переплетение историй двух наёмных убийц, боксера, жены гангстера и пары грабителей, рассказанных в нелинейном порядке.",
      rating: 8.9,
    },
    {
      id: 12,
      title: "Список Шиндлера",
      posterUrl:
        "https://img.gazeta.ru/files3/320/17115320/upload-orig-10-pic_32ratio_1200x800-1200x800-1826.jpg",
      description:
        "Во время Второй мировой войны немецкий промышленник спасает сотни евреев, устраивая их на работу на свой завод.",
      rating: 9.0,
    },
  ];

  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredQuery, setFilteredQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sortOption, setSortOption] = useState("default");
  const [showSortOptions, setShowSortOptions] = useState(false);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
        movie.title.toLowerCase().includes(filteredQuery.toLowerCase())
    );
  }, [movies, filteredQuery]);

  const sortedMovies = useMemo(() => {
    return [...filteredMovies].sort((a, b) => {
      if (sortOption === "title") {
        return a.title.localeCompare(b.title);
      } else if (sortOption === "rating") {
        return b.rating - a.rating;
      }
      return 0;
    });
  }, [filteredMovies, sortOption]);

  const handleSearch = () => {
    setFilteredQuery(searchQuery);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const openModal = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

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
              onChange={(e) => setSearchQuery(e.target.value)} // Изменяем только состояние поля ввода
              onKeyDown={handleKeyDown}
              placeholder={t('Поиск фильмов...')}
              className="border-2 border-gray-300 rounded-md p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{width: '400px'}}
          />
          <button
              className="border-2 border-white rounded-md p-3 flex items-center bg-blue-500 text-white hover:bg-blue-600"
              onClick={handleSearch} // Поиск срабатывает при нажатии на кнопку
          >
            <FontAwesomeIcon icon={faMagnifyingGlass}/> {/* Иконка поиска */}
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
                <button
                    className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
                onClick={() => openModal(movie)}
              >
                {t("Подробнее")}
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white text-black p-6 rounded-md shadow-lg w-11/12 md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">{selectedMovie.title}</h2>
            <img
              src={selectedMovie.posterUrl}
              alt={selectedMovie.title}
              className="mb-4 rounded-md"
            />
            <p>{selectedMovie.description}</p>
            <p className="font-bold mt-2">Рейтинг: {selectedMovie.rating}</p>
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

export default Movies;
