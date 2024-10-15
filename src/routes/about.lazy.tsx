import { createLazyFileRoute } from '@tanstack/react-router'
import {t} from "i18next";
import {useTranslation} from "react-i18next";
import Movies from "./movies.lazy.tsx";

export const Route = createLazyFileRoute('/about')({
    component: About,
})

function About() {
    const { t } = useTranslation();
    return <div style={{paddingTop: '30px', paddingLeft: "30px", fontSize: "2rem", paddingBottom: "30px"}}
                className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 p-8 rounded-lg shadow-lg mt-20 p-8">
        <h1 className="text-4xl font-extrabold text-center mb-6">
            О нас
        </h1>
        <p className="text-lg leading-relaxed mb-6">
            Добро пожаловать на нашу платформу, посвященную миру фильмов и сериалов! Мы стремимся предоставить
            нашим пользователям самое актуальное и интересное в мире кино и телевидения.
        </p>
        <div className="bg-white p-6 rounded-lg text-gray-800 shadow-md mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">
                Что мы предлагаем:
            </h2>
            <ul className="list-disc list-inside space-y-3">
                <li>
                    <strong>Топовые фильмы 2024 года</strong>: В нашем каталоге вы найдете такие ожидаемые
                    фильмы, как <em>«Дэдпул 3»</em>, <em>«Планета обезьян: Новое царство»</em> и <em>«Годзилла и
                    Конг: Новая империя»</em>.
                </li>
                <li>
                    <strong>Популярные сериалы</strong>: Наслаждайтесь просмотром таких новинок,
                    как <em>«Рипли»</em>, <em>«Олененок»</em> и <em>«Сёгун»</em>, а также многими другими
                    захватывающими сериалами.
                </li>
                <li>
                    <strong>Лучшие мультфильмы</strong>: Откройте для себя захватывающие семейные мультфильмы,
                    такие как <em>«Головоломка 2»</em>, <em>«Муфаса: Король лев»</em> и <em>«Человек-паук: Через
                    вселенные 3»</em>.
                </li>
            </ul>
        </div>
        <p className="text-lg leading-relaxed mb-6">
            Мы постоянно обновляем нашу базу данных, чтобы вы всегда могли находить самые свежие и интересные
            новинки в мире кино.
        </p>
        <p className="text-lg leading-relaxed">
            Наша команда — это преданные кинолюбители, которые стремятся сделать ваш опыт максимально удобным и
            приятным. Благодарим вас за выбор нашей платформы!
        </p>
        <div className="text-center mt-8">
            <button
                className="bg-gray-700 hover:bg-gray-600 text-white text-2xl font-bold py-2 px-4 rounded-full shadow-lg transition duration-300">
                Узнать больше
            </button>
        </div>
    </div>
}
export default About;