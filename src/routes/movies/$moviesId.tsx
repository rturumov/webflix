import {createFileRoute, Link, useNavigate} from '@tanstack/react-router'
import { Box, Typography, CardMedia, Stack } from "@mui/material";
import {getMovies} from "./api.tsx";
export const Route = createFileRoute('/movies/$moviesId')({
  component: MoviesId,
  loader: async ({ params }) => {
    console.log("Params in loader:", params);
    if (!params.moviesId) {
      throw new Error("Некорректный ID фильма");
    }
    return await getMovies(params.moviesId);
  },
});


function MoviesId(){
  console.log("MoviesId component rendered");
  const { moviesId } = Route.useParams();
  const movie = Route.useLoaderData();
  console.log("ID from params:", moviesId);
  console.log("Movie data:", movie);
  if (!moviesId || moviesId === "undefined") {
    return <div>Некорректный ID фильма</div>;
  }


  console.log("useParams:", moviesId);
  console.log("movie:", movie);
  return (
      <Box padding="80px">
        <Typography variant="h4" gutterBottom>
          {movie.title}
        </Typography>
        <CardMedia
            component="img"
            image={movie.posterUrl}
            alt={movie.title}
            style={{ maxWidth: "300px", marginBottom: "20px", borderRadius: "8px" }}
        />
        <Stack spacing={2}>
          <Typography>{movie.description}</Typography>
          <Typography>
            <strong>Рейтинг:</strong> {movie.rating}
          </Typography>
        </Stack>
        <Link to={"/movies"}  className="mt-3 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">Назад</Link>
      </Box>
  );
}