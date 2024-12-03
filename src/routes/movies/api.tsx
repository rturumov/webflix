import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useMemo, useCallback, useState } from 'react';

export const Route = createFileRoute('/movies/api')({
  component: () => <div>Hello /movies/api!</div>
})

type MovieDetail = {
  name: string;
  id: string;
  title: string;
  posterUrl: string;
  description: string;
  rating: number;
  type: string;
  likes: number;
  likedByUser: boolean;
};

export async function getMovies(id: string): Promise<MovieDetail> {
  const response = await fetch(`http://localhost:5000/movies/${id}`);
  if (!response.ok) {
    throw new Error("Ошибка загрузки данных фильма");
  }
  return await response.json();
}

export function useMovieDetails(id: string) {
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fetchMovie = useCallback(async () => {
    try {
      setError(null); 
      const data = await getMovies(id);
      setMovie(data);
    } catch (err) {
      setError((err as Error).message);
    }
  }, [id]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  useEffect(() => {
    if (movie) {
      console.log("Данные фильма успешно загружены:", movie);
    }
  }, [movie]);

  return { movie, error, fetchMovie };
}
