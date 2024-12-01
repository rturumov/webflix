import {createFileRoute, Link, useNavigate} from '@tanstack/react-router'
import { Box, Typography, CardMedia, Stack } from "@mui/material";
export const Route = createFileRoute('/movies/$moviesId')({
  component: MoviesId
})

function MoviesId(){
  console.log("MoviesId component rendered");
  const { moviesId } = Route.useParams();
  console.log("ID from params:", moviesId);
  if (!moviesId || moviesId === "undefined") {
    return <div>Некорректный ID фильма</div>;
  }

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
  ]

  const selectedMedia = movies.find((movie) => movie.id === parseInt(moviesId));

  if (!selectedMedia) {
    return <Text>Фильм не найден</Text>;
  }
  console.log("useParams:", moviesId);
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
        <Link to={"/movies"}  className="mt-3 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">Назад</Link>
      </Box>
  );
}