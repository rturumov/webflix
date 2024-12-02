import { createFileRoute } from '@tanstack/react-router'

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
  console.log("Response status:", response.status);
  if (!response.ok) {
    console.error("Ошибка загрузки данных фильма:", response.statusText);
    throw new Error("Ошибка загрузки данных фильма");
  }
  return await response.json();
}
