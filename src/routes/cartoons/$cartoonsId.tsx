import {createFileRoute, Link} from '@tanstack/react-router'
import {Box, CardMedia, Stack, Typography} from "@mui/material";

export const Route = createFileRoute('/cartoons/$cartoonsId')({
  component: CartoonsId
})


function CartoonsId(){
    const { cartoonsId } = Route.useParams();
    console.log("ID from params:", cartoonsId);
    if (!cartoonsId || cartoonsId === "undefined") {
        return <div>Некорректный ID фильма</div>;
    }

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
    ]
    const selectedMedia = cartoons.find((cartoon) => cartoon.id === parseInt(cartoonsId));

    if (!selectedMedia) {
        return <Text>Фильм не найден</Text>;
    }
    console.log("useParams:", cartoonsId);
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
            <Link to={"/cartoons"}  className="mt-3 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">Назад</Link>
        </Box>
    );
}