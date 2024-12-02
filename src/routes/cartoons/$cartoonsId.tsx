import {createFileRoute, Link} from '@tanstack/react-router'
import {Box, CardMedia, Stack, Typography} from "@mui/material";
import {getMovies} from "../movies/api.tsx";
import {getCartoons} from "./api.tsx";

export const Route = createFileRoute('/cartoons/$cartoonsId')({
  component: CartoonsId,
    loader: async ({ params }) => {
        console.log("Params in loader:", params);
        if (!params.cartoonsId) {
            throw new Error("Некорректный ID фильма");
        }
        return await getCartoons(params.cartoonsId);
    },
});

function CartoonsId(){
    console.log("CartoonsId component rendered");
    const { cartoonsId } = Route.useParams();
    const cartoon = Route.useLoaderData();
    console.log("ID from params:", cartoonsId);
    console.log("Movie data:", cartoon);
    if (!cartoonsId || cartoonsId === "undefined") {
        return <div>Некорректный ID фильма</div>;
    }
    console.log("useParams:", cartoonsId);
    console.log("cartoon:", cartoon);
    return (
        <Box padding="80px">
            <Typography variant="h4" gutterBottom>
                {cartoon.title}
            </Typography>
            <CardMedia
                component="img"
                image={cartoon.posterUrl}
                alt={cartoon.title}
                style={{ maxWidth: "300px", marginBottom: "20px", borderRadius: "8px" }}
            />
            <Stack spacing={2}>
                <Typography>{cartoon.description}</Typography>
                <Typography>
                    <strong>Рейтинг:</strong> {cartoon.rating}
                </Typography>
            </Stack>
            <Link to={"/cartoons"}  className="mt-3 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">Назад</Link>
        </Box>
    );
}