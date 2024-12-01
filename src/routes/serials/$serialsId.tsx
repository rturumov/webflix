import {createFileRoute, Link} from '@tanstack/react-router'
import {Box, CardMedia, Stack, Typography} from "@mui/material";
import series from "./index.tsx";

export const Route = createFileRoute('/serials/$serialsId')({
  component: SerialsId
})

function SerialsId(){
    console.log("MoviesId component rendered");
    const { serialsId } = Route.useParams();
    console.log("ID from params:", serialsId);
    if (!serialsId || serialsId === "undefined") {
        return <div>Некорректный ID фильма</div>;
    }

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
    ]

    const selectedMedia = series.find((serial) => serial.id === parseInt(serialsId));

    if (!selectedMedia) {
        return <Text>Фильм не найден</Text>;
    }
    console.log("useParams:", serialsId);
    console.log("selectedMedia:", selectedMedia);
    return (
        <Box padding="80px">
            <Typography variant="h4" gutterBottom>
                {selectedMedia.title}
            </Typography>
            <CardMedia
                component="img"
                image={selectedMedia.posterUrl}
                alt={selectedMedia.title}
                style={{ maxWidth: "300px", marginBottom: "20px", borderRadius: "8px" }}
            />
            <Stack spacing={2}>
                <Typography>{selectedMedia.description}</Typography>
                <Typography>
                    <strong>Рейтинг:</strong> {selectedMedia.rating}
                </Typography>
            </Stack>
            <Link to={"/serials"}  className="mt-3 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">Назад</Link>
        </Box>
    );
}