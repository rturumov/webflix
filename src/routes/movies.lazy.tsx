import { createLazyFileRoute } from '@tanstack/react-router'
import {t} from "i18next";
import {useTranslation} from "react-i18next";

export const Route = createLazyFileRoute('/movies')({
  component: Movies,
})

function Movies() {
    const { t } = useTranslation();
    const topMovies = [
        {
            title: "Дэдпул 3",
            description: "«Дэдпу́л и Росома́ха» — американский полнометражный художественный супергеройский фильм 2024 года, снятый по мотивам комиксов компании Marvel Comics о Дэдпуле и Росомахе. Снят компаниями Marvel Studios, Maximum Effort и 21 Laps Entertainment и распространяется Walt Disney Studios Motion Pictures.",
            image: "https://www.soyuz.ru/public/uploads/files/2/7628045/202309212039538137c82a05.jpg", // Замените на реальный URL изображения
        },
        {
            title: "Планета обезьян: Новое царство",
            description: "Плане́та обезья́н: Но́вое ца́рство» — американский научно-фантастический боевик режиссёра Уэса Болла и сценаристов Джоша Фридмана, Рика Джаффы, Аманды Сильвер и Патрика Эйсона. Сиквел картины «Планета обезьян: Война» 2017 года и четвёртая часть перезапущенной франшизы «Планета обезьян». В главной роли Оуэн Тиг.",
            image: "https://focus.ua/static/storage/thumbs/920x465/d/50/60410627-e1ea529ddefcc6f2629654443f15c50d.jpg?v=8804_1", // Замените на реальный URL изображения
        },
        {
            title: "Ребел-Ридж",
            description: "«Ребел-Ридж» — будущий американский триллер режиссёра Джереми Солнье по его же сценарию. Главные роли в фильме исполнили Аарон Пьер, Аннасофия Робб, Джеймс Бэдж Дэйл, Джеймс Кромвелл и Дон Джонсон. Премьера фильма на Netflix запланирована на 6 сентября 2024 года. ",
            image: "https://img.championat.ru/s/732x488/news/big/f/l/rebel-ridzh-2024-obzor-otzyv-vpechatleniya_17258792271243921511.jpg", // Замените на реальный URL изображения
        },
        {
            title: "Годзилла и Конг: Новая империя",
            description: "«Годзи́лла и Конг: Но́вая импе́рия» — американский фильм о монстрах режиссёра Адама Вингарда.",
            image: "https://ss.sport-express.ru/userfiles/materials/199/1996118/volga.jpg", // Замените на реальный URL изображения
        },
        {
            title: "Охотники за привидениями: Леденящий ужас",
            description: "«Охо́тники за привиде́ниями: Леденя́щий у́жас» — американский фантастический комедийный фильм, снятый Гилом Кинаном в соавторстве с Джейсоном Райтманом. Продолжение фильмов «Охотники за привидениями», «Охотники за привидениями 2» и «Охотники за привидениями: Наследники», четвёртая часть по хронологии и пятая по счёту.",
            image: "https://www.soyuz.ru/public/uploads/files/2/7633317/20240325121249a091cb6421.jpg", // Замените на реальный URL изображения
        },
    ];

    return <div id="top-movies" style={{padding: '12px 0'}}>
        <h2 className="text-center font-bold"
            style={{fontSize: '2rem', marginBottom: '24px'}}>{t('Топ фильмов 2024 года')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topMovies.map((movie, index) => (
                <div key={index} className="border rounded-md overflow-hidden shadow-lg">
                    <img src={movie.image} alt={movie.title} className="w-full h-48 object-cover"/>
                    <div className="p-4">
                        <h3 className="text-lg font-bold">{movie.title}</h3>
                        <p className="text-gray-600">{movie.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
}
export default Movies;