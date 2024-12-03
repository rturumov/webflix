import { createFileRoute, Link } from '@tanstack/react-router';
import { Box, CardMedia, Stack, Typography } from "@mui/material";
import { getCartoons } from "./api.tsx";
import { useEffect, useCallback } from "react";

export const Route = createFileRoute('/cartoons/$cartoonsId')({
  component: CartoonsId,
  loader: async ({ params }) => {
    if (!params.cartoonsId) {
      throw new Error("Некорректный ID мультфильма");
    }
    return await getCartoons(params.cartoonsId);
  },
});

function CartoonsId() {
  const { cartoonsId } = Route.useParams();
  const cartoon = Route.useLoaderData();

  const navigateBack = useCallback(() => {
    console.log("Navigating back to cartoons list");
  }, []);

  useEffect(() => {
    if (!cartoonsId || cartoonsId === "undefined") {
      console.error("Invalid cartoon ID");
    }
  }, [cartoonsId]);

  if (!cartoonsId || cartoonsId === "undefined") {
    return <div>Некорректный ID фильма</div>;
  }

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
      <Link
        to={"/cartoons"}
        onClick={navigateBack}
        className="mt-3 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
      >
        Назад
      </Link>
    </Box>
  );
}

export default CartoonsId;
