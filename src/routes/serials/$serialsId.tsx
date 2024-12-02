import {createFileRoute, Link} from '@tanstack/react-router'
import {Box, CardMedia, Stack, Typography} from "@mui/material";

import {getSerials} from "../cartoons/api.tsx";

export const Route = createFileRoute('/serials/$serialsId')({
  component: SerialsId,
    loader: async ({ params }) => {
        console.log("Params in loader:", params);
        if (!params.serialsId) {
            throw new Error("Некорректный ID фильма");
        }
        return await getSerials(params.serialsId);
    },
})

function SerialsId(){
    console.log("SerialsId component rendered");
    const { serialsId } = Route.useParams();
    const serial = Route.useLoaderData();
    console.log("ID from params:", serialsId);
    console.log("Serial data:", serial);
    if (!serialsId || serialsId === "undefined") {
        return <div>Некорректный ID фильма</div>;
    }


    console.log("useParams:", serialsId);
    console.log("movie:", serial);
    return (
        <Box padding="80px">
            <Typography variant="h4" gutterBottom>
                {serial.title}
            </Typography>
            <CardMedia
                component="img"
                image={serial.posterUrl}
                alt={serial.title}
                style={{ maxWidth: "300px", marginBottom: "20px", borderRadius: "8px" }}
            />
            <Stack spacing={2}>
                <Typography>{serial.description}</Typography>
                <Typography>
                    <strong>Рейтинг:</strong> {serial.rating}
                </Typography>
            </Stack>
            <Link to={"/serials"}  className="mt-3 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">Назад</Link>
        </Box>
    );
}