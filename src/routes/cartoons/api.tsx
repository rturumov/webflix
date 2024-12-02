import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cartoons/api')({
  component: () => <div>Hello /cartoons/api!</div>
})

type CartoonDetail = {
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

export async function getCartoons(id: string): Promise<CartoonDetail> {
    const response = await fetch(`http://localhost:5000/cartoons/${id}`);
    console.log("Response status:", response.status);
    if (!response.ok) {
        console.error("Ошибка загрузки данных фильма:", response.statusText);
        throw new Error("Ошибка загрузки данных фильма");
    }
    return await response.json();
}
