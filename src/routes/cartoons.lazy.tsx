import { createLazyFileRoute } from '@tanstack/react-router'
import {t} from "i18next";
import {useTranslation} from "react-i18next";

export const Route = createLazyFileRoute('/cartoons')({
  component: Cartoons,
})

function Cartoons() {
    const { t } = useTranslation();
    const topCartoons = [
        {
            title: "Головоломка 2",
            description: "Продолжение приключений Райлли и ее эмоций, которые сталкиваются с новыми вызовами и открытиями.",
            image: "https://bluraymania.com.ua/cdn/shop/articles/multfilm-golovolomka-2-preodolel-otmetku-v-900-mln-doll-701482.jpg?v=1719654314&width=2200", // Замените на реальный URL изображения
        },
        {
            title: "Муфаса: Король лев",
            description: "Приквел к легендарному фильму о Муфасе и его приключениях до событий 'Короля льва'.",
            image: "https://www.caravan.kz/wp-content/uploads/images/700702.jpg", // Замените на реальный URL изображения
        },
        {
            title: "Человек-паук: Через вселенные 3",
            description: "Третий фильм о Человеке-пауке, который исследует новые вселенные и сталкивается с новыми противниками.",
            image: "https://s1.stc.all.kpcdn.net/afisha/msk/wp-content/uploads/sites/5/2023/02/chelovek-pauk.jpg", // Замените на реальный URL изображения
        },
        {
            title: "Властелины вселенной",
            description: "Приключения героев, борющихся за спасение вселенной от злодеев.",
            image: "https://s1.stc.all.kpcdn.net/afisha/msk/wp-content/uploads/sites/5/2023/02/vlasteliny-vselennoj.jpg", // Замените на реальный URL изображения
        },
        {
            title: "Гадкий я 4",
            description: "Продолжение истории Гру и его забавных приключений с Миньонами.",
            image: "https://ss.sport-express.ru/userfiles/materials/202/2025021/large.jpg", // Замените на реальный URL изображения
        },
    ];
    return <div id="top-cartoons" style={{padding: '20px 0'}}>
        <h2 className="text-center font-bold"
            style={{fontSize: '2rem', marginBottom: '24px'}}>{t('Топ мультфильмов 2024 года')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topCartoons.map((cartoons, index) => (
                <div key={index} className="border rounded-md overflow-hidden shadow-lg">
                    <img src={cartoons.image} alt={cartoons.title} className="w-full h-48 object-cover"/>
                    <div className="p-4">
                        <h3 className="text-lg font-bold">{cartoons.title}</h3>
                        <p className="text-gray-600">{cartoons.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
}
export default Cartoons;